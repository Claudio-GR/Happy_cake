import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import house_icon from '../img/Home_icon.png'
import contact_icon from '../img/Email_icon.png'
import cake_slice from '../img/cake_slice.png'
import { Link } from "react-router-dom";

const Nav_bar = () => {
    return (
      <Navbar expand="lg" bg="danger" data-bs-theme="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="text-light mt-2 pe-2 text-decoration-none d-inline-block align-center">
                <img src={house_icon} alt="home icon" width="20" height="20" className="d-inline-block align-top" />
                Home
              </Link>
              <Link to="/Register" className="text-light mt-2 text-decoration-none">
                <img src={contact_icon} alt="Contact icon" width="35" height="25" className="d-inline-block align-center" />
                Contacto
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/">
            <img src={cake_slice} alt="cake slice image" width="25" height="25" className="d-inline-block align-center" id="cake_icon"/>
            Happy Cake
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  };
  
  export default Nav_bar;
  