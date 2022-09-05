import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/esm/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ContactUs = () => {
    return (
        <Container>
            <h1>Business Info</h1>
            <Row className="mb-5">
                <Col sm={6}>
                    <h5>PHONE</h5>
                    (408) 800-1234
                    <h5>HOURS</h5>
                    Monday - Friday: 8am - 5pm <br />
                    Saturday - Sunday: CLOSED
                    <h5>ADDRESS</h5>
                    1234 Street St. <br />
                    Hollister, CA 95023
                </Col>
                <Col className="m-auto">
                    <Button variant="outline-danger" size="lg" target="_blank" href="https://www.google.com/maps/dir//Hollister,+CA+95023/@36.8134703,-121.5586824,11z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8091f7c9df189c6b:0x70474dec2693ac0!2m2!1d-121.4016021!2d36.8524545">Get Directions</Button>
                </Col>
            </Row>
            <Row >
                <Col md={{ span: 6, offset: 3 }} className="bg-secondary bg-gradient bg-opacity-25 pb-2">
                    <h4 className="mx-auto">Send Us a Message</h4>
                    <Form>
                        <Form.Group>
                            <FloatingLabel controlId="nameContact" label="Name" className="mb-2">
                                <Form.Control placeholder="Name" required />
                            </FloatingLabel>
                            <FloatingLabel controlId="emailContact" label="Email" className="mb-2">
                                <Form.Control placeholder="Email" required type="email" />
                            </FloatingLabel>
                            <FloatingLabel controlId="message" label="Message" className="mb-2">
                                <Form.Control as="textarea" rows={3} placeholder="Message" />
                            </FloatingLabel>
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type="submit" variant="dark" onClick={() => alert('Message Sent')}>Submit</Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </Container >
    )
}

export default ContactUs;