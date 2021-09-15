
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Col, Row } from "react-bootstrap";
// import coming_soon from "../../img/coming_soon.png";
import Cabinet from "../Template/Cabinet"
import Analytics from "../other/Analytics"
import Transactions from "../other/Transactions"
import PerfectScrollbar from 'react-perfect-scrollbar'
import AOS from 'aos';
import client from "../../feathersClient";
import Login from "../other/Login";
import moment from "moment";
import Managment from "../other/Managment";
import Releases from "../other/Releases";
import KeyRenewal from "../other/KeyRenewal";
import Statistic from "../other/Statistic";



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
    }, []);





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
                            <Releases releases={releases} />
                        }
                        {id === 'key_renewal' &&
                            <KeyRenewal
                                tarifs={tarifs}
                            />
                        }
                        {id === 'managment' &&
                            <Managment
                                discord={discord}
                                login={login} />
                        }
                        {id === 'analytics' &&
                            <Statistic />
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