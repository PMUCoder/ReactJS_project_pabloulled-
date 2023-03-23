
import { Link } from 'react-router-dom'

export const ItemCounter = ({max, counter, setCounter, handleAddToCart}) => {

    const handleAdd = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleSubstract = () => {
        counter > 1 && setCounter(counter - 1)
    }

    return (
        <div className="container my-5">
            <button onClick={handleAdd} className="btn btn-success me-2">+</button>
            <button onClick={handleSubstract} className="btn btn-danger">-</button>
            <p>Units: {counter}</p>
            <button onClick={handleAddToCart} className="btn btn-success me-2">Comprar</button>
                <Link to="/">
                    <button className="btn btn-danger">Cancelar</button>
                </Link>
        </div>
    )
}
