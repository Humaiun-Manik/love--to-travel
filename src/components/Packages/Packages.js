import React from 'react';
import './Packages.css';
import { Button, Card, Col, Container, Nav, Row } from 'react-bootstrap';
import { Slide } from 'react-reveal';
import useAuth from '../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faClock, faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Packages = () => {

    const { packages } = useAuth();

    return (
        <div id='package'>
            <Container>
                <Slide bottom>
                    <div className='text-center my-5 pt-5 section-title'>
                        <span>Popular Tour Package</span>
                        <h1>The Best Of Our All <br /> Tour Packages</h1>
                    </div>
                    <div>
                        <Row xs={1} md={3} className="g-4">
                            {packages.map(pack => <Col>
                                <Card className='single_package' key={pack.id}>
                                    <Card.Img className='img-fluid pack_img' variant="top" src={pack.photos.thumbnail} />
                                    <Card.Body className='p-4 pb-3'>
                                        <Card.Title className='package_hover w-100'>
                                            <div>
                                                <h5>{pack.title}</h5>
                                            </div>
                                            <div>
                                                <span className='text-danger'>${pack.price}</span>
                                            </div>
                                        </Card.Title>
                                        <Card.Text>
                                            <div className='rating'>
                                                <Rating className='text-warning my-2'
                                                    initialRating={pack.rating}
                                                    readonly
                                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                                />
                                                <p>Reviews {pack.ratingCount}</p>
                                            </div>
                                            <small className="duration">
                                                <FontAwesomeIcon className='text-danger me-2' icon={faClock} /> {pack.duration}
                                            </small>
                                            <Nav.Link className='p-0' as={Link} to={`/package-detail/${pack.id}`}><Button className='book_btn'>Book Now
                                            </Button>
                                            </Nav.Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            )}
                        </Row>
                    </div>
                </Slide>
            </Container>
        </div>
    );
};

export default Packages;