import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navibar } from './components/Navibar/Navibar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App () {
  return (
    <div>
      <Navibar/>
      <h3 className="itemListContainerStyle">ItemListContainer</h3>
      <hr></hr>
      <ItemListContainer Product="Paraguas" Description="Para dos personas" Price= "3.000,00.-"/>
      <ItemListContainer Product="Zapatillas" Description="Tenis talle 42" Price= "25.000,00.-"/>
      <ItemListContainer Product="Raqueta" Description="250grs Oversize" Price= "56.000,00.-"/>
    </div> 
  )
}

export default App;
