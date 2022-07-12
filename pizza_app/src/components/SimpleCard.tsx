
// Styles
import { Button, Card } from "react-bootstrap";

export interface SimpleCardProps {
    imgUrl: string;
    title: string;
    price: number;
    imgSize: {height: string, width: string};
}

const SimpleCard: React.FC<SimpleCardProps> = ({ imgUrl, title, price, imgSize }) => {
    return (
        <Card className="h-100 w-100">
            <div className="text-center">
                <Card.Img variant="top" src={imgUrl} style={imgSize} />
            </div>
            <Card.Body className="fw-bold d-flex flex-column">
                <Card.Title className="text-uppercase fs-4 mb-3">{title}</Card.Title>
                <div className="mt-auto d-flex justify-content-between">
                    <Button variant="success" className="text-uppercase fw-bold" style={{ fontSize: ".8rem" }}>Add to cart</Button>
                    <span className="fs-4 align-middle d-inline-block">{price} Ft</span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default SimpleCard;