import { ItemCounter } from "../ItemCounter/ItemCounter"
import { Link } from 'react-router-dom'
import './ItemDetail.scss'

export const ItemDetail = ({item}) => {

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
                <ItemCounter/>
                <hr/>
                <button className="btn btn-success me-2">Comprar</button>
                <Link to="/">
                    <button className="btn btn-danger">Cancelar</button>
                </Link>
                
            </div>
        </div>
    )
}