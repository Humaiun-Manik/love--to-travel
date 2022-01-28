import React from 'react';
import './MyOrder.css';
import { Button, Col, Container, Nav, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const MyOrder = () => {

    const { selectedTour, setSelectedTour, AllContexts, remove } = useAuth();
    console.log(selectedTour);
    const { user } = AllContexts;
    const totalCost = selectedTour.reduce((total, tour) => total + tour.price, 0);

    return (
        <div className='my-5 py-5'>
            <Container>
                {selectedTour.length ? <Row xs={1} md={2} className='my-4'>
                    <h5 className='mt-5'>My Orders</h5>
                    {selectedTour.map(tour => <Col key={tour._id} xs={12} md={7}>
                        <Row xs={1} md={2} className='my-2' style={{ backgroundColor: '#0DCAF0' }}>
                            <Col xs={12} md={5} style={{ marginLeft: '-12px' }}>
                                <img style={{ width: '250px', height: '250px' }} src={tour.photos.img1} alt="" />
                            </Col>
                            <Col xs={12} md={7} className='py-2'>
                                <h5>{tour.title}</h5>
                                <p className='m-0'>
                                    {tour.desc.slice(0, 150)}...
                                </p>
                                <Rating className='text-warning mt-1'
                                    initialRating={tour.rating}
                                    readonly
                                    emptySymbol={<FontAwesomeIcon icon={emptyStar} />}
                                    fullSymbol={<FontAwesomeIcon icon={fullStar} />}
                                />
                                <span>  {tour.rating}</span>
                                <p className='m-0'>Total review: {tour.ratingCount}</p>
                                <div className='price_btn mt-2'>
                                    <h4>Price: {tour.price} $</h4>
                                    <Button onClick={() => remove(tour._id)} className='px-4 py-2' variant="primary">Remove</Button>
                                </div>
                            </Col>
                        </Row>
                    </Col>)}
                    <Col md={1}></Col>
                    <Col className='cart position-fixed' xs={12} md={4} style={{ top: "150px", right: '30px' }}>
                        <div className='userInfo m-4'>
                            <div className='user_name'>
                                <img src={user.photoURL} alt="" />
                                <h4>{user.displayName}</h4>
                            </div>
                            <div className='user_email'>
                                <h5 className='me-5'>Account</h5>
                                <h6 className='email'>{user.email}</h6>
                            </div>
                        </div>
                        <hr />
                        <div className='text-center mt-4'>
                            <h4>Total {selectedTour.length} tour selected</h4>
                            <h6>Total Price: {totalCost.toFixed(2)} $</h6>
                            <Button onClick={() => {
                                alert('Thanks for booking');
                                setSelectedTour([]);
                            }} className='book_btn w-75'>Book Now</Button>
                            <p className='mt-3'>or <Link as={HashLink} to="/home#package">Continue Shopping →</Link></p>
                        </div>

                    </Col>
                </Row> :
                    <div className='text-center my-5 py-5'>
                        <h1>No tour Selected!</h1>
                    </div>
                }
            </Container>
        </div>
    );
};

export default MyOrder;