// Descripción de la actividad.

// Crea un componente ItemCount.js, que debe estar compuesto de un botón y controles, para incrementar y decrementar la cantidad requerida de ítems

// Recomendaciones.

// El número contador nunca puede superar el stock disponible.
// De no haber stock el click no debe tener efecto y por ende no ejecutar el callback onAdd.
// Si hay stock al clickear el botón se debe ejecutar onAdd con un número que debe ser la cantidad seleccionada por el usuario.

// Tener en cuenta.

// Como sabes, todavía no tenemos nuestro detalle de ítem y este desarrollo es parte de él, así que por el momento puedes probar e importar este componente dentro del ItemListContainer, solo a propósitos de prueba. Después lo sacaremos de aquí y lo incluiremos en el detalle del ítem.

import { useState } from "react"

export const Contador = () => {

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
            <button onClick={handleClickAdd} className="btn btn-success">+</button>
            <button onClick={handleClickSubstract} className="btn btn-danger">-</button>
            <p>Units: {counter}</p>
        </div>
    )
}
