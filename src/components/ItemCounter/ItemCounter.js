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
            <button 
                onClick={handleSubstract} 
                className={`btn btn-${counter === 1 ? "outline-danger" : "danger"} me-2`}
                disabled={counter === 1}>
                -
            </button>
            <button
                onClick={handleAdd} 
                className={`btn btn-${counter === max ? "outline-success" : "success"} me-2`}
                disabled={counter === max}>
                +
            </button>
            <p>Units: {counter}</p>
            <Link to="/">
                <button className="btn btn-danger me-2">Cancelar</button>
            </Link>
            <button onClick={handleAddToCart} className="btn btn-success">Comprar</button>
        </div>
    )
}
