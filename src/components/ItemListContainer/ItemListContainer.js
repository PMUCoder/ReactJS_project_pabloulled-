import { Contador } from './ActividadContador.js'
import './ItemListContainer.scss'

export const ItemListContainer = ( {Product, Description, Price} ) => {
    return (
        <div>
            <ul className="contenedor">
                <li>Producto: {Product}</li>
                <li>Descripción: {Description}</li>
                <li>Precio: {Price}</li>
            </ul>
            <Contador/>    
        </div>
    )
}