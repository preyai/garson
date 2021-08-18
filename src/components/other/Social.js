import { Col, Row, Button } from "react-bootstrap";

export default function Social(props) {
    const {variant} = props;
    return (
        <Row>
            <Col>
                <Button variant={variant} size="lg" onClick={() => window.open('https://www.youtube.com/channel/UCDanyqtwHNvd6c5tJJUS51Q')}><span className="icon icon-youtube"></span> YouTube</Button>
            </Col>
            <Col>
                <Button variant={variant} size="lg" onClick={() => window.open('https://twitter.com/AioGarson')}><span className="icon icon-twitter"></span> Twitter</Button>
            </Col>
            <Col>
                <Button variant={variant} size="lg" onClick={() => window.open('https://www.instagram.com/garsonaio/')}><span className="icon icon-instagram"></span> Instagram</Button>
            </Col>
        </Row>
    )
}