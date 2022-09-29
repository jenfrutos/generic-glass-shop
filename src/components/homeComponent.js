import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { AiFillStar } from 'react-icons/ai';
import testimonials from '../assets/testimonials';

const Home = () => {

    const starRating = (rating) => {
        let stars = [];
        for (let i = 1; i <= rating; i++) {
            stars.push(<AiFillStar className="star" />)

        } return stars
    }
    return (
        <Container fluid>
            <Carousel variant="dark">
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={require("../images/point3d-commercial-imaging.jpg")}
                        alt="First slide"
                    />
                    {/*  on <a href="https://unsplash.com/s/photos/shower-door?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

                    <Carousel.Caption >
                        <h3>Modern Shower Doors</h3>
                        <p>Photo by <a href="https://unsplash.com/@3dottawa?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Point3D Commercial Imaging Ltd.</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-img"
                        src={require("../images/alexandra-gornago.jpg")}
                        alt="Third slide"
                    />
                    {/*  on <a href="https://unsplash.com/s/photos/sliding-door?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}

                    <Carousel.Caption >
                        <h3>Custom Windows</h3>
                        <p>Photo by <a href="https://unsplash.com/@alexagornago?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexandra Gornago</a></p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="text-center">
                <Button variant="outline-danger" size="lg" href="/contactUs" className='mx-auto w-50'>Schedule Your Quote Today!</Button>
            </div>
            <div className="my-5">
                <h1>Testimonials</h1>
                <Row>
                    {testimonials.map((author) => {
                        return (
                            <Col className="my-4">
                                <Card>
                                    <Card.Header>{starRating(author.rating)}</Card.Header>
                                    <Card.Body>
                                        <blockquote className="blockquote mb-0">
                                            <p>
                                                {author.comments}
                                            </p>
                                            <footer className="blockquote-footer">
                                                {author.name}
                                            </footer>
                                        </blockquote>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        </Container>
    )
}

export default Home;