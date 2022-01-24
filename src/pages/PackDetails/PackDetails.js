import React from 'react';
import './PackDetails.css';
import { Button, Card, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useAuth from './../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const PackDetails = () => {

    const { id } = useParams();
    const { packages } = useAuth();
    const matchingPackage = packages.find(pack => pack.id === Number(id));
    // const { photos, title, desc, price, rating, ratingCount, duration } = matchingPackage;

    return (
        <>
            {
                matchingPackage?.title ? (
                    <div>
                        <div className="banner">
                            <Card className="bg-dark text-white banner">
                                <Card.Img src={matchingPackage?.photos?.thumbnail} alt="Card image" />
                                <Card.ImgOverlay className='banner_overlay'>
                                    <Card.Title><h1>Tour Details</h1></Card.Title>
                                </Card.ImgOverlay>
                            </Card>
                        </div>
                        <div className='my-5 pt-5'>
                            <Container>
                                <Row>
                                    <Col sm={12} md={8}>
                                        <p className='text-danger mb-2 me-2 duration'>
                                            <FontAwesomeIcon icon={faClock} /> {matchingPackage.duration}
                                        </p>
                                        <h4>Special {matchingPackage.title} Tour</h4>
                                        {/* Carousels */}
                                        <div className='slider_section'>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={matchingPackage?.photos?.img1}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={matchingPackage?.photos?.img2}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={matchingPackage?.photos?.img3}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <p className='text-secondary'>{matchingPackage?.desc}</p>
                                    </Col>
                                    <Col sm={12} md={4}>
                                        <div className='booking_form'>
                                            <h3>Tour Booking</h3>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control className='single_input_field' type="text" placeholder="Name" required />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control className='single_input_field' type="email" placeholder="Email" required />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control className='single_input_field' type="text" placeholder="Phone" required />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control className='single_input_field' type="text" placeholder="Date" required />
                                                </Form.Group>
                                                <Form.Group>
                                                    <Form.Control className='single_input_field' type="text" placeholder="No of Person" required />
                                                </Form.Group>
                                                <button className='submit_btn' type='submit'>Submit</button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                ) : (<h1>No Package Found</h1>)
            }
        </>
    );
}
export default PackDetails;