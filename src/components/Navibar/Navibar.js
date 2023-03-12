import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navibar.scss'
import { CartWidget } from './CartWidget.js'
import { Logo } from './logo.js'
import { Link } from 'react-router-dom'

export const Navibar = () => {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Link to="/">
              <Logo/>
            </Link>
            <Nav className="navbar" >
              <Link to="/" className='navbar__Link'>Home</Link>
              <Link to="/productos/Papeleria" className='navbar__Link'>Papeleria</Link>
              <Link to="/productos/Escribir" className='navbar__Link'>Escribir</Link>
              <Link to="/productos/Colorear" className='navbar__Link'>Colorear</Link>
              <Link to="/nosotros" className='navbar__Link'>Nosotros</Link>
              <Link to="/contacto" className='navbar__Link'>Contacto</Link>
              <CartWidget/>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
    )
}






