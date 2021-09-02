import { useEffect, useState } from "react";
import logo from "../../img/logo.png";
import ico from "../../img/ico_01.svg";
import { Button, Modal } from "react-bootstrap";
import PerfectScrollbar from 'react-perfect-scrollbar'
import logout from "../../img/logout.svg";
import client from "../../feathersClient";

function Aside(props) {

    const { pages } = props;

    const host = process.env.REACT_APP_SERVER_URL;

    const [active, setActive] = useState(false);
    const [video, setVideo] = useState('pLjK6jTFVU4');
    const [videoShow, setVideoShow] = useState(false);

    const VideoModal = (props) => {
        const { video } = props;
        return (
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Body className="show-grid p-0">

                    <iframe
                        className="d-block"
                        width="100%"
                        height="600"
                        src={
                            "https://www.youtube.com/embed/" + video
                        }
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </Modal.Body>
            </Modal>
        );
    }
    useEffect(() => {
        fetch(host + '/home')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.data[0].video_2) {
                    let v = data.data[0].video_2.split('/');
                    setVideo(v.pop().replace("watch?v=", ""));
                }
            });
    })
    return (
        <PerfectScrollbar className={"col-auto aside " + (active ? "active" : "")}>
            <div className="burger" onClick={() => setActive(!active)}>
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
                <Button variant="lblue" size="lg" onClick={() => setVideoShow(true)}><span className="icon icon-play"></span>View Demo</Button>
                <Button variant="lblue" size="lg" onClick={() => {
                    client.logout();
                    window.location.href = '/';
                }}><img src={logout} alt="" className="mr-2" /> Log out</Button>
            </div>
            <VideoModal video={video} size="lg" show={videoShow} onHide={() => setVideoShow(false)} />
        </PerfectScrollbar>
    )
}
export default Aside;