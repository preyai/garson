import { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import ico from "../../img/ico_01.svg";
import { Button } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar'
import logout from "../../img/logout.svg";
import client from "../../feathersClient";

function Aside(props) {

    const [pages, setPages] = useState([
        { "_id": "60dae8fea914555c2c1a303c", "title": "Releases", "url": "releases", },
        { "_id": "60dae907a914555c2c1a303d", "title": "Analytics", "url": "analytics", },
        { "_id": "60dae91da914555c2c1a303e", "title": "Key renewal", "url": "key_renewal", },
        { "_id": "60dae927a914555c2c1a303f", "title": "Managment", "url": "managment", }
    ]);

    useEffect(() => {
        const SERVER_URL = process.env.REACT_APP_SERVER_URL;
        fetch(SERVER_URL + '/admin-pages')
            .then(response => response.json())
            .then(result => setPages(result.data))
            .catch(e => console.log(e));

    }, []);
    return (
        <PerfectScrollbar className="col-auto aside">
            <img src={logo} alt="" className="side-logo" />
            <nav className="nav flex-column">
                <a href="/account" className="nav-link"><img src={ico} alt="" />Home</a>
                {pages.map(item => (
                    <a href={"/account/" + item.url} className="nav-link" key={item.url}> <img src={ico} alt="" /> {item.title}</a>
                ))}
            </nav>
            <a href="/" className="mt-auto link" >Back to main page</a>
            <div className="btns">
                <Button variant="lblue" size="lg"><span className="icon icon-play"></span>View Demo</Button>
                <Button variant="lblue" size="lg" onClick={() => {
                    client.logout();
                    window.location.href = '/';
                }}><img src={logout} alt="" className="mr-2" /> Log out</Button>
            </div>
        </PerfectScrollbar>
    )
}
export default Aside;