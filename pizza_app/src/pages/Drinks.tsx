// Components
import InfoDiv from "../components/InfoDiv";
import SimpleCard from "../components/SimpleCard";

// Icons
import DrinksIcon from "../images/DrinksIcon";

// Styles
import { Row, Col } from "react-bootstrap";

// Data
import { fetchDrinks } from "../data/DrinksData";

const Drinks = () => {
    return (
        <>
            <InfoDiv imgUrl={<DrinksIcon color="black" width="75%" height="75%" />} title={["drinks", ""]} description="Choose a drink to your food!" />
            <Row>
                {fetchDrinks().map(drink => (
                    <Col xs={12} md={6} lg={4} key={drink.id} className="d-flex mb-4">
                        <SimpleCard imgUrl={drink.imgUrl} title={drink.title} price={drink.price} imgSize={{height: "180px", width: "112.5px"}} />
                    </Col>
                ))};
            </Row>
        </>
    );
}

export default Drinks;