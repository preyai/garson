import { Col, Container, Row } from "react-bootstrap";


export default function Header(props) {
    return (
        <header>
            <Container>
                <Row className="justify-content-center">
                    <Col sm="2">
                        
                        <a href="/account"><span class="icon icon-profile"></span>login</a>
                    </Col>
                    <Col sm="2">
                        <a href="/account"><span class="icon icon-key"></span>Activate</a>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}