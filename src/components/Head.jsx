import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">DER VISIONAERE GALERÍA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cardholder">Galería Completa</Nav.Link>
            <Nav.Link to='/contacto' href="/contacto">Contacto</Nav.Link>
            <NavDropdown title="Ver Más" id="basic-nav-dropdown">
              <NavDropdown.Item href="/*">Colecciones</NavDropdown.Item>
              <NavDropdown.Item href="/*">
                Paises & Monumentos
              </NavDropdown.Item>
              <NavDropdown.Item href="/*">Promociones</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/*">
                Conoce a nuestros fotografos
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;