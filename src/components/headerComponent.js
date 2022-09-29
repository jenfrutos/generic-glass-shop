import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Container fluid className="header" >
                <Link to="/" style={{ color: "whitesmoke" }}>THE GLASS SHOP</Link>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="ms-auto">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="loginForm" className="mb-3">
                            <FloatingLabel controlId="floatingEmail" label="Email" className="mb-3">
                                <Form.Control type="email" placeholder="jane@gmail.com" size="sm" />
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
                                <Form.Control type="password" placeholder="Password" size="sm" />
                            </FloatingLabel>
                            <div className="d-grid gap-2">
                                <Button variant="dark" onClick={() => console.log('login clicked')}>Login</Button>
                                <Button variant="outline-dark" href="/newUser">Create New User</Button>
                            </div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
            </Modal>

            <Navbar bg="light" expand="md" className="mb-3">
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar">
                    <Nav className="mx-auto">
                        <Navbar.Text className="mx-3">
                            <NavLink to="/" >Home</NavLink>
                        </Navbar.Text>
                        <Navbar.Text className="mx-3">
                            <NavLink to="/services" >Services</NavLink>
                        </Navbar.Text>
                        <Navbar.Text className="mx-3">
                            <NavLink to="/product" >Product Samples</NavLink>
                        </Navbar.Text>
                        <Navbar.Text className="mx-3">
                            <NavLink to="/contactUs" >Contact Us</NavLink>
                        </Navbar.Text>
                        <Navbar.Text className="mx-3">
                            <Button variant="link" size="sm" onClick={handleShow}><FontAwesomeIcon icon={faUser} size="xl" className="text-dark" /></Button>
                        </Navbar.Text>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;