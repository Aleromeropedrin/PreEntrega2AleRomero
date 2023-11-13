import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWiget from '../CartWidget/CartWiget';
import Logo from '../NavBar/logo';

function NavBar() {
  return (
    <>
       <Navbar bg="dark" variant="dark" fixed="top" className="w-100 ">
        <Container>
          <Navbar.Brand href="#home"><Logo/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Registro de Clientes</Nav.Link>
            <Nav.Link href="#pricing">Ofertas</Nav.Link>
            <Nav.Link href="#pricing"><CartWiget/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      </>
  );
}

export default NavBar;