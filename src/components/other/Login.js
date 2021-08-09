// import feathersClient from "@feathersjs/client";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import client from "../../feathersClient";



export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    useEffect(() => {

    }, [])

    const handler = () => {
        const auth = client
            .authenticate({
                strategy: 'local',
                email: username,
                password: password,
            }).then(() => {
                window.location.href ='/account';
            })
            .catch(err => setError(err));

    }



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="text-center" closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    Login
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group>
                        <Form.Control type="text" value={username} onChange={((event) => setUsername(event.target.value))} placeholder="username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" value={password} onChange={((event) => setPassword(event.target.value))} placeholder="password" />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" size="lg" onClick={() => document.location.href = (process.env.REACT_APP_SERVER_URL + "/oauth/discord/")}>Sign in with Discord</Button>
                <Button variant="secondary" size="lg" onClick={() => handler()}>Sign in</Button>
            </Modal.Footer>
        </Modal>
    );
}