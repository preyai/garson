import React, { useRef, useState, useEffect } from 'react';
import { Col, Row } from "react-bootstrap"
import question from "../../img/question.png";
import answer from "../../img/answer.png";

export default function Quest(props) {
    const {aos, quest_text, answer_text} = props;
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div data-aos={aos} className='quest' ref={item}>
            <Row className="q-title align-items-center" onClick={() => clickhandler()}>
                <Col sm="1">
                    <img src={(open ? answer : question)} alt="" />
                </Col>
                <Col sm>{quest_text}</Col>
                <Col sm="auto"><span className="icon icon-down-arrow"></span></Col>
            </Row>
            <div className="q-body" ref={qbody} style={style}>
                <p>{answer_text}</p>
            </div>
        </div>
    );
}