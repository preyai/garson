import { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";



export default function PayForm(props) {
    const {price, accountId, invoiceId} = props;
    const [username, setUsername] = useState('');
    const [chek, setChek] = useState(false);

    const pay = () => {
        var widget = new window.cp.CloudPayments();
        widget.pay('auth', // или 'charge'
            { //options
                publicId: 'test_api_00000000000000000000001', //id из личного кабинета
                description: 'Оплата товаров в example.com', //назначение
                amount: price, //сумма
                currency: 'USD', //валюта
                accountId: accountId, //идентификатор плательщика (необязательно)
                invoiceId: invoiceId, //номер заказа  (необязательно)
                skin: "mini", //дизайн виджета (необязательно)
                data: {
                    myProp: 'myProp value'
                }
            },
            {
                onSuccess: function (options) { // success
                    //действие при успешной оплате
                },
                onFail: function (reason, options) { // fail
                    //действие при неуспешной оплате
                },
                onComplete: function (paymentResult, options) { //Вызывается как только виджет получает от api.cloudpayments ответ с результатом транзакции.
                    //например вызов вашей аналитики Facebook Pixel
                }
            }
        )
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
                                <Form.Control className="price-input" type="text"  placeholder="200$" value={price} disabled />
                            </Col>
                        </Row>
                    </Form.Group>
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
                    
                        <Button variant="secondary" size="lg" onClick={() => pay()} disabled={!chek}>Pay</Button>

                </div>

            </Modal.Footer>
        </Modal>
    );
}