import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"

function CollapsibleExample() {
  return (
    <Navbar fixed='sticky' collapseOnSelect expand="lg" bg="white" variant="white">
      <Container>
        <Navbar.Brand href='/'><img style={{width: 100}} src="./images/logo.jpg" size='sm' /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='./About'><span className='nav_right'>About</span></Nav.Link>
              <NavDropdown className='navdrop' title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item href='./Birthingclinic'>Birthing Clinic</NavDropdown.Item>
                <NavDropdown.Item href='./Immunization'>Immunization</NavDropdown.Item>
                <NavDropdown.Item href='./Familiplanning'>Family Planning</NavDropdown.Item>
                <NavDropdown.Item href='./Medfam'>Family Medicine</NavDropdown.Item>
              </NavDropdown>
            <Nav.Link href='./Wellness'><span className='nav_right'>Wellness</span></Nav.Link>
            <Nav.Link href='./Faqs'><span className='nav_right'>FAQ's</span></Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='./Reqapp'><span className='nav_left1'>REQUEST AN APPOINTMENT</span></Nav.Link>
            <Nav.Link href='./Patientos'><span className='nav_left1'>PATIENT ONLINE SERVICES</span></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   

  );
}

export default CollapsibleExample;
