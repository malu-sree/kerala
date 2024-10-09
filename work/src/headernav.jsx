import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Headernav() {
  return (
    <Navbar expand="lg" style={{backgroundColor:"Blue"}}>
      <Container>
        <Navbar.Brand href="#home">GET WHAT YOU LIKE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">login</Nav.Link>
            <NavDropdown title="Section" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jewlery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sports
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Outfits</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Cosmetics
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Books</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headernav;