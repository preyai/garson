import { useEffect } from "react";
import { Col, Container, Row, Button, Media } from "react-bootstrap";
import { Link } from "react-scroll";
import AOS from 'aos';
import Page from "../Template/Page";
import logo from "../../img/logo.png";
import logo01 from "../../img/logo01.png";
import logo02 from "../../img/logo02.png";
import logo03 from "../../img/logo03.png";
import logo04 from "../../img/logo04.png";
import feature from "../../img/feature.png";
import videoplch from "../../img/video-plch.png";
import coming_soon from "../../img/coming_soon.png";
import proxy from "../../img/proxy.png";
import Quest from "../other/Quest";

export default function Home(props) {
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);

    return (
        <Page>
            <section id="home-nav">
                <Container >
                    <Row className="home-nav">
                        <Col>
                            <Link to="we_supported"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}>
                                <div className="title">we supported</div>
                                <div className="number">01</div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="features"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">Features</div>
                                <div className="number">02</div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="how_it_works"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}>
                                <div className="title">how it works</div>
                                <div className="number">03</div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="pricing"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">pricing</div>
                                <div className="number">04</div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="faq"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">FAQ</div>
                                <div className="number">05</div>
                            </Link>
                        </Col>
                        <Col>
                            <Link to="our_market"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500} >
                                <div className="title">our market</div>
                                <div className="number">06</div>
                            </Link>
                        </Col>
                        <Col>
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
                                    <Button variant="lblue" size="lg"><span className="icon icon-play"></span>View Demo</Button>
                                </Col>
                                <Col sm="auto">
                                    <Button variant="lblue" size="lg"><span className="icon"></span>Sold out $200</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col sm={7} data-aos='fade-left'>
                            <div id="main-info">
                                <div className="title h2 stroke">Garson AIO</div>
                                <div className="description"><span>Powerful</span> checkout automation software.</div>
                                <Row>
                                    <Col>
                                        <p>We are currently out of stock. Follow us on our socials to be the first to know when we restock!</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button variant="secondary" size="lg"><span className="icon icon-youtube"></span> YouTube</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="secondary" size="lg"><span className="icon icon-twitter"></span> Twitter</Button>
                                    </Col>
                                    <Col>
                                        <Button variant="secondary" size="lg"><span className="icon icon-instagram"></span> Instagram</Button>
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
                            <div className="partners">
                                <div className="partner animate__animated animate__bounce">
                                    <img src={logo01} alt="" />
                                </div>
                                <div className="partner">
                                    <img src={logo02} alt="" />
                                </div>
                                <div className="partner">
                                    <img src={logo03} alt="" />
                                </div>
                                <div className="partner">
                                    <img src={logo04} alt="" />
                                </div>
                            </div>
                        </Col>
                        <Col sm className="bgr2" data-aos='fade-left'>
                            <h3>A true all in-one.</h3>
                            <p>When we say AIO, we mean it. Garson AIO is locked and loaded to destroy releases on nearly all major retailers. Some of these retailers include:</p>
                            <ul className="pr-ul">
                                <li>Supreme</li>
                                <li>EU Footsites</li>
                                <li>US Footsites</li>
                                <li>Finishline & JDSports</li>
                                <li>Adidas & YeezySupply</li>
                            </ul>
                            <Button variant="lblue" size="lg"><span className="icon"></span>View Our Full sitelist</Button>
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
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={feature} alt="" />
                                <div className="title">Shopify Bypass</div>
                                <p>Wrath AIO offers both bot protection and queue bypass.</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={feature} alt="" />
                                <div className="title">Multi-Task Support</div>
                                <p>Run hundreds of tasks without the fear of not being able to handle them.</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={feature} alt="" />
                                <div className="title">User-Friendly Interface</div>
                                <p>A simple and intuitive user interface that can be used by anyone.</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={feature} alt="" />
                                <div className="title">Multiple Checkout Modes</div>
                                <p>Checkout in milliseconds while bypassing Supreme's bot protection.</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={feature} alt="" />
                                <div className="title">Analytics</div>
                                <p>View previous orders and track your spending by months.</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={feature} alt="" />
                                <div className="title">Captcha Harvester</div>
                                <p>A captcha system that allocates captchas in the most efficient way possible.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="how_it_works" className="dark-bgr">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">HOW IT WORKS</h2>
                        <div className="number stroke">03</div>
                    </div>
                    <img src={videoplch} alt="" data-aos='fade-up'/>
                </Container>
            </section>
            <section id="pricing" className="pr-ypad" >
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">pricing</h2>
                        <div className="number stroke">04</div>
                    </div>
                    <Row className="justify-content-center">
                        <Col sm={6} data-aos='fade-right' >
                            <div className="price">
                                <div className="title">License</div>
                                <div className="bgr">
                                    <div className="time">One Time</div>
                                    <p>(Includes 1 month of free usage)</p>
                                    <div className="sum">200</div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Button variant="primary" size="lg" className="mx-2">Sold out  : (</Button>
                                        <Button variant="primary" size="lg" className="mx-2">Key activation</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} data-aos="zoom-in">
                            <div className="price">
                                <div className="title">Renewal</div>
                                <div className="bgr">
                                    <div className="time">1 month</div>
                                    <p>(unlimited purchase, all inclusive)</p>
                                    <div className="sum">50</div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Button variant="primary" size="lg" className="mx-2">Key activation</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col sm={6} data-aos="zoom-in">
                            <div className="price price-bgr">
                                <div className="title">One purchase</div>
                                <div className="bgr">
                                    <div className="time">One Time</div>
                                    <p>(1 purchase)</p>
                                    <div className="sum">30</div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Button variant="primary" size="lg" className="mx-2">Key activation</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section id="faq" className="dark-bgr">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">FAQ</h2>
                        <div className="number stroke">05</div>
                    </div>
                    <Quest aos='fade-right' />
                    <Quest aos='fade-left' />
                    <Quest aos='fade-right' />
                    <Quest aos='fade-left' />
                    <Quest aos='fade-right' />
                </Container>
            </section>
            <section id="our_market" className="pr-ypad">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">our market</h2>
                        <div className="number stroke">06</div>
                    </div>
                    <Media className="comming-soon">
                        <img src={coming_soon} alt="" className="mr-5" data-aos="fade-right"/>
                        <Media.Body data-aos="fade-left">
                            <div>Market coming soon . . .</div>
                        </Media.Body>
                    </Media>
                </Container>
            </section>
            <section id="our_proxy" className="dark-bgr">
                <Container>
                    <div className="section-title" data-aos="fade-up">
                        <h2 className="h2 stroke">our proxy</h2>
                        <div className="number stroke">07</div>
                    </div>
                    <Row>
                        <Col sm={6} data-aos="fade-right">
                            <h3>Title about our proxy</h3>
                            <p>This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam massa nisl quis neque. Suspendisse in orci enim.</p>
                        </Col>
                        <Col sm={6} data-aos="fade-left">
                            <img src={proxy} alt="" />
                        </Col>
                    </Row>
                    <Media className="comming-soon">
                        <img src={coming_soon} alt="" className="mr-5" data-aos="fade-right"/>
                        <Media.Body data-aos="fade-left">
                            <div>Proxy Coming soon . . .</div>
                        </Media.Body>
                    </Media>
                </Container>
            </section>
            
        </Page>
    )
}