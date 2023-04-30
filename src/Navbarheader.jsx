import './Navbarheader.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Projects from './projects/Projects';
import Home from './landingpage/Home';
import { Link } from 'react-router-dom';

const Navbarheader = () => {



    return (

        <>          <Navbar className='navbar-custom'>
        <Container>
          <Navbar.Brand > Akshat Patel</Navbar.Brand>
          <Nav className="me-auto">
          <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/projects" className="nav-link">Projects</Link>
          </Nav>
          <Nav>
          <Button className='button_navbarheader' variant="dark">Contact Me</Button>
      </Nav>
        </Container>
      </Navbar></>
      );
}

export default Navbarheader;




