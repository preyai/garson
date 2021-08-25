import { useState } from "react";
import { Button } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar'
import tmp00 from '../../img/avatar.png';
import plch from '../../img/cs-plch.png';

export default function Managment(props) {
    const {discord, login} = props;
    const [show, setShow] = useState(false);
    return (
        <div className="row">
            <PerfectScrollbar className="col-12 col-lg-6 scrolled">
                <div className="admin-block" data-aos="fade-right">
                    <div className="header">Licence control</div>
                    <div className="body">
                        <input type={show? "text": "password"} className="key-input" value="THU5-S3B5-QF24-NB35" />
                        <div className="d-flex key-btns">
                            <Button onClick={() => setShow(!show)}>Show</Button>
                            <Button>Deactivate</Button>
                        </div>
                    </div>
                </div>
                <div className="admin-block" data-aos="fade-right">
                    <div className="header">Discord settings</div>
                    <div className="body">
                        {discord ?
                            <div className="d-flex discord-form">
                                <img src={discord.avatar} alt="" />
                                <div className=" c-form">
                                    <input type="text" value={"#" + discord.username} />

                                    <Button disabled>Change</Button>


                                </div>
                            </div>
                            :
                            <div className="d-flex discord-form">
                                <img src={tmp00} alt="" />
                                <div className=" c-form">
                                    <input type="text" placeholder="example#2462" />

                                    <Button>Change</Button>


                                </div>
                            </div>
                        }
                    </div>
                </div>
            </PerfectScrollbar>
            <PerfectScrollbar className="col-12 col-lg-6 scrolled">
                <div className="admin-block" data-aos="fade-left">
                    <div className="header">My devices</div>
                    <div className="body">
                        <img src={plch} alt="" style={{ width: '100%' }} />
                    </div>
                </div>
                <div className="admin-block" data-aos="fade-left">
                    <div className="header">Personal info</div>
                    <div className="body">
                        <div className="row c-form">
                            <div className="col-8">
                                <div className="label">Current e-mail:</div>
                                <input type="text" placeholder="exam***@mail.ru" value={login.user.email} />
                            </div>
                            <div className="col-4">
                                <Button>Change</Button>
                            </div>
                            <div className="col-8">
                                <div className="label">Current password</div>
                                <input type="password" placeholder="•••••••••" />
                            </div>
                            <div className="col-4">
                                <Button>Change</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </PerfectScrollbar>

        </div>
    )
}