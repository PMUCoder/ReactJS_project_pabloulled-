import { Link } from "react-router-dom"
import './Item.scss'

export const Item = ({item}) => {

    return (
        <div className= 'col-3 m-1'>
            <img src={item.img} className="rounded-2 picts" alt={item.Name}/>
            <h4> {item.Name} </h4> 
            <p>{item.Description}</p>
            <p>Precio: <strong>${item.Price}</strong></p>
            <Link to={`/detail/${item.Id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}