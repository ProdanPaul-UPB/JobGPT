import "./Register.scss";
import Form from "react-bootstrap/Form";
import {Card, Tab} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Tabs from "react-bootstrap/Tabs";

const Register = () => {
    return (
        <div className={"wrapper"}>
            <Container>
                <Card className={"register-card"}>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label style={{textAlign: 'left'}}>First name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="text" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Phone number</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone number" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control type="text" placeholder="Enter city" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control type="text" placeholder="Enter state" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Zip code</Form.Label>
                                    <Form.Control type="text" placeholder="Enter zip code" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Country</Form.Label>
                                    <Form.Control type="text" placeholder="Enter country" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Confirm password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                                <Tabs defaultActiveKey="student" id="uncontrolled-tab-example">
                                    <Tab eventKey="student" title="Student">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Student ID</Form.Label>
                                            <Form.Control type="text" placeholder="Enter student ID" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Major</Form.Label>
                                            <Form.Control type="text" placeholder="Enter major" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Graduation year</Form.Label>
                                            <Form.Control type="text" placeholder="Enter graduation year" />
                                        </Form.Group>
                                    </Tab>
                                    <Tab eventKey="organization" title="Organization">
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Organization name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter organization name" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Organization type</Form.Label>
                                            <Form.Control type="text" placeholder="Enter organization type" />
                                        </Form.Group>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Organization description</Form.Label>
                                            <Form.Control type="text" placeholder="Enter organization description" />
                                        </Form.Group>
                                    </Tab>
                                </Tabs>
                                <button className={"btn btn-primary"}>Register</button>
                                <div>
                                    <a href={"/login"}>Already have an account? Login</a>
                                </div>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Register;