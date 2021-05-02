import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Login from "../other/Login";

export default function Header(props) {
    const [modalShow, setModalShow] = useState(true);
    return (
        <header>
            <Container>
                <Row className="justify-content-center">
                    <Col sm="2">

                        <a href="/account"><span className="icon icon-profile"></span>login</a>
                    </Col>
                    <Col sm="2">
                        <a href="/account"><span className="icon icon-key"></span>Activate</a>
                    </Col>
                </Row>
            </Container>
            <Login
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </header>
    )
}