import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navibar } from './components/Navibar/Navibar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'
import { Nosotros } from './components/Nosotros/nosotros'
import { Contacto } from './components/Contacto/contacto'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App () {
  return (

    <BrowserRouter>

      <Navibar />

      <Routes>
        <Route path="/" element={ <ItemListContainer /> }/>
        <Route path="/productos/:categoryId" element={ <ItemListContainer /> }/>
        <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="/nosotros" element={ <Nosotros /> }/>
        <Route path="/contacto" element={ <Contacto /> }/>
        <Route path="*" element={ <Navigate to ="/" /> }/>
      </Routes>

      {/* <Footer /> */}

    </BrowserRouter>
  )
}

export default App
