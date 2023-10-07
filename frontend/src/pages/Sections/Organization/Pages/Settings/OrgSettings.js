import "./OrgSettings.scss";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OrgSettings = () => {
    return (
        <div className={"content-section"}>
            <Container>
                <h1 className={"page-title"}>Settings</h1>

                <div style={{textAlign: 'left'}}>

                    <h2 style={{marginBottom: "20px"}}>Account</h2>

                    <Form>
                        <Row>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password"/>
                                </Form.Group>
                            </Col>

                        </Row>

                    </Form>
                </div>

                <div style={{textAlign: 'left'}}>

                    <h2 style={{marginBottom: "20px"}}>Organization</h2>

                    <Form>
                        <Row>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group>
                                    <Form.Label>Activity Domain</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>

                            <Col sm={6} className={"input-field"}>
                                <Form.Group>
                                    <Form.Label>Location</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>
                            </Col>

                        </Row>

                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default OrgSettings;