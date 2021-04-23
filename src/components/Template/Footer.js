
import { Container, Col, Row, Button } from "react-bootstrap";
import logo from "../../img/logo.png";

export default function Footer(props) {
    return (
        <footer>
            <div className="contact-form">
                <Container>
                    <Row>
                        <Col sm={9}>

                            <h2>Ask the question:</h2>
                            <Row>
                                <Col sm={8}>
                                    <input type="text" placeholder="Your name" />
                                </Col>
                                <Col sm={4}>
                                    <input type="text" placeholder="E-mail" />
                                </Col>
                                <Col sm={8}>
                                    <input type="text" placeholder="Your question" />
                                </Col>
                                <Col sm={4} className="d-flex">
                                    <Button variant="lblue" size="lg">submit</Button>
                                </Col>
                                <Col sm={8}><p>By clicking on the "Submit" button, you accept the terms of the "user agreement”</p></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="white-line">
                <Container>
                    <Row className="align-items-center py-3">
                        <Col sm="auto">
                            <a href="/" className="">
                                <img src={logo} alt="" />
                            </a>
                        </Col>
                        <Col sm>
                            <p>We are currently out of stock. Follow us on our socials to be the first to know when we restock!</p>
                        </Col>
                        <Col sm="auto">
                            <Row>
                                <Col>
                                    <Button variant="primary" size="lg"><span className="icon icon-youtube"></span> YouTube</Button>
                                </Col>
                                <Col>
                                    <Button variant="primary" size="lg"><span className="icon icon-twitter"></span> Twitter</Button>
                                </Col>
                                <Col>
                                    <Button variant="primary" size="lg"><span className="icon icon-instagram"></span> Instagram</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="white-line">
                <Container>
                    <div className="d-flex align-items-center justify-content-between py-4">
                        <div>© All Rights Reserved</div>
                        <div>User agreement</div>
                    </div>
                </Container>
            </div>
        </footer>
    )
}