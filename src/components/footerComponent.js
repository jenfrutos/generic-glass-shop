
import { faFacebook, faInstagram, faYelp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <Container fluid className="footer">
            <Row >
                <Col>1234 Street St. <br />
                    Hollister, CA 95023
                </Col>
                <Col>Privacy Policy</Col>
                <Col>
                    <div className='d-flex justify-content-evenly'>
                        <FontAwesomeIcon icon={faInstagram} size="xl" />
                        <FontAwesomeIcon icon={faFacebook} size="xl" />
                        <FontAwesomeIcon icon={faYelp} size="xl" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;

