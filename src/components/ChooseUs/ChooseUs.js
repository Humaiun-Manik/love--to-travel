import React from 'react';
import './ChooseUs.css';
import { Col, Container, Row } from 'react-bootstrap';
import chooseUs from './../../assets/images/why-choose-us.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faGlobeEurope, faUserAlt, faLock } from '@fortawesome/free-solid-svg-icons';
import { Slide } from 'react-reveal';

const ChooseUs = () => {
    return (
        <div>
            <Container>
                <Slide bottom >
                    <div className='text-center my-5 pt-5 section-title'>
                        <span>Why Choose Us?</span>
                        <h1>Every Time We Provide <p>Best Service</p></h1>
                    </div>
                </Slide>
                <Row className='why_choose'>
                    <Col xs={12} md={6}>
                        <Slide left>
                            <img src={chooseUs} alt="" />
                        </Slide>
                    </Col>
                    <Col sm={12} md={6}>
                        <Slide right>
                            <Row md={2}>
                                <Col sm={12}>
                                    <div>
                                        <FontAwesomeIcon className='package' icon={faBox}></FontAwesomeIcon>
                                        <h5>Exclusive Packages</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className='package' icon={faUserAlt}></FontAwesomeIcon>
                                        <h5>Best Travel Guide</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <FontAwesomeIcon className='package' icon={faGlobeEurope}></FontAwesomeIcon>
                                        <h5>World Class Service</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className='package' icon={faLock}></FontAwesomeIcon>
                                        <h5>100% Secure</h5>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                                    </div>
                                </Col>
                            </Row>
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ChooseUs;