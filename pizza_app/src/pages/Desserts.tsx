// Components
import InfoDiv from "../components/InfoDiv";
import SimpleCard from "../components/SimpleCard";

// Styles
import { Row, Col } from "react-bootstrap";

// Icons
import DessertsIcon from "../images/DessertsIcon";

// Data
import { fetchDesserts } from "../data/DessertsData";

const Desserts = () => {
    return (
        <>
            <InfoDiv imgUrl={<DessertsIcon color="black" width="75%" height="75%" />} title={["desserts", ""]} description="Choose our quality home made desserts!." />
            <Row>
                {fetchDesserts().map(dessert => (
                    <Col xs={12} md={6} lg={4} key={dessert.id} className="d-flex mb-4">
                        <SimpleCard imgUrl={dessert.imgUrl} title={dessert.title} price={dessert.price} imgSize={{height: "180px", width: "180px"}} />
                    </Col>
                ))};
            </Row>
        </>
    );
}

export default Desserts;