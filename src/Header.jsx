import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

function Header() {
  return (
    <Navbar expand="lg " className="bg-body-tertiary" id="headercontainer">
      <Container>
        <nav className="logocontainer">
          <Navbar.Brand href="#home" id="logoName">
            <Link to="/"> Fusion Global</Link>
          </Navbar.Brand>
          <h3 href="#home" id="slogan">
            Cocina internacional
          </h3>
        </nav>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <NavDropdown title="Reservaciones" id="basic-nav-dropdown">
              <NavDropdown.Item href="/registrate">Registrate</NavDropdown.Item>
              <NavDropdown.Item href="/buscarreservacion">
                Busca tu reservacion
              </NavDropdown.Item>
              <NavDropdown.Item href="/reserva">Reserva</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/contacto">
                Contacta a Fusion Global
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
