import { Link } from "react-router-dom"

export const Item = ({item}) => {

    return (
        <div className= 'col-3 m-1'>
            <img src={item.img} alt={item.Name}/>
            <h4> {item.Name} </h4> 
            <p>{item.Description}</p>
            <p>Precio: <strong>${item.Price}</strong></p>
            <Link to={`/detail/${item.Id}`} className='btn btn-primary'>Ver más</Link>
        </div>
    )
}