import { Navibar } from '../components/Navibar/Navibar'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { Nosotros } from '../components/Nosotros/nosotros'
import { Contacto } from '../components/Contacto/contacto'
import { Cart } from '../components/Cart/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Checkout } from '../components/Checkout/Checkout'

export const PrivateRoutes = () => {

    return (

        <>
            <Navibar />

            <Routes>
                <Route path="/" element={ <ItemListContainer /> }/>
                <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
                <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
                <Route path="/cart" element={ <Cart /> }/>
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="/nosotros" element={ <Nosotros /> }/>
                <Route path="/contacto" element={ <Contacto /> }/>
                <Route path="*" element={ <Navigate to ="/" /> }/>
            </Routes>
        </>

    )
}
