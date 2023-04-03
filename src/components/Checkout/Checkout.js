import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc, writeBatch, query, where, documentId, getDocs} from "firebase/firestore"
import { Formik } from 'formik'
import * as Yup from 'yup'

const schema = Yup.object().shape({
    nombre: Yup.string()
                .required('Campo mandatorio')
                .min(4, 'El nombre es demasiado corto')
                .max(30, 'Alcanzo el numero maximo de caracteres'),
    direccion: Yup.string()
                .required('Campo mandatorio')
                .min(6, 'Minimo 6 caracteres')
                .max(30, 'Alcanzo el numero maximo de caracteres'),
    email: Yup.string()
                .email('El email es invalido')
                .required('Campo mandatorio')
            
})

export const Checkout = () => {

    const {cart, totalPurchase, emptyCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)

    const generateOrder = async (values) => {
        const orden = {
            usuario: values,
            items: cart.map((prod) => ({id: prod.id, price: prod.Price, cantidad: prod.counter, name: prod.Name})),
            total: totalPurchase(),
            fecha: new Date()
        }

        const batch = writeBatch(db)
        const ordersRef = collection(db, 'orders')
        const productsRef = collection(db, 'productos')
        const outOfStock = []
        const itemsRef = query (productsRef, where (documentId(), 'in', cart.map(prod => prod.id)))
        const response = await getDocs(itemsRef)

        response.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id)
            if(doc.data().Stock >= item.counter) {
                batch.update(doc.ref, {
                    Stock: doc.data().Stock - item.counter
                })
            } else {
                outOfStock.push(item)
            }
        })

        if (outOfStock.length === 0) {
            await batch.commit()
            addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
        } else {
            alert("Error en el pedido, no hay stock suficiente")
        }
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Tu orden fue procesada correctamente</h2>
                <hr/>
                <p>Numero de Orden: <strong>{orderId}</strong></p>
                <Link className="btn btn-primary my-3" to="/">Cerrar y Volver</Link>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/"/>
    }

    return (
        <div className= "container my-5">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: ''
                }}
                validationSchema={schema}
                onSubmit={generateOrder}
            >
                {( {values, errors, handleChange, handleSubmit, isSubmitting} ) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleChange}
                            value={values.nombre}
                            type={'text'}
                            placeholder='Nombre'
                            className="form-control my-2"
                            name="nombre"
                        />
                        {errors.nombre && <p className="alert alert-danger">{errors.name}</p>}
                        <input
                            onChange={handleChange}
                            value={values.direccion}
                            type={'text'}
                            placeholder='Direccion'
                            className="form-control my-2"
                            name="direccion"
                        />
                        {errors.direccion && <p className="alert alert-danger">{errors.direccion}</p>}
                        <input
                            onChange={handleChange}
                            value={values.email}
                            type={'email'}
                            placeholder='e-mail'
                            className="form-control my-2"
                            name="email"
                        />
                        {errors.email && <p className="alert alert-danger">{errors.email}</p>}
                        <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Enviar</button>
                    </form>
                )}
            </Formik>
        </div>
    )
}