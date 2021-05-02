import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

export default function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Modal
            {...props}
            size="sm"
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
                        <Form.Control type="text" value={username} onChange={((value) => console.log(value))} placeholder="username" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="text" value={password} placeholder="password" />
                    </Form.Group>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}