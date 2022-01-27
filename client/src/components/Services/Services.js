import React from 'react';
import './Services.css';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faPlaneDeparture, faTicketAlt, faHiking } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div id='service'>
            <Container>
                <Row>
                    <Col sm={6} md={3}>
                        <div className='service-detail p-4 text-center'>
                            <div className='icon mt-4'>
                                <span><FontAwesomeIcon icon={faBed} /></span>
                            </div>
                            <h5>Hotel Booking</h5>
                            <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='service-detail p-4 text-center'>
                            <div className='icon mt-4'>
                                <span><FontAwesomeIcon icon={faPlaneDeparture} /></span>
                            </div>
                            <h5>Flight Booking</h5>
                            <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='service-detail p-4 text-center'>
                            <div className='icon mt-4'>
                                <span><FontAwesomeIcon icon={faTicketAlt} /></span>
                            </div>
                            <h5>Ticket Booking</h5>
                            <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt</p>
                        </div>
                    </Col>
                    <Col sm={6} md={3}>
                        <div className='service-detail p-4 text-center'>
                            <div className='icon mt-4'>
                                <span><FontAwesomeIcon icon={faHiking} /></span>
                            </div>
                            <h5>Amazing Tour</h5>
                            <p>Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;