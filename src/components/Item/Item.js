import { Link } from "react-router-dom"
import './Item.scss'

export const Item = ({item}) => {

    return (
        <div className= 'col-3 m-1 card'>
            <img src={item.img} className="rounded-2 picts" alt={item.Name}/>
            <h4> {item.Name} </h4> 
            <p>{item.Description}</p>
            <p>Precio: <strong>${item.Price}</strong></p>
            <Link to={`/detail/${item.id}`} className='btn btn-primary mb-2' >Ver más</Link>
        </div>
    )
}