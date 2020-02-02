import React, { Component } from 'react'
import { Carousel, Button, Card } from 'react-bootstrap'
//import ReactBootstrapCarousel from "react-bootstrap-carousel";
//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { Helmet } from 'react-helmet';



export default class Home extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>React App | Home</title>
                </Helmet>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider2.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="slider3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
    </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
            </>
        );

    }
}
