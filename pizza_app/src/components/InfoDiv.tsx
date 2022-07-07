
// Styles
import { Row, Col } from "react-bootstrap"


type Props = {
    imgUrl: any;
    title: string[];
    description: string;
}

const InfoDiv: React.FC<Props> = ({ imgUrl, title, description }) => {
    return (
        <div className="rounded" style={{ background: "#fff" }}>
            <Row className="py-3 px-4 align-items-center">
                <Col xs={2} className="">
                    {imgUrl}
                </Col>
                <Col xs={5}>
                    <h2 className="text-uppercase">
                        {title[0]}
                        <br/>
                        {title[1]}
                    </h2>
                    </Col>
                <Col xs={5}>
                    <p className="fw-bold" style={{ fontSize: ".85rem"}}>
                        {description}
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default InfoDiv;