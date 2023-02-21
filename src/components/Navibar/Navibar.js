import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navibar.scss'
import { CartWidget } from './CartWidget.js'
import { Logo } from './logo.js'

export const Navibar = () => {
  return (
    <div>
      <>
        <Navbar bg="primary" variant="dark">
          <Container>
            {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
            <Logo/>
            <Nav className="me-auto" >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#categorias">Categorias</Nav.Link>
              <Nav.Link href="#perfil">Perfil</Nav.Link>
              <CartWidget/>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
    )
}






