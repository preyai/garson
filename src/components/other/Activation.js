import { useState } from "react";
import { Button, Row, Col, Form, Modal, Toast, Alert } from "react-bootstrap";
import iconEmail from "../../img/email-big.svg";
import iconDiscord from "../../img/discord-big.svg";

export default function Activation(props) {
    const [licensedKey, setLicensedKey] = useState('');
    const [regType, setRegType] = useState('discord');
    const [errors, setErrors] = useState([]);
    const host = process.env.REACT_APP_SERVER_URL;

    const send = () => {
        fetch(host + '/access-key?key=' + licensedKey)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.total > 0) {
                    if (regType === 'discord') {
                        fetch(host + '/access-key/' + data.data[0]._id, {
                            method: 'DELETE'
                        }).then((response) => {
                            document.location.href = host + "/oauth/discord/";
                        });
                    } else {
                        props.onHide();
                        props.showReg();
                    }
                } else {
                    setErrors(["incorrect key"])
                }
            });
    }

    return (
        <>

            <Modal
                {...props}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header className="text-center" closeButton>
                    <Modal.Title id="contained-modal-title-vcenter" >
                        <span>Account</span> activation
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        <Form.Group>
                            <Row className="align-items-center">
                                <Col md="auto">
                                    <Form.Label>Enter your <span>licensed key:</span></Form.Label>
                                </Col>
                                <Col>
                                    <Form.Control type="text" value={licensedKey} onChange={((event) => setLicensedKey(event.target.value))} placeholder="****  ******  ******  ****  ***********" />
                                </Col>
                            </Row>
                        </Form.Group>
                        <Row className="mt-5 align-items-lg-stretch">
                            <Col className="mt-4">
                                <button type="button" className={"big-form-btn " + (regType === 'email' && "active")} onClick={() => setRegType('email')}>
                                    <img src={iconEmail} alt="" />
                                    <div>
                                        <div className="bfb-first">Activate</div>
                                        <div>via email</div>
                                    </div>
                                </button>
                            </Col>
                            <Col className="mt-4">
                                <button type="button" className={"big-form-btn  " + (regType === 'discord' && "active")} onClick={() => setRegType('discord')}>
                                    <img src={iconDiscord} alt="" />
                                    <div>
                                        <div className="bfb-first">Activate</div>
                                        <div>via discord</div>
                                    </div>
                                </button></Col>
                        </Row>
                    </Form>
                    {errors.map((e) => (
                        <Alert key={e} variant='warning' className="mt-4">
                            {e}
                        </Alert>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <div>By clicking “Next” you accept the terms of <a href="/privacy_policies">Private Policy</a></div>
                    <Button variant="secondary" size="lg" onClick={() => send()}>Next</Button>
                </Modal.Footer>

            </Modal>

        </>
    );
}