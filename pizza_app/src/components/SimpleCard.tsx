
// Styles
import { Button, Card } from "react-bootstrap";

type Props = {
    imgUrl: string;
    title: string;
    price: number;
}

const SimpleCard: React.FC<Props> = ({ imgUrl, title, price }) => {
    return (
        <Card className="h-100 w-100">
            <div className="text-center">
                <Card.Img variant="top" className="w-50" src={imgUrl} />
            </div>
            <Card.Body className="fw-bold d-flex flex-column">
                <Card.Title className="text-uppercase fs-3 mb-3">{title}</Card.Title>
                <div className="mt-auto mt-auto d-flex justify-content-between">
                    <Button variant="success" className="text-uppercase fw-bold hd-g-btn" style={{ fontSize: ".8rem" }}>Add to cart</Button>
                    <span className="fs-4 align-middle d-inline-block">{price} Ft</span>
                </div>
            </Card.Body>
        </Card>
    );
}

export default SimpleCard;