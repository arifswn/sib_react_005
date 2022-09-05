//import component Bootstrap React
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import NavDropdown from "react-bootstrap/NavDropdown"

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src={"/favicon.ico"}
            alt="react-router-breadcrumb"
            width="30"
            height="30"
          />
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link">
              Home
            </Nav.Link>
            <NavDropdown title="Materi" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">Sesi 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Sesi 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Sesi 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Assigment 1</NavDropdown.Item>
              <NavDropdown.Item href="#">Assigment 2</NavDropdown.Item>
              <NavDropdown.Item href="#">Assigment 3</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about" className="nav-link">
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
