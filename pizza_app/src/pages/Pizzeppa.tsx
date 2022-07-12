// Components
import InfoDiv from "../components/InfoDiv";
import ComplexCard from "../components/ComplexCard";

// Icons
import PizzeppaIcon from "../images/PizzeppaIcon";

// Styles
import { Row, Col } from "react-bootstrap";

// Data
import { fetchPizzeppas } from "../data/PizzeppasData";

const Pizzeppa = () => {
    return (
        <>
            <InfoDiv imgUrl={<PizzeppaIcon color="black" width="75%" height="75%" />} title={["pizzeppa, just the way", "you like it!"]} description="Folded 32cm pizza! Based on authentic Italian recipe, hand-rolled to make it thin and crispy." />
            <Row>
                {fetchPizzeppas().map(pizzeppa => (
                    <Col xs={12} md={6} key={pizzeppa.id} className="d-flex mb-4">
                        <ComplexCard imgUrl={pizzeppa.imgUrl} title={pizzeppa.title} price={pizzeppa.price} imgSize={{height: "270px", width: "180px"}} description={pizzeppa.description} containsCheese={pizzeppa.containsCheese} />
                    </Col>
                ))};
            </Row>
        </>
    );
}

export default Pizzeppa;