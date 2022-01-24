import React from 'react';
import './Slider.css';
import { Button, Carousel } from 'react-bootstrap';
import banner1 from './../../assets/images/banner-2.png';
import banner2 from './../../assets/images/banner-1.png';
import banner3 from './../../assets/images/banner-3.png';

const Slider = () => {
    return (
        <div>
            <div className="hero-section">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Welcome To The Travel</h1>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <Button className='mb-5' variant="outline-danger">Booking Now</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="Second slide"
                        />

                        <Carousel.Caption className='slide'>
                            <h1>Choose The Best Tour Package</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Button className='mb-5' variant="outline-danger">Booking Now</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Third slide"
                        />

                        <Carousel.Caption className='slide'>
                            <h1>Travel To The Beautiful Place</h1>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            <Button className='mb-5' variant="outline-danger">Booking Now</Button>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;