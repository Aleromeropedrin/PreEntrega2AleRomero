import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';  
import Logo from '../NavBar/logo';
import { Link, useLocation } from 'react-router-dom';
import '../NavBar.css'; 

function NavBar() {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Inicio</Link>
            <Link to="/category/Herramientas" className={`nav-link ${location.pathname.includes('/category/Herramientas') ? 'active' : ''}`}>Herramientas</Link>
            <Link to="/category/Tornillos" className={`nav-link ${location.pathname.includes('/category/Tornillos') ? 'active' : ''}`}>Tornillos</Link>
            <Link to="/category/Taladros" className={`nav-link ${location.pathname.includes('/category/Taladros') ? 'active' : ''}`}>Taladros</Link>
          </Nav>
          <Nav>
            <Link to="/cart" className="nav-link">
              <CartWidget />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
