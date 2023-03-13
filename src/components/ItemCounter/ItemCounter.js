import { useState } from "react"

export const ItemCounter = () => {

    let [counter,setCounter] = useState(0)
    const stock = 15

    const handleClickAdd = () => {
        setCounter (counter<stock ? counter+1 : counter=stock)
    }

    const handleClickSubstract = () => {
        setCounter (counter<1 ? counter=0 : counter-1)
    }

    return (
        <div className="container my-5">
            <button onClick={handleClickAdd} className="btn btn-success me-2">+</button>
            <button onClick={handleClickSubstract} className="btn btn-danger">-</button>
            <p>Units: {counter}</p>
        </div>
    )
}
