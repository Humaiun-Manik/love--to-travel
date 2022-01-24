import React from 'react';
import './Contact.css';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { Slide } from 'react-reveal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className='mb-5 pb-5'>
            <Container>
                <Slide bottom>
                    <div className='text-center my-5 pt-5 section-title'>
                        <span>Contact Us</span>
                        <h1>If You Have Any Question <p>Drop A Message</p></h1>
                    </div>
                </Slide>
                <Row>
                    <Col md={7}>
                        <Slide left>
                            <Form>
                                <Row>
                                    <Col sm={12} md={6}>
                                        <Form.Group className="mb-5">
                                            <Form.Control className='p-2 input_field' type="text" placeholder="Name" required />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Form.Group className="mb-5">
                                            <Form.Control className='p-2 input_field' type="email" placeholder="Email" required />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-5">
                                    <Form.Control className='p-2 input_field' type="text" placeholder="Subject" required />
                                </Form.Group>
                                <Form.Group className="mb-5">
                                    <Form.Control className='p-2 input_field' as="textarea" rows={3} placeholder='Your Message' required />
                                </Form.Group>
                                <button className='send_btn' type='submit'>Send Message</button>
                            </Form>
                        </Slide>
                    </Col>
                    <Col md={5}>
                        <div className='contact_info'>
                            <span><FontAwesomeIcon icon={faMapMarkerAlt} /></span>
                            <p>Mohammadpur, Dhaka, <br />Bangladesh</p>
                        </div>
                        <div className='contact_info'>
                            <span><FontAwesomeIcon icon={faPhone} /></span>
                            <p>(+880) 1774446071<br />(+880) 1374541706</p>
                        </div>
                        <div className='contact_info'>
                            <span><FontAwesomeIcon icon={faAt} /></span>
                            <p>help@lovetotravel.com <br />info@lovetotravel.com</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;