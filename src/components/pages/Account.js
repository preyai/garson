import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
// import coming_soon from "../../img/coming_soon.png";
import Cabinet from "../Template/Cabinet"
import Relase from "../other/Relase"
import Analytics from "../other/Analytics"
import Transactions from "../other/Transactions"
import Calendar from 'react-calendar';
import PerfectScrollbar from 'react-perfect-scrollbar'
import tmp00 from '../../img/avatar.png';
import tmp01 from '../../img/10-layers.svg';
import plch from '../../img/cs-plch.png';
import { useEffect } from "react";
import AOS from 'aos';


export default function Account(props) {
    let { id } = useParams();
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);
    return (
        <Cabinet>
            {(id) ?
                <div className="col-9">
                    <h1 className="h2 stroke text-center">{id}</h1>
                    {id === 'releases' &&
                        <div className="row">
                            <PerfectScrollbar className="col-lg-5 scrolled">
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">CALENDAR</div>
                                    <div className="body">
                                        <Calendar />
                                    </div>
                                </div>
                            </PerfectScrollbar>
                            <PerfectScrollbar className="col-lg-7 scrolled">
                                <div className="admin-block" data-aos="fade-left">
                                    <div className="header">upcoming RELEASES</div>
                                    <div className="body">
                                        <Relase
                                            title="Yeezy Boost 350 v2 Veshaya"
                                        />
                                        {/* <img src={tmp00} alt="" style={{ width: '100%' }} /> */}
                                    </div>
                                </div>
                            </PerfectScrollbar>
                        </div>
                    }
                    {id === 'key_renewal' &&
                        <div className="row">
                            <PerfectScrollbar className="col-lg-6 scrolled">
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">account info</div>
                                    <div className="body">
                                        <img src={plch} alt="" style={{ width: '100%' }} />
                                    </div>
                                </div>
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="admin-full">
                                        <img src={tmp01} alt="" />
                                    </div>
                                </div>
                            </PerfectScrollbar>
                            <PerfectScrollbar className="col-lg-6 scrolled">
                                <div className="admin-block" data-aos="fade-left">
                                    <div className="header">Key renewal</div>
                                    <div className="body">
                                        <p>Your current expiration date is May 25th 2021.</p>
                                        <p>Renewal payments do not automatically occur at the end of your expiration!</p>
                                        <p>You can also purchase a certain number of bot works.</p>
                                        <Button variant="lblue" size="lg" className="mx-auto">Purchase renewal</Button>
                                    </div>
                                </div>
                            </PerfectScrollbar>
                        </div>
                    }
                    {id === 'managment' &&
                        <div className="row">
                            <PerfectScrollbar className="col-lg-6 scrolled">
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">Licence control</div>
                                    <div className="body">
                                        <input type="password" className="key-input" />
                                        <div className="d-flex key-btns">
                                            <Button>Show</Button>
                                            <Button>Deactivate</Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">Discord settings</div>
                                    <div className="body">
                                        <div className="d-flex discord-form">
                                            <img src={tmp00} alt="" />
                                            <div className=" c-form">
                                                <input type="text" placeholder="example#2462" />

                                                <Button>Change</Button>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PerfectScrollbar>
                            <PerfectScrollbar className="col-lg-6 scrolled">
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
                                                <input type="text" placeholder="exam***@mail.ru" />
                                            </div>
                                            <div className="col-4">
                                                <Button>Change</Button>
                                            </div>
                                            <div className="col-8">
                                                <div className="label">Current password</div>
                                                <input type="password" />
                                            </div>
                                            <div className="col-4">
                                                <Button>Change</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </PerfectScrollbar>

                        </div>
                    }
                    {id === 'analytics' &&
                        <div className="row">
                            <PerfectScrollbar className="col-lg-8 scrolled">
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">Checkout Reports</div>
                                    <div className="body">
                                        <Analytics
                                            tags={[{ label: 'Shopify', color: "#0cbb90" }, { label: 'Adidas', color: "#6584f6" }, { label: 'Supreme', color: "#ab55bd" }, { label: 'Footsites', color: "#ca5656" }]}
                                        />
                                    </div>
                                </div>
                            </PerfectScrollbar>
                            <PerfectScrollbar className="col-lg-4 scrolled">
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">Recent transactions</div>
                                    <div className="body">
                                        <Transactions />
                                    </div>
                                </div>
                            </PerfectScrollbar>

                        </div>
                    }
                </div>
                :
                <div className="col-9">
                    <h1 className="h2 stroke text-center">home</h1>
                    <div className="row">
                        <div className="col-6 scrolled">
                            <PerfectScrollbar>
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">Welcome!</div>
                                    <div className="body">
                                        <p className="text-center">Welcome to Garson AIO </p>
                                        <p className="text-center">Need help?</p>
                                        <p className="text-center">Visit garson.aio/support to talk with a support member!</p>
                                        <Button variant="lblue" size="lg" className="mx-auto">Download Garson AIO client</Button>
                                    </div>
                                </div>
                                <div className="admin-block" data-aos="fade-right">
                                    <div className="header">announcement</div>
                                    <div className="body">
                                        <div className="anonce">
                                            <div className="d-flex align-items-center">
                                                <div className="date">17/05/2021</div>
                                                <div className="title">1.12 is now out!</div>
                                            </div>
                                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                            <Button variant="outline-secondary">Read about</Button>
                                        </div>
                                        <div className="anonce">
                                            <div className="d-flex align-items-center">
                                                <div className="date">17/05/2021</div>
                                                <div className="title">1.12 is now out!</div>
                                            </div>
                                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                            <Button variant="outline-secondary">Read about</Button>
                                        </div>
                                        <div className="anonce">
                                            <div className="d-flex align-items-center">
                                                <div className="date">17/05/2021</div>
                                                <div className="title">1.12 is now out!</div>
                                            </div>
                                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                            <Button variant="outline-secondary">Read about</Button>
                                        </div>
                                        <div className="anonce">
                                            <div className="d-flex align-items-center">
                                                <div className="date">17/05/2021</div>
                                                <div className="title">1.12 is now out!</div>
                                            </div>
                                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                            <Button variant="outline-secondary">Read about</Button>
                                        </div>
                                        <div className="anonce">
                                            <div className="d-flex align-items-center">
                                                <div className="date">17/05/2021</div>
                                                <div className="title">1.12 is now out!</div>
                                            </div>
                                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                            <Button variant="outline-secondary">Read about</Button>
                                        </div>
                                    </div>
                                </div>
                            </PerfectScrollbar>
                        </div>
                        <PerfectScrollbar className="col-6 scrolled">

                            <div className="admin-block" data-aos="fade-left">
                                <div className="header">Changelog</div>
                                <div className="body">
                                    <div className="anonce">
                                        <div className="d-flex align-items-center">
                                            <div className="date">17/05/2021</div>
                                            <div className="title">1.12.02</div>
                                        </div>
                                        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        <Button variant="outline-secondary">Read about</Button>
                                    </div>
                                    <div className="anonce">
                                        <div className="d-flex align-items-center">
                                            <div className="date">1.12.01</div>
                                            <div className="title">1.12 is now out!</div>
                                        </div>
                                        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        <Button variant="outline-secondary">Read about</Button>
                                    </div>
                                    <div className="anonce">
                                        <div className="d-flex align-items-center">
                                            <div className="date">1.12.00</div>
                                            <div className="title">1.12 is now out!</div>
                                        </div>
                                        <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                                        <Button variant="outline-secondary">Read about</Button>
                                    </div>

                                </div>
                            </div>
                        </PerfectScrollbar>

                    </div>
                </div>
            }
        </Cabinet>
    )
}