// Styles
import { Button, Card, Col, Row } from "react-bootstrap";

// Types
import { SimpleCardProps } from "../components/SimpleCard";

interface Props extends SimpleCardProps {
    description: string;
    containsCheese: boolean;
}

const ComplexCard: React.FC<Props> = ({ imgUrl, title, price, imgSize, description, containsCheese}) => {
    return (
        <Card className="h-100 w-100">
            <Card.Body className="fw-bold d-flex flex-column">
                <Row>
                    <Col xs={4}>
                        <Card.Img src={imgUrl} style={imgSize}></Card.Img>
                    </Col>
                    <Col xs={8}>
                        <Card.Title className="text-uppercase fs-4">{title}</Card.Title>
                        <p style={{ fontSize: ".9rem", margin: "0 0 110px 0" }}>({description})</p>
                        <div className="d-flex justify-content-end">
                            {containsCheese ? (
                                <div className="form-check">
                                    <label className="form-check-label text-uppercase text-success" style={{ fontSize: ".9rem" }}>
                                        Vegan cheese
                                        <input className="form-check-input" type="checkbox" value=""/>
                                    </label>
                                </div>
                            ) : (<div style={{ margin: "15px 0 0 0"}}></div>)}
                        </div>
                        <div className="mt-auto d-flex justify-content-between">
                            <Button variant="success" className="text-uppercase fw-bold" style={{ fontSize: ".8rem" }}>Add to cart</Button>
                            <span className="fs-4 align-middle d-inline-block">{price} Ft</span>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

export default ComplexCard;