import { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import ico from "../../img/ico_01.svg";
import { Button } from "react-bootstrap";

function Aside(props) {

    const [pages, setPages] = useState([]);

    useEffect(() => {
        const SERVER_URL = process.env.REACT_APP_SERVER_URL;
        fetch(SERVER_URL + '/admin-pages')
            .then(response => response.json())
            .then(result => setPages(result.data))
            .catch(e => console.log(e));
    }, []);
    return (
        <div className="col-auto aside">
            <img src={logo} alt="" className="side-logo" />
            <nav className="nav flex-column">
                <a href="/account" className="nav-link"><img src={ico} alt="" />Home</a>
                {pages.map(item => (
                    <a href={"/account/" + item.url} className="nav-link"> <img src={ico} alt="" /> {item.title}</a>
                ))}
            </nav>
            <a href="/" className="mt-auto link" >Back to main page</a>
            <div className="btns">
                <Button variant="lblue" size="lg"><span className="icon icon-play"></span>View Demo</Button>
                <Button variant="lblue" size="lg"><span className="icon icon-play"></span>View Demo</Button>
            </div>
        </div>
    )
}
export default Aside;