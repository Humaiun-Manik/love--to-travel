import React from 'react';
import './Footer.css';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import flight from './../../assets/images/flight.png'
import payment from './../../assets/images/payment.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <div className='footerBg'>
                <Container>
                    <Row className='footer-detail'>
                        <Col md={3}>
                            <div className='d-flex'>
                                <img src={flight} alt="" />
                                <h2>Love To Travel</h2>
                            </div>
                            <small>Air plant banjo lyft occupy retro adaptogen indego</small>
                        </Col>
                        <Col md={2}>
                            <h5>Subscribe</h5>
                            <Button className='w-75' variant="outline-primary">Signin Now</Button>
                        </Col>
                        <Col md={2}>
                            <h5>Quick Links</h5>
                            <ul className='quick-links'>
                                <li><Nav.Link as={Link} to="/home">Home</Nav.Link></li>
                                <li>
                                    <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link as={HashLink} to="/home#top-deals">TopDeals</Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link as={HashLink} to="/home#package">Package</Nav.Link>
                                </li>
                            </ul>
                        </Col>

                        <Col md={2}>
                            <h5>Support</h5>
                            <ul className='quick-links'>
                                <li>Customer Support</li>
                                <li>Privacy & Policy</li>
                                <li>Terms & Condition</li>
                                <li>Tour Guid</li>
                            </ul>
                        </Col>
                        <Col md={3}>
                            <img className='w-100 h-100' src={payment} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='footer-copyright'>
                <Container>
                    <Row className='text-center'>
                        <Col md={8}>
                            <p className='mt-4'>Copyright © 2022 | All Rights Reserved.</p>
                        </Col>
                        <Col md={4} className='mt-4'>
                            <FontAwesomeIcon className='social-media' icon={faFacebook} />
                            <FontAwesomeIcon className='social-media' icon={faTwitter} />
                            <FontAwesomeIcon className='social-media' icon={faLinkedin} />
                        </Col>
                    </Row>


                </Container>
            </div>
        </>
    );
};

export default Footer;