import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navibar.scss'
import { CartWidget } from './CartWidget.js'
import { Logo } from './logo.js'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'

export const Navibar = () => {
  const {user, logout} = useContext(LoginContext)

  return (
    <header bg="primary" variant="dark">
      <div>
        <>
          <Navbar bg="primary" variant="dark">
            <Container>
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
      <div className="bg-primary">
        <div className="loginState container">
          <h6>Bienvenido: {user.email}</h6>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>
      </div>
    </header>
    )
}






