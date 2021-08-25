import { Button, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
// import coming_soon from "../../img/coming_soon.png";
import Cabinet from "../Template/Cabinet"
import Relase from "../other/Relase"
import Analytics from "../other/Analytics"
import Transactions from "../other/Transactions"
import Calendar from 'react-calendar';
import PerfectScrollbar from 'react-perfect-scrollbar'
import tmp00 from '../../img/avatar.png';
import plch from '../../img/cs-plch.png';
import { useEffect, useState } from "react";
import AOS from 'aos';
import client from "../../feathersClient";
import Login from "../other/Login";
import moment from "moment";
import Tarif from "../other/Tarif";



export default function Account(props) {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    let { id } = useParams();
    const [login, setLogin] = useState();
    const [fullAccsess, setFullAccsess] = useState(false);
    const [discord, setDiscord] = useState(null);
    const [download, setDownload] = useState(null);
    const [announcements, setAnnouncements] = useState([]);
    const [changelogs, setChangelogs] = useState([]);
    const [pages, setPages] = useState([]);
    const [tarifs, setTarifs] = useState([]);
    const [releases, setReleases] = useState([]);
    const [home, setHome] = useState({})


    useEffect(() => {
        AOS.init({
            duration: 500
        });
        client.authenticate().catch(() => {
            setLogin(null);
        });


        // On successfull login
        client.on('authenticated', loginResult => {
            // Get all users and messages


            // Once both return, update the state
            setLogin(loginResult);
            setFullAccsess(loginResult.user.buyed)
            let disc = {
                username: null,
                avatar: null,
            }
            if (loginResult.user.username) {
                disc.username = loginResult.user.username;
            }
            if (loginResult.user.avatar) {
                disc.avatar = loginResult.user.avatar;
            }
            if (disc.username || disc.avatar) {
                setDiscord(disc);
            }
        });
        fetch(SERVER_URL + '/admin-pages')
            .then(response => response.json())
            .then(result => setPages(result.data))
            .catch(e => console.log(e));
        fetch(SERVER_URL + '/download')
            .then(response => response.json())
            .then(result => setDownload(result.data.find((item) => (item.actual === true))))
            .catch(e => console.log(e));
        fetch(SERVER_URL + '/announcements')
            .then(response => response.json())
            .then(result => setAnnouncements(result.data))
            .catch(e => console.log(e));
        fetch(SERVER_URL + '/changelogs')
            .then(response => response.json())
            .then(result => setChangelogs(result.data))
            .catch(e => console.log(e));
        fetch(SERVER_URL + '/tarifs')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTarifs(data.data);
                console.log(tarifs);
            });
        fetch(SERVER_URL + '/releases')
            .then(response => response.json())
            .then(result => {
                setReleases(result.data)
                let full = result.data
                for (let item of full) {
                    fetch(SERVER_URL + '/retailers/' + item.retailer)
                        .then(response => response.json())
                        .then(result => item.retailer = result)
                }
                console.log(full);
            })
            .catch(e => console.log(e));
        fetch(SERVER_URL + '/home')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setHome(data.data[0]);
            });
    }, []);



    const setCircle = (date) => {
        const dateobj =
            releases &&
            releases.find((x) => {
                return (
                    date.getDay() === new Date(x.date).getDay() &&
                    date.getMonth() === new Date(x.date).getMonth() &&
                    date.getDate() === new Date(x.date).getDate()
                );
            });
        let style = {}
        if (dateobj) {
            style = { backgroundColor: dateobj.retailer.color }
        }
        return dateobj ? <div className="calendar-bgr" style={style}></div> : "";

    }

    if (login === undefined) {
        return (
            <main className="container text-center">
                <h1>Loading...</h1>
            </main>
        );
    } else if (login)
        return (
            <Cabinet pages={!fullAccsess ? pages.filter(item => item.accsess) : pages}>
                {(id) ?
                    <div className="col-12 col-md-9">
                        <h1 className="h2 stroke text-center">{id}</h1>
                        {id === 'releases' &&
                            <div className="row">
                                <PerfectScrollbar className="col-12 col-lg-5 scrolled">
                                    <div className="admin-block" data-aos="fade-right">
                                        <div className="header">CALENDAR</div>
                                        <div className="body">
                                            <Calendar
                                                tileContent={({ date }) => setCircle(date)}
                                            />
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                                <PerfectScrollbar className="col-12 col-lg-7 scrolled">
                                    <div className="admin-block" data-aos="fade-left">
                                        <div className="header">upcoming RELEASES</div>
                                        <div className="body">
                                            {releases.length > 0 &&
                                                <Splide
                                                    options={{
                                                        arrows: false
                                                    }}>
                                                    {releases.map(item => (
                                                        <SplideSlide>
                                                            <Relase
                                                                item={item}
                                                            />
                                                        </SplideSlide>
                                                    ))}
                                                </Splide>

                                            }
                                            {/* <img src={tmp00} alt="" style={{ width: '100%' }} /> */}
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                        }
                        {id === 'key_renewal' &&
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
                        }
                        {id === 'managment' &&
                            <div className="row">
                                <PerfectScrollbar className="col-12 col-lg-6 scrolled">
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
                        }
                        {id === 'analytics' &&
                            <div className="row">
                                <PerfectScrollbar className="col-12 col-lg-8 scrolled">
                                    <div className="admin-block" data-aos="fade-right">
                                        <div className="header">Checkout Reports</div>
                                        <div className="body">
                                            <Analytics
                                                tags={[{ label: 'Shopify', color: "#0cbb90" }, { label: 'Adidas', color: "#6584f6" }, { label: 'Supreme', color: "#ab55bd" }, { label: 'Footsites', color: "#ca5656" }]}
                                            />
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                                <PerfectScrollbar className="col-12 col-lg-4 scrolled">
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
                    <div className="col-12 col-md-9">
                        <h1 className="h2 stroke text-center">home</h1>
                        <div className="row">
                            <div className="col-12 col-lg-6 scrolled">
                                <PerfectScrollbar>
                                    <div className="admin-block" data-aos="fade-right">
                                        <div className="header">Welcome!</div>
                                        <div className="body">
                                            <p className="text-center">Welcome to Garson AIO </p>
                                            <p className="text-center">Need help?</p>
                                            <p className="text-center">Visit garson.aio/support to talk with a support member!</p>
                                            {fullAccsess &&
                                                <Button variant="lblue" size="lg" className="mx-auto" onClick={() => window.open(download.url, '_blank')}>Download Garson AIO client</Button>
                                            }
                                        </div>
                                    </div>
                                    <div className="admin-block" data-aos="fade-right">
                                        <div className="header">announcement</div>
                                        <div className="body">
                                            {announcements.map((item) => (
                                                <div className="anonce" key={item._id}>
                                                    <div className="d-flex align-items-center">
                                                        <div className="date">{moment(Date.parse(item.createdAt)).format('L')}</div>
                                                        <div className="title">{item.title}</div>
                                                    </div>
                                                    <p>{item.text}</p>
                                                    <Button variant="outline-secondary">Read about</Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </PerfectScrollbar>
                            </div>
                            <PerfectScrollbar className="col-12 col-lg-6 scrolled">

                                <div className="admin-block" data-aos="fade-left">
                                    <div className="header">Changelog</div>
                                    <div className="body">
                                        {changelogs.map((item) => (
                                            <div className="anonce" key={item._id}>
                                                <div className="d-flex align-items-center">
                                                    <div className="date">{moment(Date.parse(item.createdAt)).format('L')}</div>
                                                    <div className="title">{item.title}</div>
                                                </div>
                                                <p>{item.text}</p>
                                                <Button variant="outline-secondary">Read about</Button>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                            </PerfectScrollbar>

                        </div>
                    </div>
                }
            </Cabinet>
        )
    else {
        return <Login show={true} onHide={() => window.location.href = '/'} />;
        // return <div>{login}</div>
    }
}