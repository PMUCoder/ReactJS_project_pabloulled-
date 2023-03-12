import { ItemCounter } from "../ItemCounter/ItemCounter"

export const ItemDetail = ({item}) => {

    return (
        <div className = "container my-5">
            <h2>{item.Name}</h2>
            <img src={item.img} alt={item.Name}/>
            <p>{item.Description}</p>
            <p>Precio: ${item.Price}</p>
            <ItemCounter/>
        </div>
    )
}