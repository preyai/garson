// import feathersClient from "@feathersjs/client";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import client from "../../feathersClient";



export default function Register(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();

    useEffect(() => {

    }, [])

    const login = () => {
        const auth = client
            .authenticate({
                strategy: 'local',
                email: username,
                password,
            })
            .catch(err => setError(err));
        if (auth) {
            window.location.href ='/account';
        }
    }

    const handler = () => {
        const auth = client
            .service('users')
            .create({
                email: username,
                password,
            })
            .then(() => login());
        
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
                    Registration
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
                <Button variant="secondary" size="lg" onClick={() => handler()}>Sign up</Button>
            </Modal.Footer>
        </Modal>
    );
}