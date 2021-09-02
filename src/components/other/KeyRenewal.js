import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar'
import plch from '../../img/cs-plch.png';
import Tarif from "../other/Tarif";

export default function KeyRenewal(props) {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    const {tarifs} = props;
    const [home, setHome] = useState({});

    useEffect(() => {
        fetch(SERVER_URL + '/home')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setHome(data.data[0]);
            });
    }, []);

    return (
        <div className="row">
            <PerfectScrollbar className="col-12 col-lg-6 scrolled">
                <div className="admin-block" data-aos="fade-right">
                    <div className="header">account info</div>
                    <div className="body">
                        <img src={plch} alt="" style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="admin-block" data-aos="fade-right">
                    <div className="admin-full">
                        <Row className="circles">
                            <Col sm={6} >
                                <p><span>active Days</span> Remaining</p>
                                <div className="circle">0</div>
                            </Col>
                            {/* <Col sm={6}>
                                <p><span>Recent</span> Renewal</p>
                                <div className="circle inactive">N/A</div>
                            </Col> */}
                        </Row>
                    </div>
                </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="col-12 col-lg-6 scrolled">
                <div className="admin-block" data-aos="fade-left">
                    <div className="header">Key renewal</div>
                    {home.renewal_info ?
                        <div className="body">
                            {home.renewal_info}
                        </div>
                        :
                        <div className="body">
                            <p>Your current expiration date is May 25th 2021.</p>
                            <p>Renewal payments do not automatically occur at the end of your expiration!</p>
                            <p>You can also purchase a certain number of bot works.</p>
                            <Button variant="lblue" size="lg" className="mx-auto">Purchase renewal</Button>
                        </div>
                    }
                </div>
                <div className="admin-block" data-aos="fade-left">
                    <Row className="justify-content-center">
                        {tarifs.map((element) => (
                            <Tarif
                                element={element}
                                size="mini"
                                key={element._id}
                            />
                        )
                        )}
                    </Row>

                </div>
            </PerfectScrollbar>

        </div>
    )
}