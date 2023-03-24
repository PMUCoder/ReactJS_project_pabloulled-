import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navibar } from './components/Navibar/Navibar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Nosotros } from './components/Nosotros/nosotros'
import { Contacto } from './components/Contacto/contacto'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CartProvider } from './context/CartContext'
import { Cart } from './components/Cart/Cart'

function App () {

  return (

    <CartProvider>

      <BrowserRouter>

        <Navibar />

        <Routes>
          <Route path="/" element={ <ItemListContainer /> }/>
          <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
          <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
          <Route path="/cart" element={ <Cart /> }/>
          <Route path="/nosotros" element={ <Nosotros /> }/>
          <Route path="/contacto" element={ <Contacto /> }/>
          <Route path="*" element={ <Navigate to ="/" /> }/>
        </Routes>

        {/* <Footer /> */}

      </BrowserRouter>

    </CartProvider>
  )
}

export default App
