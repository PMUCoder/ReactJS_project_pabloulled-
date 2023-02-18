import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar/Navbar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'


function App () {
  return (
    <div>
      <Navbar/>
      <ItemListContainer/>
    </div> 
  )
}

export default App;
