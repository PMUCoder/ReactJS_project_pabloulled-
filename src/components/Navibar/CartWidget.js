import Badge from 'react-bootstrap/Badge'
import './CartWidget.scss'

export const CartWidget = () => {
    return (
        <div className='carritoHeader'>
            <img src='./img/basket.png' alt="Carrito" className='carritoHeader__carrito'/> 
            <Badge bg="danger" className='carritoHeader__Badge'>9</Badge>
            <span className="visually-hidden">unread messages</span>
        </div>
    )
}

