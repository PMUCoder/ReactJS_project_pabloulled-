import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { db } from "../../firebase/config"
import { collection, addDoc, writeBatch, query, where, documentId, getDocs} from "firebase/firestore"

export const Checkout = () => {

    const {cart, totalPurchase, emptyCart} = useContext(CartContext)
    const [orderId, setOrderId] = useState(null)
    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (values.nombre.length < 3) {
            alert("Nombre Inválido")
            return
        }
        if (values.direccion.length < 3) {
            alert("Direccion Inválido")
            return
        }
        if (values.email.length < 3) {
            alert("Email Inválido")
            return
        }
        
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
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder='Nombre'
                    className="form-control my-2"
                    name="nombre"
                />
                <input
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder='Direccion'
                    className="form-control my-2"
                    name="direccion"
                />
                <input
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    placeholder='e-mail'
                    className="form-control my-2"
                    name="email"
                />
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}