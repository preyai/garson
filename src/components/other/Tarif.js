import { useState } from "react";
import { Button, Col } from "react-bootstrap"
import Activation from "./Activation";
import PayForm from "./PayForm";
import Register from "./Register";

const Full = (props) => {
    const { element, setActivateShow, setPayShow } = props;
    return (
        <Col sm={6} data-aos='zoom-in' key={element._id} >
            <div className="price">
                <div className="title">{element.title}</div>
                <div className="bgr">
                    <div className="time">{element.time}</div>
                    <p>{element.time_text}</p>
                    <div className="sum">{element.price}</div>
                    <div className="d-flex align-items-center justify-content-center">
                        {element.actions.map((item) => {
                            let even;

                            if (item === 'Enter key to purchase') even = () => setActivateShow(true);
                            if (item === 'Purchase') even = () => setPayShow(true);
                            return (
                                <Button variant="primary" size="lg" className="mx-2" onClick={even}>{item}</Button>
                            )
                        }
                        )}
                    </div>
                </div>
            </div>
        </Col>

    )
}
const Mini = (props) => {
    const { element, setPayShow} = props;
    const even = () => setPayShow(true);
    return (
        <Col sm={6} data-aos='zoom-in'>
            <div
            className="price"
            onClick={even}
            >
                <div
                    className="bgr"
                >
                    <div className="sum">{element.price}</div>
                    <div className="time">{element.time}</div>
                </div>
            </div>
        </Col>
    )
}
export default function Tarif(props) {
    const { element, size } = props;
    const [payShow, setPayShow] = useState(false);
    const [activateShow, setActivateShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);

    return (
        <>
            <Activation
                show={activateShow}
                onHide={() => setActivateShow(false)}
                showReg={() => setRegisterShow(true)}
            />
            <Register
                show={registerShow}
                onHide={() => setRegisterShow(false)}
            />
            <PayForm
                price={element.price}
                accountId="user@example.com"
                invoiceId="1234567"
                show={payShow}
                onHide={() => setPayShow(false)}
            />
            {size === 'full' &&
                <Full element={element} setActivateShow={setActivateShow} setPayShow={setPayShow} />
            }
            {size === 'mini' &&
                <Mini element={element} setPayShow={setPayShow} />
            }
        </>
    )

}