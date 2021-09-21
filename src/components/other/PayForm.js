import React, { useEffect } from "react";
import ReactDOM from "react-dom"
import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import client from "../../feathersClient";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useHistory } from "react-router";



function Paypal(props) {
    const { price, accountId, invoiceId, login } = props;

    const transactionsService = client.service('transactions');
    let history = useHistory();
    
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="text-center" closeButton>

            </Modal.Header>
            <Modal.Body>
                <PayPalScriptProvider options={{ "client-id": "Ab8rmrAprMrXFih8zgIwJgNqK8ry-7SVhDp8oyV1C545vKfb7b4eqhnZe_19gQlPnQ8kzllBKi-zJCM6" }}>
                    <PayPalButtons
                        createOrder={async (data, actions) =>  {
                            console.log(data);
                            const re = await actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: price,
                                        },
                                    },
                                ],

                            });
                            console.log(re);
                            transactionsService.create({
                                user: login._id,
                                transactionId: re,
                                amount: price,
                                status: false
                            });
                            return re;
                        }}
                        onApprove={(data, actions) => {
                            console.log(data);
                            return actions.order.capture().then(function (details) {
                                // This function shows a transaction success message to your buyer.
                                history.push('/account/managment')
                            });
                        }}
                    />
                </PayPalScriptProvider>
            </Modal.Body>
        </Modal>
    )
}

export default function PayForm(props) {

    const { price, accountId, invoiceId } = props;
    const [username, setUsername] = useState('');
    const [chek, setChek] = useState(false);
    const [paypalShow, setPaypalShow] = useState(false);
    const [login, setLogin] = useState();
    const [isPaypal, setIsPaypal] = React.useState(true);

    useEffect(() => {
        client.on('authenticated', loginResult => {

            setLogin(loginResult.user);
        });
    }, [])

    const pay = () => {
        var widget = new window.cp.CloudPayments();
        var data = {};
        var date = new Date(Date.now());
        date.setMonth(date.getMonth() + 2);
        data.cloudPayments = {
            recurrent: {
                interval: 'Month',
                period: 1,
                StartDate: date
            }
        }; //создание ежемесячной подписки
        widget.charge(
            { //options
                publicId: 'pk_e295da34c75b8f3c62e9c1a6ca5ff', //id из личного кабинета
                description: 'Оплата товаров в example.com', //назначение
                amount: parseInt(price), //сумма
                currency: 'USD', //валюта
                accountId: accountId, //идентификатор плательщика (необязательно)
                invoiceId: invoiceId, //номер заказа  (необязательно)
                skin: "classic", //дизайн виджета (необязательно)
                data: data
            },
            function (options) { // success
                console.log(options);
            },
            function (reason, options) { // fail
                //действие при неуспешной оплате
            });

    };

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header className="text-center" closeButton>
                <Modal.Title id="contained-modal-title-vcenter" >
                    purchase
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Form>
                    <Form.Group>
                        <Form.Control type="text" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="email" />
                    </Form.Group>
                    <Form.Group>
                        <Row className="align-items-center">
                            <Col sm="auto">Price</Col>
                            <Col>
                                <Form.Control className="price-input" type="text" placeholder="200$" value={price} disabled />
                            </Col>
                        </Row>
                    </Form.Group>
                    <div key={`inline-radio}`} className="mb-3">
                        <Form.Check
                            inline
                            label="paypal"
                            name="group1"
                            type={"radio"}
                            id={`inline-radio-1`}
                            checked={isPaypal}
                            onClick={() => setIsPaypal(true)}
                        />
                        <Form.Check
                            inline
                            label="cloudpayments"
                            name="group1"
                            type={"radio"}
                            id={`inline-radio-2`}
                            checked={!isPaypal}
                            onClick={() => setIsPaypal(false)}
                        />
                    </div>
                </Form>

            </Modal.Body>
            <Modal.Footer>
                <div className="d-flex align-items-center justify-content-between flex-column flex-md-row" style={{ width: "100%" }}>

                    <div className="d-flex align-items-center" >
                        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="agree with " checked={chek} onChange={(event) => setChek(event.target.checked)} />
                            <a href="/subscription_agreement" className="ml-2"> subscription agreement</a>
                        </Form.Group>

                    </div>

                    <Button variant="secondary" size="lg" onClick={() => {
                        if (isPaypal) {
                            setPaypalShow(true);
                        } else {
                            pay();
                        }
                    }
                    } disabled={!chek}>Pay</Button>

                </div>

            </Modal.Footer>
            <Paypal
                {...props}
                show={paypalShow}
                onHide={() => setPaypalShow(false)}
                login={login}
            />
        </Modal>
    );
}