import React, { Component } from 'react'
import { Button, Form, Container, Row, Col } from 'react-bootstrap'

class RegisterForm extends Component {
    constructor() {
        super();
        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }

    submituserRegistrationForm(e) {
        e.preventDefault();
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["emailid"] = "";
            fields["mobileno"] = "";
            fields["password"] = "";
            this.setState({ fields: fields });
            console.log(this.state);
            alert("Form submitted");
        }

    }

    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";
        }

        if (typeof fields["username"] !== "undefined") {
            if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                errors["username"] = "*Please enter alphabet characters only.";
            }
        }

        if (!fields["emailid"]) {
            formIsValid = false;
            errors["emailid"] = "*Please enter your email-ID.";
        }

        if (typeof fields["emailid"] !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(fields["emailid"])) {
                formIsValid = false;
                errors["emailid"] = "*Please enter valid email-ID.";
            }
        }

        if (!fields["mobileno"]) {
            formIsValid = false;
            errors["mobileno"] = "*Please enter your mobile no.";
        }

        if (typeof fields["mobileno"] !== "undefined") {
            if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["mobileno"] = "*Please enter valid mobile no.";
            }
        }

        if (!fields["password"]) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof fields["password"] !== "undefined") {
            if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter secure and strong password.";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;


    }

    render() {
        return (
            <div className="Login">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs lg="6">
                            <h3>Registration Page</h3>
                            <Form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >
                                <Form.Group controlId="forUsername">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
                                    <Form.Text className="errorMsg">{this.state.errors.username}</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="forEmail">
                                    <Form.Label>Email ID:</Form.Label>
                                    <Form.Control type="text" name="emailid" value={this.state.fields.emailid} onChange={this.handleChange} />
                                    <Form.Text className="errorMsg">{this.state.errors.emailid}</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="forMobile">
                                    <Form.Label>Mobile No:</Form.Label>
                                    <Form.Control type="text" name="mobileno" value={this.state.fields.mobileno} onChange={this.handleChange} />
                                    <Form.Text className="errorMsg">{this.state.errors.mobileno}</Form.Text>
                                </Form.Group>
                                <Form.Group controlId="forPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
                                    <Form.Text className="errorMsg">{this.state.errors.password}</Form.Text>
                                </Form.Group>
                                <Button type="submit" className="button" value="Register">Register</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }


}

export default RegisterForm;
