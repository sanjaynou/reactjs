import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'


export default class FormSubmit extends Component {
    state = {
        email: "",
        password: "",
        emailError: "",
        passError: ""
    }

    isValid() {
        if (this.state.password.length < 5) {
            this.setState({ emailError: "Invalid Email", passError: "Password length should be more than 5" })
        }

    }

    onSubmit() {
        if (this.isValid()) {
            console.log('form submited')
        }
    }
    render() {
        return (
            <div className="Login">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">
                            <h1>Form Handling</h1>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name="email" onChange={(e) => { this.setState({ email: e.target.value }) }} placeholder="Enter email" />
                                    <Form.Text className="text-muted">{this.state.emailError}</Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={(e) => { this.setState({ password: e.target.value }) }} placeholder="Password" />
                                    <Form.Text className="text-muted">{this.state.passError}</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" onClick={()=>{this.onSubmit()}} type="button">
                                    Submit
  </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
