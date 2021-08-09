import { useEffect, useRef, useState } from "react";
import { Col, Container, Row, Button, Media, Modal } from "react-bootstrap";
import { Link } from "react-scroll";
import AOS from 'aos';
import {Helmet} from "react-helmet";
import Page from "../Template/Page";
import logo from "../../img/logo.png";
import coming_soon from "../../img/coming_soon.png";
import proxy from "../../img/proxy.png";
import Quest from "../other/Quest";
import PayForm from "../other/PayForm";
import PartnersTiles from "../other/PartnersTiles"
import Activation from "../other/Activation";
import Register from "../other/Register";

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        const node = element;

        node.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });

const RetailersModal = (props) => {
    const { retailers } = props;
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Retailers
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    <Row>
                        {retailers.map((item) => (
                            <Col xs={12} md={4} key={item._id}>
                                <ul className="pr-ul">
                                    <li>
                                        {item.title}
                                    </li>
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
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
// const Tarif = (props) => {
//     return (

//     )
// }
export default function Home(props) {

    const host = process.env.REACT_APP_SERVER_URL;
    const [data, setData] = useState({
        h1: "",
        seo_title:"",
        seo_description:"",
        video: "",
        video_2: "",
        market_title: "",
        market_text: "",
        proxy_title: "",
        proxy_text: ""
    });
    const [retailers, setRetailers] = useState([]);
    const [features, setFeatures] = useState([]);
    const [tarifs, setTarifs] = useState([]);
    const [faq, setFaq] = useState([]);
    const [video, setVideo] = useState('pLjK6jTFVU4');
    const [word, setWord] = useState('Powerful');
    const wordDiv = useRef();

    const [payShow, setPayShow] = useState(false);
    const [retailersShow, setRetailersShow] = useState(false);
    const [videoShow, setVideoShow] = useState(false);
    const [activateShow, setActivateShow] = useState(false);
    const [registerShow, setRegisterShow] = useState(false);

    const [meta, setMeta] = useState({
        title: 'Powerful checkout automation software',
        description: 'test',
    })
    useEffect(() => {
        AOS.init({
            duration: 500
        });

        fetch(host + '/home')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setData(data.data[0]);
                if (data.data[0].video_2) {
                    let v = data.data[0].video_2.split('/');
                    setVideo(v.pop().replace("watch?v=", ""));
                }
            });
        fetch(host + '/retailers')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setRetailers(data.data);
            });
        fetch(host + '/tarifs')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setTarifs(data.data);
                console.log(tarifs);
            });
        fetch(host + '/features')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFeatures(data.data);
            });
        fetch(host + '/faq')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setFaq(data.data);
            });
    }, []);

    useEffect(() => {
        const words = ['Powerful', 'Lightning fast', 'Stable'];
        const i = words.indexOf(word);
        function timeout(delay) {
            return new Promise(res => setTimeout(res, delay));
        }
        async function wordHandle(word) {
            if (word === 'Stable') await timeout(5000);
            await timeout(1500);
            setWord(word);
            animateCSS(wordDiv.current, 'fadeInDown');
        }
        let n = i + 1;
        if (n < words.length) {
            wordHandle(words[n]);
        }
        else {
            wordHandle(words[0]);
        }

    }, [word]);

    return (
        <Page>
            <Helmet>
                <title>{data.seo_title}</title>
                <meta name="description" content={data.seo_description} />
            </Helmet>
            <section id="home-nav" className="d-none d-md-block">
                <Container >
                    <Row className="home-nav">
                        <Col sm={12} lg>
                            <Link to="we_supported"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}>
                                <div className="title">we supported</div>
                                <div className="number">01</div>
                            </Link>
                        </Col>
                        <Col sm={12} lg>
                            <Link to="features"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">Features</div>
                                <div className="number">02</div>
                            </Link>
                        </Col>
                        <Col sm={12} lg>
                            <Link to="how_it_works"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}>
                                <div className="title">how it works</div>
                                <div className="number">03</div>
                            </Link>
                        </Col>
                        <Col sm={12} lg>
                            <Link to="pricing"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">pricing</div>
                                <div className="number">04</div>
                            </Link>
                        </Col>
                        <Col sm={12} lg>
                            <Link to="faq"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">FAQ</div>
                                <div className="number">05</div>
                            </Link>
                        </Col>
                        <Col sm={12} lg>
                            <Link to="our_market"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">our market</div>
                                <div className="number">06</div>
                            </Link>
                        </Col>
                        <Col sm={12} lg>
                            <Link to="our_proxy"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}>
                                <div className="title">our proxy</div>
                                <div className="number">07</div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="first-block" className="pr-ypad" >
                <Container>
                    <Row>
                        <Col sm={5} data-aos='fade-right'>
                            <div className="logo">
                                <img src={logo} alt="" />
                            </div>
                            <Row className="justify-content-center logo-btns">
                                <Col sm="auto">
                                    <Button variant="lblue" size="lg" onClick={() => setVideoShow(true)}><span className="icon icon-play"></span>View Demo</Button>
                                    <VideoModal video={video} size="lg" show={videoShow} onHide={() => setVideoShow(false)} />
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={7} data-aos='fade-left'>
                            <div id="main-info">
                                <div className="title h2 stroke">{data.h1}</div>
                                <div className="description">
                                    <div className="animated-words " ref={wordDiv}>
                                        <span>{word}</span>
                                    </div> checkout automation software.</div>
                                <Row>
                                    <Col>
                                        <p>We are currently out of stock. Follow us on our socials to be the first to know when we restock!</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant="secondary" size="lg" onClick={() => window.open('https://www.youtube.com/channel/UCDanyqtwHNvd6c5tJJUS51Q')}><span className="icon icon-youtube"></span> YouTube</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="secondary" size="lg" onClick={() => window.open('https://twitter.com/AioGarson')}><span className="icon icon-twitter"></span> Twitter</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="secondary" size="lg" onClick={() => window.open('https://www.instagram.com/garsonaio/')}><span className="icon icon-instagram"></span> Instagram</Button>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="we_supported" className="dark-bgr">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">we supported</h2>
                        <div className="number stroke">01</div>
                    </div>
                    <Row>
                        <Col sm="auto" data-aos='fade-right'>
                            <PartnersTiles partners={retailers} />
                        </Col>
                        <Col sm className="bgr2" data-aos='fade-left'>
                            <h3>A true all in-one.</h3>
                            <p>When we say AIO, we mean it. Garson AIO is locked and loaded to destroy releases on nearly all major retailers. Some of these retailers include:</p>
                            <ul className="pr-ul">
                                {retailers.slice(0, 8).map((item) => (
                                    <li>{item.title}</li>
                                ))}
                            </ul>
                            <RetailersModal retailers={retailers} size="lg" show={retailersShow} onHide={() => setRetailersShow(false)} />
                            <Button variant="lblue" size="lg" onClick={() => setRetailersShow(true)}><span className="icon"></span>View Our Full sitelist</Button>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="features" className="pr-ypad">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2">Features</h2>
                        <div className="number">02</div>
                    </div>

                    <Row className="align-items-stretch">
                        {features.map((item) => (
                            <Col sm={4} data-aos="flip-up" key={item._id}>
                                <div className="feature">
                                    <img src={item.img} alt="" />
                                    <div className="title">{item.title}</div>
                                    <p>{item.text}</p>
                                </div>
                            </Col>
                        ))}


                    </Row>
                </Container>
            </section>
            <section id="how_it_works" className="dark-bgr">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">HOW IT WORKS</h2>
                        <div className="number stroke">03</div>
                    </div>
                    {/* <img src={videoplch} alt="" data-aos='fade-up' /> */}
                    <iframe width="100%" height="600" src={
                        "https://www.youtube.com/embed/" + video
                    } title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Container>
            </section>
            <section id="pricing" className="pr-ypad" >
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">pricing</h2>
                        <div className="number stroke">04</div>
                    </div>
                    <Row className="justify-content-center">
                        {tarifs.map((element) => (
                            <Col sm={6} data-aos='zoom-in' key={element._id} >
                                <div className="price">
                                    <div className="title">{element.title}</div>
                                    <div className="bgr">
                                        <div className="time">{element.time}</div>
                                        <p>{element.time_text}</p>
                                        <div className="sum">{element.price}</div>
                                        <div className="d-flex align-items-center justify-content-center">
                                            {element.actions.map((item) => {
                                                let even;

                                                if (item === 'Enter key to purchase') even = () => setActivateShow(true);
                                                if (item === 'Purchase') even = () => setPayShow(true);
                                                return (
                                                    <Button variant="primary" size="lg" className="mx-2" onClick={even}>{item}</Button>
                                                )
                                            }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )
                        )}
                    </Row>
                    <Activation
                        show={activateShow}
                        onHide={() => setActivateShow(false)}
                        showReg={() => setRegisterShow(true)}
                    />
                    <Register
                        show={registerShow}
                        onHide={() => setRegisterShow(false)}
                    />

                </Container>
            </section>
            <section id="faq" className="dark-bgr">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">FAQ</h2>
                        <div className="number stroke">05</div>
                    </div>
                    {faq.map((item, index) => (
                        <Quest aos={(index % 2 === 0) ? 'fade-right' : 'fade-left'} quest_text={item.quest} answer_text={item.answer} key={item._id} />
                    ))}
                </Container>
            </section>
            <section id="our_market" className="pr-ypad">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">our market</h2>
                        <div className="number stroke">06</div>
                    </div>
                    {data.market_text ?
                        <Row>
                            <Col sm={6} data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: data.market_text }} />
                            </Col>
                            <Col sm={6} data-aos="fade-left">
                                <img src={proxy} alt="" />
                            </Col>
                        </Row>
                        :
                        <Media className="comming-soon">
                            <img src={coming_soon} alt="" className="mr-5" data-aos="fade-right" />
                            <Media.Body data-aos="fade-left">
                                <div>Market coming soon . . .</div>
                            </Media.Body>
                        </Media>
                    }
                </Container>
            </section>
            <section id="our_proxy" className="dark-bgr">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">our proxy</h2>
                        <div className="number stroke">07</div>
                    </div>
                    {data.proxy_text ?
                        <Row>
                            <Col sm={6} data-aos="fade-right">
                                <div dangerouslySetInnerHTML={{ __html: data.proxy_text }} />
                            </Col>
                            <Col sm={6} data-aos="fade-left">
                                <img src={proxy} alt="" />
                            </Col>
                        </Row>
                        :
                        <Media className="comming-soon">
                            <img src={coming_soon} alt="" className="mr-5" data-aos="fade-right" />
                            <Media.Body data-aos="fade-left">
                                <div>Proxy coming soon . . .</div>
                            </Media.Body>
                        </Media>
                    }
                </Container>
            </section>
            <PayForm
                show={payShow}
                onHide={() => setPayShow(false)}
            />
        </Page>
    )
}