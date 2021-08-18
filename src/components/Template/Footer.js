
import { useState } from "react";
import { Container, Col, Row, Button, Alert } from "react-bootstrap";
import logo from "../../img/logo.png";
import Social from "../other/Social";

export default function Footer(props) {
    const host = process.env.REACT_APP_SERVER_URL;
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [quest, setQuest] = useState('');
    const [sended, setSended] = useState(false);

    const handler = () => {
        const data = {
            email: email,
            name: name,
            quest: quest
        }
        console.log(data);
        fetch(host + '/formqests', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setSended(true);
                setEmail('');
                setName('');
                setQuest('');
            });

    }

    return (
        <footer>
            <div className="contact-form">
                <Container>
                    <Row>
                        <Col sm={9}>

                            <h2>Ask the question:</h2>
                            <Row>
                                <Col sm={8}>
                                    <input type="text" placeholder="Your name" value={name} onChange={((event) => setName(event.target.value))} />
                                </Col>
                                <Col sm={4}>
                                    <input type="text" placeholder="E-mail" value={email} onChange={((event) => setEmail(event.target.value))} />
                                </Col>
                                <Col sm={8}>
                                    <input type="text" placeholder="Your question" value={quest} onChange={((event) => setQuest(event.target.value))} />
                                </Col>
                                <Col sm={4} className="d-flex">
                                    <Button variant="lblue" size="lg" className="mt-4 mx-auto" onClick={() => handler()}>submit</Button>
                                </Col>
                                <Col sm={8}><p>By clicking on the "Submit" button, you accept the terms of the "user agreement”</p></Col>
                                <Col sm={12}>
                                    {sended &&
                                        <Alert variant="success">
                                            message sent
                                        </Alert>
                                    }
                                </Col>
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
                            <Social variant="primary" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="white-line">
                <Container>
                    <div className="d-flex align-items-center justify-content-between py-4">
                        <div>© All Rights Reserved</div>
                        <a href="/offer">Offer</a>
                        <a href="/terms">Terms and Conditions</a>
                        <a href="/privacy_policies" alt="">User agreement</a>
                        <a href="/subscription_agreement">Subscription agreement</a>
                        <a href="https://my.cloudpayments.ru/ru/unsubscribe">Unsubscribe</a>
                    </div>
                    <div className="d-flex align-items-center justify-content-between py-2"><div style={{ fontSize: '75%' }}>IP Kopylov A.E.</div><div style={{ fontSize: '75%' }}>INN 771003857215</div><div style={{ fontSize: '75%' }}>Email Contactgarsonaio@gmail.com</div></div>
                </Container>
            </div>
        </footer>
    )
}