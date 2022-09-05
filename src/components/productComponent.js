import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Placeholder from 'react-bootstrap/Placeholder';
import Row from 'react-bootstrap/Row';

const Product = () => {
    return (
        <Container className="mb-5">
            <h1>Materials</h1>
            <Row>
                <Col>
                    <Card>
                        <Placeholder as={Card.Img} />
                        <Card.Body>
                            <Card.Title>Pet Screen</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <div>
                        Rhoncus aenean vel elit scelerisque mauris. Eget magna fermentum iaculis eu. Morbi tincidunt augue interdum velit euismod in. Et tortor at risus viverra adipiscing. Lacus sed turpis tincidunt id aliquet. Lectus arcu bibendum at varius vel. Amet nisl purus in mollis nunc. Lectus sit amet est placerat. Integer feugiat scelerisque varius morbi. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam.
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>
                        In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Diam phasellus vestibulum lorem sed risus ultricies. Pellentesque id nibh tortor id aliquet lectus proin nibh. Nec dui nunc mattis enim ut tellus. Pretium fusce id velit ut. Quam quisque id diam vel. Quis blandit turpis cursus in.
                    </div>
                </Col>
                <Col>
                    <Card>
                        <Placeholder as={Card.Img} />
                        <Card.Body>
                            <Card.Title>Low-E Glass</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <Placeholder as={Card.Img} />
                        <Card.Body>
                            <Card.Title>Custom Hardware Colors</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <div>
                        Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Faucibus turpis in eu mi bibendum neque egestas congue quisque. Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Proin sagittis nisl rhoncus mattis rhoncus urna. Bibendum neque egestas congue quisque egestas diam in arcu. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices.
                    </div>
                </Col>
            </Row>

        </Container>
    )
}

export default Product;