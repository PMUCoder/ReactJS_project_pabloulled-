import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCounter } from "../ItemCounter/ItemCounter"
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
                    {/* <ColorPicker setColor={setColor} options={item.Colors}/> */}

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