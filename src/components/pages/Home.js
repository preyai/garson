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
import tenor from "../../img/tenor.gif";
import tenor1 from "../../img/tenor-1.gif";
import tenor3 from "../../img/tenor-3.gif";
import tenor4 from "../../img/tenor-4.gif";

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
                                <img src={tenor} alt="" />
                                <div className="title">Customer Service</div>
                                <p>Got any questions? Our support agent is always there to help you. You can DM us in twitter or write an E-mail</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={tenor1} alt="" />
                                <div className="title">Analytics</div>
                                <p>Personalized analytics of your order history lets you track your purchases, profit and success rate</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={tenor3} alt="" />
                                <div className="title">User-Friendly Interface</div>
                                <p>We value your time and energy, making sure your experience using our bot is as smooth and straightforward as possible</p>
                            </div>
                        </Col>
                        <Col sm={4} data-aos="flip-up">
                            <div className="feature">
                                <img src={tenor4} alt="" />
                                <div className="title">Multi-task support</div>
                                <p>Top-notch computing power ensures that you’re able to run hundreds of tasks simultaneously with the confidence of success in all of them</p>
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
                    <Quest aos='fade-right' quest_text='How do I get access to the bot?' answer_text='You need to catch a key in any of our social networks. You can find it in our tweeter, instagram, tiktok or youtube, so stay tuned.' />
                    <Quest aos='fade-left' quest_text='How many slots do you offer?' answer_text='We have exactly 288 places, after all of them are taken there are no more to be added, so make sure to grab one while you can.' />
                    <Quest aos='fade-right' quest_text='Which platforms are compatible with your product?' answer_text='Right now Garson AIO is available only on Windows, while we are working as hard as we can to add Mac and iPhone/Android to our list of products.' />
                    <Quest aos='fade-left' quest_text='Is there a list of countries you support?' answer_text='One of our main goals is to provide our service globally, therefore our bot is available all over the world no matter where you are from.' />
                    <Quest aos='fade-right' quest_text='Is there a user dashboard?' answer_text='Yes! We provide an online user dashboard in your site account.' />
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