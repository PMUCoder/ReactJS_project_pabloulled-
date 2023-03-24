import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import { ItemList } from '../ItemList/ItemList'
import { pedirDatos } from '../../support-fn/pedirDatos' 
import { useParams } from 'react-router-dom'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    const { categoryId } = useParams()
    useEffect (()=>{
        setLoading(false)
        pedirDatos ()
            .then((response)=>{
                if(!categoryId) {
                    setProductos(response)
                } else {
                    setProductos(response.filter((prod) => prod.Category === categoryId) )
                }
            })
            .catch((error)=>{
                console.log (error)
            })
            .finally(() => {
                setLoading (false)
            })
    },[categoryId])

    return (
        <div className="contenedor">
            { loading ? <h2>Cargando...</h2> : <ItemList items={productos} /> }
        </div>
    )
}