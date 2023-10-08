import "./Register.scss";
import Form from "react-bootstrap/Form";
import { Button, Card, Tab } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Tabs from "react-bootstrap/Tabs";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { register } from "../../../api/auth";
import ErrorField, { validateForm } from "../../../utils/errors";
import { REGEXP } from "../../../utils/constants";
import { createStudent } from "../../../api/students";
import { createOrganization } from "../../../api/organizations";

const Register = () => {
  const nav = useNavigate();

  const initialState = {
    username: "",
    password: "",
    confirm_password: "",
    email: "",
  };
  const initialStudentState = {
    firstName: "",
    lastName: "",
    description: "",
  };
  const initialOrganizationState = {
    name: "",
    category: "",
    description: "",
  };

  const [form, setForm] = useState(initialState);
  const [statusForm, setStatusForm] = useState({
    firstname: "",
    lastname: "",
    description: "",
    name: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("student");

  const registerState = useFetch(register, {});
  const studentState = useFetch(createStudent, {});
  const orgState = useFetch(createOrganization, {});

  const handleInputForm = (event) => {
    const { name, value } = event.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputStatusForm = (event) => {
    const { name, value } = event.target;
    setStatusForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (form.password !== form.confirm_password) {
      return;
    }
    const validatedData = validateForm(initialState, form, {
      email: REGEXP.EMAIL,
    });
    const validatedStudent = validateForm(initialStudentState, statusForm);
    const validatedOrganization = validateForm(
      initialOrganizationState,
      statusForm
    );
    if (Object.entries(validatedData).length > 0) {
      setErrors(validatedData);
      return;
    }

    if (status === "student" && Object.entries(validatedStudent).length > 0) {
      setErrors((prev) => ({ ...prev, ...validatedStudent }));
      return;
    }

    if (
      status === "organization" &&
      Object.entries(validatedOrganization).length > 0
    ) {
      setErrors((prev) => ({ ...prev, ...validatedOrganization }));
      return;
    }
    setErrors({});
    registerState.sendRequest(form).then((res) => {
      if (res) {
        if (status === "student") {
          studentState
            .sendRequest({ ...statusForm, userId: res.userId })
            .then((res) => {});
        } else {
          orgState
            .sendRequest({ ...statusForm, userId: res.userId })
            .then((res) => {});
        }
        nav("/submit-register-code");
      }
    });
  };

  return (
    <div className={"wrapper"}>
      <Container>
        <Card className={"register-card"}>
          <Card.Body>
            <Card.Title>Register</Card.Title>
            <Card.Text>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  {" "}
                  <Form.Label>Email</Form.Label>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    value={form.email}
                    name={"email"}
                    onChange={handleInputForm}
                  />
                  <ErrorField enabled={errors["email"]} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  {" "}
                  <Form.Label>Username</Form.Label>{" "}
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name={"username"}
                    value={form.username}
                    onChange={handleInputForm}
                  />
                  <ErrorField enabled={errors["username"]} />
                </Form.Group>{" "}
                <Form.Group controlId="formBasicEmail">
                  {" "}
                  <Form.Label>Password</Form.Label>{" "}
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name={"password"}
                    value={form.password}
                    onChange={handleInputForm}
                  />
                  <ErrorField
                    enabled={errors["password"]}
                    error={
                      form.password !== form.confirm_password
                        ? "Passwords do not match"
                        : undefined
                    }
                  />
                </Form.Group>{" "}
                <Form.Group controlId="formBasicEmail">
                  {" "}
                  <Form.Label>Confirm password</Form.Label>{" "}
                  <Form.Control
                    type="password"
                    placeholder="Enter password"
                    name={"confirm_password"}
                    value={form.confirm_password}
                    onChange={handleInputForm}
                  />
                </Form.Group>
                <Tabs
                  defaultActiveKey="student"
                  id="uncontrolled-tab-example"
                  activeKey={status}
                  onSelect={(k) => setStatus(k)}
                >
                  <Tab eventKey="student" title="Student">
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label style={{ textAlign: "left" }}>
                        First name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter first name"
                        name="firstName"
                        value={statusForm.firstName}
                        onChange={handleInputStatusForm}
                      />
                      <ErrorField enabled={errors["firstName"]} />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter last name"
                        name="lastName"
                        value={statusForm.lastName}
                        onChange={handleInputStatusForm}
                      />
                      <ErrorField enabled={errors["lastName"]} />
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
                      <ErrorField enabled={errors["description"]} />
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
                      <ErrorField enabled={errors["name"]} />
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
                      <ErrorField enabled={errors["description"]} />
                    </Form.Group>
                  </Tab>
                </Tabs>
                <Button className={"btn btn-primary"} onClick={handleSubmit}>
                  Register
                </Button>
                <div>
                  <Link to={"/login"}>Already have an account? Login</Link>
                </div>
              </Form>
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default Register;
