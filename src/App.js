import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navibar } from './components/Navibar/Navibar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App () {
  return (
    <div>
      <Navibar/>
      <ItemListContainer Product="Paraguas" Description="Para dos personas" Price= "3.000,00.-"/>
    </div> 
  )
}

export default App;
