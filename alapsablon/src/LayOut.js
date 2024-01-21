import React, { useState } from 'react';
import { Navbar, Container, Button, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, Outlet } from 'react-router-dom';

const LayOut = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar>
        <Container fluid>
          <Button className='ms-auto' type='button' onClick={toggleNavbar}>
            <FontAwesomeIcon icon={faBars} />
          </Button>
        </Container>
      </Navbar>

      <Collapse in={isOpen}>
        <div className='bg-light shadow-3 p-4 nav'>
          <Button as={Link} to="/" variant='link' block className='border-bottom m-0'>
            Főoldal
          </Button>
          <Button as={Link} to="alkoto" variant='link' block className='border-bottom m-0'>
            Alkotó
          </Button>
          <Button as={Link} to="csapat" variant='link' block className='m-0'>
            Csapat
          </Button>
        </div>
      </Collapse>

      {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
      <Outlet />
    </>
  );
};

export default LayOut;
