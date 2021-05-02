import React, { useRef, useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap"
import question from "../../img/question.png";
import answer from "../../img/answer.png";

export default function Quest(props) {
    const {aos} = props;
    const [open, setOpen] = useState(false);
    const [style, setStyle] = useState(null);
    const item = useRef(null);
    const qbody = useRef(null);
    const [maxHeight,setMaxHeight] = useState(0);
    
    const clickhandler = () => {
        setOpen(!open);
        setStyle({ "maxHeight": (open ? 0 : maxHeight) });
    }
    
    useEffect(() => {
        setMaxHeight(item.current.clientHeight);
        setStyle({ "maxHeight": (open ? maxHeight : 0) });
    }, []);

    return (
        <div data-aos={aos} className='quest' ref={item}>
            <Row className="q-title align-items-center" onClick={() => clickhandler()}>
                <Col sm="1">
                    <img src={(open ? answer : question)} alt="" />
                </Col>
                <Col sm>What is the retail price of Garson AIO? {open ? 'ok': 'no'}</Col>
                <Col sm="auto"><span className="icon icon-down-arrow"></span></Col>
            </Row>
            <div className="q-body" ref={qbody} style={style}>
                <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. </p>
            </div>
        </div>
    );
}