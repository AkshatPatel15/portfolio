import './Navbarheader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import About from './about/About';
import Projects from './projects/Projects';
import { useState } from 'react';
import Home from './landingpage/Home';

const Navbarheader = () => {

  const [activeTab, setActiveTab] = useState("About");

  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };

  let componentToRender;
  switch (activeTab) {
    case "About":
      componentToRender = <About />;
      break;
    case "Projects":
      componentToRender = <Projects />;
      break;
    case "Home":
      componentToRender = <Home />;
      break;
    default:
      break;
  }

    return (
        <>
          <Navbar activeKey={activeTab} onSelect={handleSelect} className='navbar-custom'>
            <Container>
              <Navbar.Brand > Akshat Patel</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link eventKey="Home">Home</Nav.Link>
                <Nav.Link eventKey="About">About</Nav.Link>
                <Nav.Link eventKey="Projects">Projects</Nav.Link>
              </Nav>
              <Nav>
              <Button className='button_navbarheader' variant="dark">Contact Me</Button>
          </Nav>
            </Container>
          </Navbar>
          {componentToRender}

        </>
      );
}

export default Navbarheader;




