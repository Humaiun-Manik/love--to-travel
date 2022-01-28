import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { Slide } from 'react-reveal';
import './Destinations.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Destinations = () => {

    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('https://morning-retreat-19009.herokuapp.com/destinations')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, []);

    return (
        <>
            <Container id='top-deals'>
                <Slide bottom >
                    <div className='text-center my-5 pt-5 section-title'>
                        <span>Popular Destinations</span>
                        <h1>Travel Most Popular Place <p>In The World</p></h1>
                    </div>
                    <Row xs={1} md={3} className="g-4">
                        {destinations.map((destination) => (<Col>
                            <Card className='single_deal' key={destination.id}>
                                <Card.Img variant="top" src={destination.img} />
                                <Card.Body className='d-flex'>
                                    <div >
                                        <Card.Title>{destination.title}</Card.Title>
                                        <Card.Text>
                                            <p className='mb-0'>From ${destination.price}</p>
                                        </Card.Text>
                                    </div>
                                    <div className='detailBtn'>
                                        <Nav.Link className='p-0' as={Link} to={`/package-detail/${destination.id}`}>
                                            <Button variant="outline-danger">
                                                <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                                            </Button>
                                        </Nav.Link>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Slide>
            </Container>
        </>
    );
};

export default Destinations;