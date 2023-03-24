import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

const {totalQuantity} = useContext(CartContext)
    return (
        <Link to="/cart" className='carritoHeader'>
            <img src='./img/basket.png' alt="Carrito" className='carritoHeader__Carrito'/> 
            <Badge bg="danger" className='carritoHeader__Badge'>{totalQuantity()}</Badge>
        </Link>
    )
}

