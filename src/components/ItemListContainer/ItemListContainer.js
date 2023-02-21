import './ItemListContainer.scss'

export const ItemListContainer = ( {Product, Description, Price} ) => {
    //el greeting ya esta desestructurado 
    return (
        <div>
            <ul className="contenedor">
                <li>Producto: {Product}</li>
                <li>Descripción: {Description}</li>
                <li>Precio: {Price}</li>
            </ul>
        </div>
    )
}