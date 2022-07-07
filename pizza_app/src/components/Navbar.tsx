import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

// Icons
import PizzaIcon from "../images/PizzaIcon";
import VeganIcon from "../images/VeganIcon";
import PizzeppaIcon from "../images/PizzeppaIcon";
import SaladsIcon from "../images/SaladsIcon";
import DessertsIcon from "../images/DessertsIcon";
import DrinksIcon from "../images/DrinksIcon";
import ExtrasIcon from "../images/ExtrasIcon";
import CreatorIcon from "../images/CreatorIcon";

const Navbar = () => {
    return (
        <Container className="mb-3">
            <NavbarBs>
                <Nav className="text-uppercase fw-bold text-center">
                    <Nav.Link className="text-white" as={NavLink} to="/pizza">
                        <div className="mb-1">
                            <PizzaIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Pizza
                        </div>
                    </Nav.Link>
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/vegan">
                        <div className="mb-1">
                            <VeganIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Vegan
                        </div>
                    </Nav.Link>
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/pizzeppa">
                        <div className="mb-1">
                            <PizzeppaIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Pizzeppa
                        </div>
                    </Nav.Link>
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/salads">
                        <div className="mb-1">
                            <SaladsIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Salads
                        </div>
                    </Nav.Link>
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/desserts">
                        <div className="mb-1">
                            <DessertsIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Desserts
                        </div>
                    </Nav.Link>
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/drinks">
                        <div className="mb-1">
                            <DrinksIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Drinks
                        </div>
                    </Nav.Link>
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/extras">
                        <div className="mb-1">
                            <ExtrasIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Extras
                        </div>
                    </Nav.Link>
                    <Nav.Link className="text-white ms-2" as={NavLink} to="/creator">
                        <div className="mb-1">
                            <CreatorIcon color="white" width="20%" height="20%" />
                        </div>
                        <div>
                            Creator
                        </div>
                    </Nav.Link>
                </Nav>
            </NavbarBs>
        </Container>
    );
}

export default Navbar;