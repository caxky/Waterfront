import './Navigation.scss';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Row } from 'react-bootstrap';

export default function Navigation() {
  return (
    <div className='navigation'>
      <Row className='ms-auto pe-2 py-1 text-end'>
        <span>{"(613) 123-4567"} | {"contact@waterfrontmanagement.ca"}</span>
      </Row>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                src='logo.svg'
                width='40'
                height='40'
                className="d-inline-block align-top"
                alt="Waterfront management logo"
              >
              </img>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/#home" className='mx-2'>Home</Nav.Link>
              <Nav.Link href="/#about" className='mx-2'>About Us</Nav.Link>
              <Nav.Link href="/#values" className='mx-2'>Our Values</Nav.Link>
              <Nav.Link href="/#staff" className='mx-2'>Our Staff</Nav.Link>
              <Nav.Link href="/#pricing" className='mx-2'>Pricing</Nav.Link>
            </Nav>
            <Button href='/#book'>BOOK NOW</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}
