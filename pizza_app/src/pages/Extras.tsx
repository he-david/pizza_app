// Components
import InfoDiv from "../components/InfoDiv";
import SimpleCard from "../components/SimpleCard";

// Icons
import ExtrasIcon from "../images/ExtrasIcon";

// Styles
import { Row, Col } from "react-bootstrap";

// Data
import { fetchExtras } from "../data/ExtrasData";

const Extras = () => {
    return (
        <>
            <InfoDiv imgUrl={<ExtrasIcon color="black" width="75%" height="75%" />} title={["spicy and hot", "extras"]} description="We have some extras for your food. Choose a little spice or hot for them!" />
            <Row>
                {fetchExtras().map(extra => (
                    <Col xs={12} md={6} lg={4} key={extra.id} className="d-flex mb-4">
                        <SimpleCard imgUrl={extra.imgUrl} title={extra.title} price={extra.price} imgSize={{height: "180px", width: "180px"}} />
                    </Col>
                ))};
            </Row>
        </>
    );
}

export default Extras;