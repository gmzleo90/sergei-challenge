import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export default function BoostrapNavbar() {
  return (
    
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand style={{paddingLeft:'10px'}}>React Challenge</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={Link} to="view-table">
          Table
        </Nav.Link>
        <Nav.Link as={Link} to="view-form">
          Form
        </Nav.Link>
      </Nav>
    </Navbar>
   
  );
}
