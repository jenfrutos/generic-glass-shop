import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';

const Services = () => {
    return (
        <Container className="mb-5">
            <h1>Services</h1>
            <Row>
                <Col>
                    <Card>
                        <Placeholder as={Card.Img} />
                        <Card.Body>
                            <Card.Title>Windows</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas egestas fringilla phasellus faucibus. Suspendisse ultrices gravida dictum fusce. Risus commodo viverra maecenas accumsan lacus vel facilisis. Consectetur libero id faucibus nisl tincidunt eget nullam non. Maecenas volutpat blandit aliquam etiam. Facilisis gravida neque convallis a cras. Semper quis lectus nulla at.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        Tellus at urna condimentum mattis pellentesque id nibh tortor. In tellus integer feugiat scelerisque varius morbi. Id nibh tortor id aliquet lectus proin. In hac habitasse platea dictumst quisque sagittis purus sit amet. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit.
                    </div>
                </Col>
                <Col>
                    <Card>
                        <Placeholder as={Card.Img} />
                        <Card.Body>
                            <Card.Title>Shower Doors</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Placeholder as={Card.Img} />
                        <Card.Body>
                            <Card.Title>Screens</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <div>
                        Eu nisl nunc mi ipsum faucibus vitae. Auctor eu augue ut lectus arcu. Rhoncus aenean vel elit scelerisque mauris. Eu facilisis sed odio morbi quis. Pharetra convallis posuere morbi leo urna. Eget aliquet nibh praesent tristique magna sit amet. Quis varius quam quisque id diam vel quam. Sem fringilla ut morbi tincidunt augue interdum velit euismod. Pretium quam vulputate dignissim suspendisse. Sit amet risus nullam eget felis eget.
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Services;