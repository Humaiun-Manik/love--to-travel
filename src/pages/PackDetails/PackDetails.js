import React, { useEffect, useState } from 'react';
import './PackDetails.css';
import { Button, Card, Carousel, Col, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import useAuth from '../../hooks/useAuth';

const PackDetails = () => {

    const [tour, setTour] = useState({});
    const { id } = useParams();
    const { addToMyOrder } = useAuth();

    useEffect(() => {
        fetch(`https://morning-retreat-19009.herokuapp.com/tours/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data._id) {
                    setTour(data);
                } else {
                    alert('something went wrong');
                };
            });
    }, []);

    const submitInfo = (e) => {
        e.preventDefault();
        alert('Fill up Successfully')
    };

    return (
        <>
            {
                tour?.title ? (
                    <div key={tour._id}>
                        <div className="banner">
                            <Card className="bg-dark text-white banner">
                                <Card.Img src={tour?.photos?.thumbnail} alt="Card image" />
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
                                            <FontAwesomeIcon icon={faClock} /> {tour.duration}
                                        </p>
                                        <h4>Special {tour.title} Tour</h4>
                                        {/* Carousels */}
                                        <div className='slider_section'>
                                            <Carousel>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={tour?.photos?.img1}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={tour?.photos?.img2}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={tour?.photos?.img3}
                                                        alt="First slide"
                                                    />
                                                </Carousel.Item>
                                            </Carousel>
                                        </div>
                                        <p className='text-secondary'>{tour?.desc}</p>
                                        <hr className='my-5' />
                                        <div className='tour-booking'>
                                            <h1>$ {tour.price}</h1>
                                            <Button onClick={() => addToMyOrder(tour)}
                                                className='booking_btn' variant="secondary">BOOK NOW</Button>
                                        </div>
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
                                                <button
                                                    className='submit_btn' type='submit'
                                                    onClick={submitInfo}>Submit</button>
                                            </Form>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                ) : (<h1 className='not_found text-center'>No Package Found</h1>)
            }
        </>
    );
};
export default PackDetails;