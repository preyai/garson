import { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import ico from "../../img/ico_01.svg";
import { Button } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar'
import logout from "../../img/logout.svg";
import client from "../../feathersClient";

function Aside(props) {

    const {pages} = props;

    const [active, setActive] = useState(false);
    
    return (
        <PerfectScrollbar className={"col-auto aside " + (active ? "active" : "")}>
            <div className="burger" onClick={() =>setActive(!active)}>
                <span></span>
                <span></span>
                <span></span>
            </div>
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