import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <Container className="mb-3">
            <NavbarBs>
                <Nav className="text-uppercase">
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link className="text-white ms-5" as={NavLink} to="/pizza">Pizza</Nav.Link>
                </Nav>
            </NavbarBs>
        </Container>
    );
}

export default Navbar;