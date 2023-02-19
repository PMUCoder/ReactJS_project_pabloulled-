import './ItemListContainer.scss'

export const ItemListContainer = ( {Product, Description, Price} ) => {
    return (
        <ul className="contenedor">
            <li>Producto: {Product}</li>
            <li>Descripción: {Description}</li>
            <li>Precio: {Price}</li>
        </ul>
        
    )
}