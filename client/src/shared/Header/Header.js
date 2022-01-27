import React from 'react';
import './Header.css';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import logo from './../../assets/images/logo (1).jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { AllContexts } = useAuth();
    const { user, logOut } = AllContexts;

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed='top'>
                <Container>
                    <Navbar.Brand href="#home" className='nav_brand'>
                        <img
                            alt="logo"
                            src={logo}
                            width="40"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        <h3 className='brand'>Love To Travel</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto align-items-center menu-items">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#service">Service</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#package">Package</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#top-deals">TopDeals</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#gallery">Gallery</Nav.Link>
                            {
                                !user?.displayName ? (
                                    <Nav.Link className='login_btn' as={Link} to="/login">LOGIN</Nav.Link>
                                ) : (
                                    <>
                                        <Nav.Link as={Link} to="/order">MyOrder</Nav.Link>
                                        <NavDropdown className='dropdown-item' title={<img src={user.photoURL} alt="" />}>
                                            <div className='text-center'>
                                                <h6>{user?.displayName}</h6>
                                                <p>{user.email}</p>
                                                <Button onClick={logOut} variant="danger">Log Out</Button>
                                            </div>
                                        </NavDropdown>
                                    </>
                                )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;