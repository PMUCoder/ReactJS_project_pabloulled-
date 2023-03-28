import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.scss'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
export const ItemListContainer = () => {

    const [productos, setProductos] = useState ([])
    const [loading, setLoading] = useState (true)

    const { categoryId } = useParams()
    useEffect (()=>{
        setLoading(true)

        const productRef = collection(db, "productos")
        const querydb = categoryId
                            ? query(productRef, where("Category", "==", categoryId))
                            : productRef
        getDocs(querydb)
            .then((res) => {
                const firedocs = res.docs.map((doc) => {
                    return {...doc.data(), id: doc.id} 
                })
                setProductos(firedocs)
            })
            .finally(() => {
                setLoading(false)
            })
    },[categoryId])

    return (
        <div className="contenedor">
            { loading ? <h2>Cargando...</h2> : <ItemList items={productos} /> }
        </div>
    )
}