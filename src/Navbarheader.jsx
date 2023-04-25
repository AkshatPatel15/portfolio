import './Navbarheader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbarheader = () => {
    return (
        <>
          <Navbar className='navbar-custom'>
            <Container>
              <Navbar.Brand href="#home"> INITAIL_LETTERS</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Projects</Nav.Link>
                <Nav.Link href="#pricing">Hire Me</Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          {/* <br /> */}
        </>
      );
}

export default Navbarheader;




