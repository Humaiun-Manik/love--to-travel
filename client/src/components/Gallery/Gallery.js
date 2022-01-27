import React from 'react';
import './Gallery.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Slide } from 'react-reveal';
import tour1 from './../../assets/images/tour-gallery/tour-1.jpg';
import tour2 from './../../assets/images/tour-gallery/tour-2.jpg';
import tour3 from './../../assets/images/tour-gallery/tour-3.jpg';
import tour4 from './../../assets/images/tour-gallery/tour-4.jpg';
import tour5 from './../../assets/images/tour-gallery/tour-5.jpg';
import tour6 from './../../assets/images/tour-gallery/tour-6.jpg';

const Gallery = () => {
    return (
        <div id='gallery'>
            <Container>
                <Slide bottom >
                    <div className='text-center my-5 pt-5 section-title'>
                        <span>Tour Gallery</span>
                        <h1>Best Tourist's Shared <p>Photos</p></h1>
                    </div>
                    <Row className='mt-5 mx-5'>
                        {/* first column */}
                        <Col md={6}>
                            <Row className='mb-3'>
                                <Col md={6}>
                                    <img className='img-fluid' src={tour1} alt="" />
                                </Col>
                                <Col md={6}>
                                    <img className='img-fluid' src={tour2} alt="" />
                                </Col>
                            </Row>
                            <Row>
                                <img className='img-fluid' src={tour3} alt="" />
                            </Row>
                        </Col>
                        {/* secoud column  */}
                        <Col md={6}>
                            <Row>
                                <img className='img-fluid mb-3' src={tour4} alt="" />
                            </Row>
                            <Row className='mb-3'>
                                <Col md={6}>
                                    <img className='img-fluid' src={tour5} alt="" />
                                </Col>
                                <Col md={6}>
                                    <img className='img-fluid' src={tour6} alt="" />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Slide>
            </Container>
        </div>
    );
};

export default Gallery;