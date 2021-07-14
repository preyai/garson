import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Activation from "../other/Activation";
import Login from "../other/Login";
import PayForm from "../other/PayForm";

export default function Header(props) {
    const [activateShow, setActivateShow] = useState(false);
    const [loginShow, setLoginShow] = useState(false);
    return (
        <header>
            <Container>
                <Row className="justify-content-center">
                    <Col sm="2">

                        <button onClick={() => setLoginShow(true)}><span className="icon icon-profile"></span>login</button>
                    </Col>
                    <Col sm="2">
                        <button onClick={() => setActivateShow(true)}><span className="icon icon-key"></span>Activate</button>
                    </Col>
                </Row>
            </Container>
            <Activation
                show={activateShow}
                onHide={() => setActivateShow(false)}
            />
            <Login
                show={loginShow}
                onHide={() => setLoginShow(false)}
            />
            
        </header>
    )
}