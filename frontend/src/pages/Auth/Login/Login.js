import Form from "react-bootstrap/Form";
import {Button, Card} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import {login} from "../../../api/auth";
import useFetch from "../../../hooks/useFetch";
import ErrorField, {validateForm} from "../../../utils/errors";
import {saveAuthToStorage} from "../../../utils/storage";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const nav = useNavigate();

    const initialState = {
        username: '', password: '',
    };
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});

    const loginState = useFetch(login, {});

    const handleInputForm = (event) => {
        const {name, value} = event.target;
        setForm(prevState => ({
            ...prevState, [name]: value
        }));
    };

    const handleSubmit = () => {
        const validatedData = validateForm(initialState, form);
        if (Object.entries(validatedData).length > 0) {
            setErrors(validatedData);
            return;
        }

        loginState.sendRequest(form).then(res => {
            if (res) {
                console.log(res);
                saveAuthToStorage({token: res?.token, uuid: res?.uuid});
                console.log(res?.token);
                nav('/');
            }
        });
    };


    return (<div className={"wrapper"}>
        <Container>
            <Card className={"register-card"}>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Text>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username"
                                              name={"username"}
                                              value={form.username}
                                              onChange={handleInputForm}/>
                                <ErrorField enabled={errors['username']}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter password"
                                              name={"password"}
                                              value={form.password}
                                              onChange={handleInputForm}/>
                                <ErrorField enabled={errors['password']}/>
                            </Form.Group>
                            <Button className={"btn btn-primary"}
                                    onClick={handleSubmit}
                            >Login
                            </Button>
                            <div>
                                <Link to={"/register"}>Don't have an account? Register here.</Link>
                            </div>
                        </Form>
                        <p style={{color: "red"}}>{loginState.error && (loginState.error.response.data.error === "Please confirm your email" ? "Activate your account first" : "Invalid credentials")}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    </div>);
}

export default Login;