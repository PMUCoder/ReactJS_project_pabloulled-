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
        <div className="container my-2">
            <div className="d-flex justify-content-between">
                <h2>Detalle de la Compra</h2>
                <h3>TOTAL: ${totalPurchase().toFixed(2)}</h3>
            </div>
            
            <hr/>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</button>
            <br/><br/>
            {
                cart.map((prod) => (
                    <div className="mb-2 cartP" key={prod.id}>
                        <div className="row border rounded">
                            <div className="col mx-auto p-2">
                                <h4>{prod.Name}</h4>
                                <img className="cartP__cartImg" src={prod.img} alt={prod.Name}/>
                            </div>
                            <div className="col mx-auto p-2">
                                <p>Precio por Unidad: ${prod.Price}</p>
                                <p>Cantidad: {prod.counter}u.</p> 
                                <p>Precio Total: ${prod.Price * prod.counter}</p> 
                            </div>
                            <div className="col my-auto p-2 text-center">
                                <button onClick={ () => deleteItemFromCart (prod.id) } className="btn btn-danger align-middle"><BsFillTrashFill/></button>
                            </div>
                        </div>
                    </div>
                ))
            }

            <h3 className="mt-4">TOTAL: ${totalPurchase().toFixed(2)}</h3>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar Carrito</button>
            <Link className="btn btn-success mx-2" to="/checkout">Finalizar Compra</Link>
        </div> 

    )
}