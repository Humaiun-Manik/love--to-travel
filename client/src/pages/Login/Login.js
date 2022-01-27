import React from 'react';
import './Login.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import loginImg from './../../assets/images/login.png';
import google from './../../assets/images/google.png'
import useAuth from '../../hooks/useAuth';
import { useLocation } from 'react-router-dom';

const Login = () => {

    const location = useLocation();
    const redirect = location?.state?.from?.pathname || '/home';
    const { AllContexts } = useAuth();
    const { signInWithGoogle, error } = AllContexts;

    return (
        <div className='mt-5 pt-5'>
            <Container>
                <div className='center pb-5'>
                    <Row sm={2} className='login'>
                        <Col sm={12} md={6} className='login-title'>
                            <div className='w-100 text-center'>
                                <h2>Login</h2>
                                <h5>Welcome back!</h5>
                                <p className='text-danger'>{error}</p>
                                <Button onClick={() => signInWithGoogle(redirect)} className='my-4 w-75' variant="outline-danger">
                                    <div className='login-btn'>
                                        <img className='google-img' src={google} alt="" />
                                        Sign in with Google
                                    </div>
                                </Button>
                            </div>
                        </Col>
                        <Col sm={12} md={6} className='px-0'>
                            <img className='login-img w-100' src={loginImg} alt="" />
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Login;