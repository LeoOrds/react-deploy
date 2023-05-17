import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import "./Services.css";

function Services({children}) {
    return (<>
    <div>{children}</div>
    <Container className='service_bg'>
    <Nav justify variant="tabs" defaultActiveKey="" >
      <Nav.Item className='services_text'>
        <Nav.Link href="/Birthingclinic">Birthing Care</Nav.Link>
      </Nav.Item>
      <Nav.Item  className='services_text'>
        <Nav.Link eventKey="link-1" href='/Immunization'>Immunization</Nav.Link>
      </Nav.Item>
      <Nav.Item className='services_text'>
        <Nav.Link eventKey="link-2" href='/Familiplanning'>Family Planning</Nav.Link>
      </Nav.Item>
      <Nav.Item className='services_text'>
        <Nav.Link eventKey="link-3" href='/Medfam'>Family Medicine</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    </>
    );
}
export default Services;
