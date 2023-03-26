import { useContext } from 'react'
import Badge from 'react-bootstrap/Badge'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import './CartWidget.scss'

export const CartWidget = () => {

const {cart, totalQuantity} = useContext(CartContext)
    return (
        <Link to="/cart" className={`cartHeader ${cart.length > 0 ? 'cartWidgetVisible' : ''}`}>
            <img src='./img/basket.png' alt="Carrito" className='cartHeader__Cart'/> 
            <Badge bg="danger" className='cartHeader__Badge'>{totalQuantity()}</Badge>
        </Link>
    )
}

