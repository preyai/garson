import React, { useState } from 'react';
import { Col, Row } from "react-bootstrap"
import question from "../../img/question.png";
import answer from "../../img/answer.png";

export default function Quest(props) {
    const [active, setActive] = useState(false);
    return (
        <div className={'quest ' + (active && 'active')}>
            <Row className="q-title align-items-center" onClick={() => setActive(!active)}>
                <Col sm="1">
                    <img src={(active ? answer : question)} alt="" />
                </Col>
                <Col sm>What is the retail price of Garson AIO?</Col>
                <Col sm="auto"><span className="icon icon-down-arrow"></span></Col>
            </Row>
            <div className="q-body">
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
            </div>
        </div>
    )
}