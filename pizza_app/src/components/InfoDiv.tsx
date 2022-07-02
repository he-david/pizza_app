
// Styles
import { Row, Col } from "react-bootstrap"

type Props = {
    imgUrl: string;
    title: string[];
    description: string[];
}

const InfoDiv: React.FC<Props> = ({ imgUrl, title, description }) => {
    return (
        <div className="bg-white rounded">
            <Row className="p-4 align-items-center">
                <Col xs={2}>
                    {imgUrl}
                </Col>
                <Col xs={4}>
                    <h2 className="text-uppercase w-50">
                        {title[0]}
                        <br/>
                        {title[1]}
                    </h2>
                    </Col>
                <Col xs={6}>
                    <p>
                        {description[0]}
                        <br/>
                        {description[1]}
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default InfoDiv;