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

// Styles
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const { isLoggedIn, logOut } = useAuth();

    return (
        <div style={{ margin: "0 0 40px 0" }}>
            <div style={{background: "url(https://www.pizzaforte.hu/header-wood.119a920aeb8b2d7be794.jpg)"}}>
                <Container className="mb-3">
                    <NavbarBs>
                        <Nav className="text-uppercase fw-bold text-center" style={{fontSize: "1.2rem"}}>
                            <Nav.Link className="text-white" as={NavLink} to="/pizza">
                                <div className="mb-1">
                                    <PizzaIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Pizza
                                </div>
                            </Nav.Link>
                            <Nav.Link className="text-white" as={NavLink} to="/vegan">
                                <div className="mb-1">
                                    <VeganIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Vegan
                                </div>
                            </Nav.Link>
                            <Nav.Link className="text-white" as={NavLink} to="/pizzeppa">
                                <div className="mb-1">
                                    <PizzeppaIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Pizzeppa
                                </div>
                            </Nav.Link>
                            <Nav.Link className="text-white" as={NavLink} to="/salads" style={{margin: "0 100px 0 0"}}>
                                <div className="mb-1">
                                    <SaladsIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Salads
                                </div>
                            </Nav.Link>
                            <div className="position-absolute top-100 start-50 translate-middle" style={{width: "200px"}}>
                                <Nav.Link as={NavLink} to="/">
                                    <img className="w-75" src="https://cdn-icons-png.flaticon.com/512/1404/1404945.png" alt="home icon" />
                                </Nav.Link>
                            </div>
                            <Nav.Link className="text-white" as={NavLink} to="/desserts" style={{margin: "0 0 0 100px"}}>
                                <div className="mb-1">
                                    <DessertsIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Desserts
                                </div>
                            </Nav.Link>
                            <Nav.Link className="text-white" as={NavLink} to="/drinks">
                                <div className="mb-1">
                                    <DrinksIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Drinks
                                </div>
                            </Nav.Link>
                            <Nav.Link className="text-white" as={NavLink} to="/extras">
                                <div className="mb-1">
                                    <ExtrasIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Extras
                                </div>
                            </Nav.Link>
                            <Nav.Link className="text-white" as={NavLink} to="/creator">
                                <div className="mb-1">
                                    <CreatorIcon color="white" width="40%" height="40%" />
                                </div>
                                <div>
                                    Creator
                                </div>
                            </Nav.Link>
                        </Nav>
                    </NavbarBs>
                </Container>
            </div>
            <Container>
                <Nav>
                    {!isLoggedIn ? (
                        <Nav.Link className="p-0" as={NavLink} to="/login">
                            <Button className="text-uppercase fw-bold" size="sm" variant="success" style={{ margin: "0 0 0 35px"}}>
                                Login
                            </Button>
                        </Nav.Link>
                    ): (
                        <Button onClick={logOut} className="text-uppercase fw-bold" size="sm" variant="success" style={{ margin: "0 0 0 35px"}}>
                            Logout
                        </Button>
                    )}
                </Nav>
                
            </Container>
        </div>
    );
}

export default Navbar;