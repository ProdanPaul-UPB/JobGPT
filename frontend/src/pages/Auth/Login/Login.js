
import Form from "react-bootstrap/Form";
import {Card, Tab} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";

const Login = () => {
    return (
        <div className={"wrapper"}>
            <Container>
                <Card className={"register-card"}>
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Card.Text>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Enter password" />
                                </Form.Group>
                                <button className={"btn btn-primary"}>Login</button>
                                <div>
                                    <a href={"/register"}>Don't have an account? Register here.</a>
                                </div>
                            </Form>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
}

export default Login;