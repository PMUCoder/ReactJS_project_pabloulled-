import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import './Cart.scss'
import { Link } from "react-router-dom"

export const Cart = () =>{

    const { cart, totalPurchase, emptyCart, deleteItemFromCart } = useContext (CartContext)

    if (cart.length === 0) {
        return (
            <div className="container my-5">
                <h2>Aun no tienes productos en el carrito</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Volver al inicio</Link>
            </div>  
        )
    }

    return (
        <div className="container my-5">

            <h2>Detalle de la Compra</h2>
            <hr/>

            {
                cart.map((prod) => (
                    <div key={prod.id}>
                        <h4>{prod.Name}</h4>
                        <img className="cartImg" src={prod.img} alt={prod.Name}/>
                        <p>Precio por Unidad: ${prod.Price}</p>
                        <p>Cantidad: {prod.counter}u.</p> 
                        <p>Precio Total: ${prod.Price * prod.counter}</p>                       
                        <button onClick={ () => deleteItemFromCart (prod.id) } className="btn btn-danger"><BsFillTrashFill/></button>
                        <hr/>
                    </div>
                ))
            }

            <h3>TOTAL: ${totalPurchase().toFixed(2)}</h3>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Finalizar Compra</Link>
        </div> 

    )
}