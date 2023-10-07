import "./Register.scss";
import Form from "react-bootstrap/Form";
import {Card, Tab} from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Tabs from "react-bootstrap/Tabs";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import useFetch from "../../../hooks/useFetch";
import {register} from "../../../api/auth";
import {validateForm} from "../../../utils/errors";
import {REGEXP} from "../../../utils/constants";

const Register = () => {
    const nav = useNavigate();

    const initialState = {
        username: '', password: '', confirm_password: '', email: '', address: '',
    };
    const [form, setForm] = useState(initialState);
    const [statusForm, setStatusForm] = useState({});
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('student');

    const registerState = useFetch(register, {});

    const handleInputForm = (event) => {
        const {name, value} = event.target;
        setForm(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleInputStatusForm = (event) => {
        const {name, value} = event.target;
        setStatusForm(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleSubmit = () => {
        if (form.password !== form.confirm_password) {
            setErrors({password: "Passwords don't match"});
            return;
        }
        const validatedData = validateForm(initialState, form, {email: REGEXP.EMAIL});
        if (Object.entries(validatedData).length > 0) {
            setErrors(validatedData);
            return;
        }
    };


    return (<div className={"wrapper"}>
        <Container>
            <Card className={"register-card"}>
                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail"> <Form.Label>Email</Form.Label> <Form.Control
                                type="text" placeholder="Enter email"/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail"> <Form.Label>Username</Form.Label> <Form.Control
                                type="text" placeholder="Enter username"/> </Form.Group> <Form.Group
                            controlId="formBasicEmail"> <Form.Label>Password</Form.Label> <Form.Control
                            type="password" placeholder="Enter password"/> </Form.Group> <Form.Group
                            controlId="formBasicEmail"> <Form.Label>Confirm password</Form.Label> <Form.Control
                            type="password" placeholder="Enter password"/> </Form.Group>
                            <Tabs
                                defaultActiveKey="student"
                                id="uncontrolled-tab-example"
                                activeKey={status}
                                onSelect={(k) => setStatus(k)}
                            >
                                <Tab eventKey="student" title="Student">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label style={{textAlign: 'left'}}>First name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter first name"
                                                      name="firstName"
                                                      value={statusForm.firstName}
                                                      onChange={handleInputStatusForm}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Last name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter last name"
                                                      name="lastName"
                                                      value={statusForm.lastName}
                                                      onChange={handleInputStatusForm}/>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter description"
                                            name="description"
                                            value={statusForm.description}
                                            onChange={handleInputStatusForm}
                                        />
                                    </Form.Group>
                                </Tab>
                                <Tab eventKey="organization" title="Organization">
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Organization name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter organization name"
                                            name="orgName"
                                            value={form.name}
                                            onChange={handleInputForm}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Organization type</Form.Label>
                                        <Form.Select
                                            placeholder="Select organization type"
                                            name="category"
                                            value={statusForm.category}
                                            onChange={handleInputStatusForm}
                                        >
                                            <option value="university">University</option>
                                            <option value="company">Company</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Organization description</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter organization description"
                                            name="description"
                                            value={statusForm.description}
                                            onChange={handleInputStatusForm}
                                        />
                                    </Form.Group>
                                </Tab>
                            </Tabs>
                            <button className={"btn btn-primary"} onClick={handleSubmit}>
                                Register
                            </button>
                            <div>
                                <Link to={"/login"}>Already have an account? Login</Link>
                            </div>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </div>);
}

export default Register;