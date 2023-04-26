import './Navbarheader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Navbarheader = () => {
    return (
        <>
          <Navbar className='navbar-custom'>
            <Container>
              <Navbar.Brand href="#home"> Akshat Patel</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
                <Nav.Link href="#hireme">Hire Me</Nav.Link>
              </Nav>
              <Nav>
              <Button className='button_navbarheader' variant="dark">Contact Me</Button>{' '}
          </Nav>
            </Container>
          </Navbar>
        </>
      );
}

export default Navbarheader;




