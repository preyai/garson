import { useEffect, useState } from "react";
import { Button, Alert } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar'
import client from "../../feathersClient";
import tmp00 from '../../img/avatar.png';
import plch from '../../img/cs-plch.png';

export default function Managment(props) {

    const { discord, login } = props;
    const [accessToken, setAccessToken] = useState('');
    const [show, setShow] = useState(false);
    const [userId, setUserId] = useState(null);
    const [password, setPassword] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false)
    const [email, setEmail] = useState('');
    const [emailChanged, setEmailChanged] = useState(false)
    const host = process.env.REACT_APP_SERVER_URL;
    const userService = client.service("users");

    useEffect(() => {
        client.get('authentication')
            .then(result => {
                setAccessToken(result.accessToken);
                setUserId(result.user._id);
                setEmail(result.user.email);
            });
    }, [])

    const deactivate = () => {
        fetch('https://bot.backend.garsonaio.com/DeleteBinding.php?login=acc4', {
            method: 'GET',
            mode: 'no-cors',
        }).then(res => alert("deactivated"))
    }
    const changePass = () => {
        userService.patch(userId, { password: password })
            .then(updatedUser => {
                setPasswordChanged(true);
            })
    }
    const changeEmail = () => {
        userService.patch(userId, { email: email })
            .then(updatedUser => {
                setEmailChanged(true);
            })
    }
    return (
        <div className="row">
            <PerfectScrollbar className="col-12 col-lg-6 scrolled">
                <div className="admin-block" data-aos="fade-right">
                    <div className="header">Licence control</div>
                    <div className="body">
                        <input type={show ? "text" : "password"} className="key-input" value="THU5-S3B5-QF24-NB35" />
                        <div className="d-flex key-btns">
                            <Button onClick={() => setShow(!show)}>Show</Button>
                            <Button onClick={deactivate}>Deactivate</Button>
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

                                    <Button onClick={() => document.location.href = host + "/oauth/discord/?feathers_token=" + accessToken}>Connect</Button>


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
                                <input type="text" placeholder="exam***@mail.ru" value={email} onChange={(event) => setEmail(event.target.value)} />
                            </div>
                            <div className="col-4">
                                <Button onClick={changeEmail} >Change</Button>
                            </div>
                            <Alert show={emailChanged} variant="success" className="col-12 mt-3">
                                <p>
                                    Email changed
                                </p>
                            </Alert>
                            <div className="col-8">
                                <div className="label">Current password</div>
                                <input type="password" placeholder="•••••••••" value={password} onChange={(event) => setPassword(event.target.value)} />
                            </div>
                            <div className="col-4">
                                <Button onClick={changePass}>Change</Button>
                            </div>
                            <Alert show={passwordChanged} variant="success" className="col-12 mt-3">
                                <p>
                                    Password changed
                                </p>
                            </Alert>
                        </div>
                    </div>
                </div>
            </PerfectScrollbar>

        </div>
    )
}