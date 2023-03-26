import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { LowStockMsg } from "./LowStockMsg"
import './ItemDetail.scss'

export const ItemDetail = ({item}) => {

    const {addToCart, isInCart} = useContext(CartContext)

    const [counter,setCounter] = useState(1)

    const handleAddToCart = () => {
        const newItem = {
            ...item,
            counter
        }
        
        addToCart(newItem)
    }

    if (item.Stock === 0) {
        return (
            <div className = "container my-5">
                Disculpas, en este momento no hay stock de este producto. Te enviaremos una notificación cuando recibamos.
                <br></br>
                <br></br>
                <Link to="/" className="btn btn-primary">Volver</Link>
            </div>
        )
    }

    return (
        <div className= "container mx-auto mt-3 row">
            <div className = "container my-5 col">
                <h2>{item.Name}</h2>
                <img src={item.img} className="rounded-2 pictsDetail" alt={item.Name}/>
            </div>
            <div className = "container my-5 col">
                <p>Descripcion: {item.Description}</p>
                <p>Precio: ${item.Price}</p>
                <p>Stock Disponible: {item.Stock}u.</p>
                {item.Stock <= 5 && <LowStockMsg stock={item.Stock}/>}

                {
                    isInCart(item.Id)
                        ?   <Link to="/cart" className="btn btn-success my-2">Ir al Carrito</Link>
                        :   <ItemCounter 
                                max={item.Stock}
                                counter={counter}
                                setCounter={setCounter}
                                handleAddToCart={handleAddToCart}
                            />
                }  
                <br/>
            </div>
        </div>
    )
}