import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore"
import { db } from "../../firebase/config"

export const Checkout = () => {

    const { cart, totalPurchase, emptyCart } = useContext(CartContext)
    
    const {orderId, setOrderId} = useState[null]

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

    const handleSubmit = (e) => {
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

        const productsRef = collection(db, 'products')
        
        cart.forEach((item) => {
            const docRef = doc(productsRef, item.id)
        
            getDoc(docRef)
                .then((doc) => {
                    if(doc.data().stock >= item.counter) {
                        updateDoc(docRef, {
                            stock: doc.data().Stock - item.counter
                        })
                    } else {
                        alert("En este momento no contamos con stock suficiente de " + item.Name + ".Intenta nuevamente mas tarde.")
                    }

                })
        

        })

        const ordersRef = collection(db, 'orders')
        
        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })

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