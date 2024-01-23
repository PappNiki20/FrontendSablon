import React, { useState } from 'react';
import { Navbar, Container, Button, Collapse, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Outlet } from 'react-router-dom';

const LayOut = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    
  };

  return (

    <>
     
      <header className='p-3 '><h1>Art Of Survival</h1></header>
      
     <Navbar bg="dark" variant="dark" expand="sm" className='p-2'>
        <Container>
          <Navbar.Brand as={Link} to="/">Főoldal</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/alkoto">Alkotó</Nav.Link>
              <Nav.Link as={Link} to="/csapat">Csapat</Nav.Link>
              <Nav.Link as={Link} to="/kategoria">Kategóriák</Nav.Link>
              <Nav.Link as={Link} to="/buszkesegeink">Büszkeségeink</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
        <Outlet />
      </Container>
      <footer>
        <div className="footer-content">
          <h2 className="footer-heading">Iskola neve:   </h2>
          <p className="footer-contact">Telefonszám: +36 30 123 4567</p>
          <p className="footer-contact">E-mail: info@iskola.hu</p>
        </div>
      </footer>
     

      
    </>
  );
};

export default LayOut;
