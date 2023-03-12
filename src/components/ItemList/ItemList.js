import { Item } from "../Item/Item"

export const ItemList = ({items}) => {

    return (
        <div>
            <h2>Productos</h2>
            <hr/>
            <div className='row my-5'>
                { items.map( (producto) => <Item key={producto.Id} item={producto}/>) }
            </div>
        </div>
    )}