import { useState } from "react"
import { ItemCounter } from "../ItemCounter/ItemCounter"
// import { ColorPicker } from "../../support-fn/ColorPicker"
import './ItemDetail.scss'

export const ItemDetail = ({item}) => {

    const [counter,setCounter] = useState(1)
    // const [color, setColor] = useState(null)
    // console.log(color)

    const handleAddToCart = () => {
        const newItem = {
            ...item,
            counter
        }
        console.log(newItem)
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
                <ItemCounter 
                    max={item.Stock}
                    counter={counter}
                    setCounter={setCounter}
                    handleAddToCart={handleAddToCart}
                />
                <hr/>
            </div>
        </div>
    )
}