import './Navbarheader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Projects from './projects/Projects';
import Home from './landingpage/Home';

const Navbarheader = () => {

  const [activeTab, setActiveTab] = useState("Home");

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  let componentToRender;
  switch (activeTab) {
    case "About":
      // componentToRender = <About />;
      break;
    case "Projects":
      componentToRender = <Projects />;
      break;
    case "Home":
      componentToRender = <Home />;
      break;
    // case "Prediction":
    //   componentToRender = <Prediction />;
    //   break;
    // case "Info":
    //   componentToRender = <Info />;
      // break;
    default:
      break;
  }


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




