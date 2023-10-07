import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const OrgSettings = () => {
    return (
        <div style={{minHeight: '100vh', width: '100%'}}>
            <Container>
                <h1 style={{marginTop: '5rem', marginBottom: '5rem'}}>Organization Settings</h1>

                <Form>
                    <Row>
                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Organization Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter organization name" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Organization Website</Form.Label>
                                <Form.Control type="text" placeholder="Enter organization website" />
                            </Form.Group>
                        </Col>

                        <Col sm={12} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Organization Description</Form.Label>
                                <Form.Control as="textarea" rows={3} placeholder="Enter organization description" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Organization Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter organization email" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Organization Phone Number</Form.Label>
                                <Form.Control type="tel" placeholder="Enter organization phone number" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Select style={{borderColor: 'lightgray', width: '100%', height: '50px'}}>
                                <option>Organization Tags</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Select style={{borderColor: 'lightgray', width: '100%', height: '50px'}}>
                                <option>Organization Tags</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </Col>

                    </Row>

                    <button style={{background: "#153470", border: 'none', color: 'white', padding: '10px 20px 10px 20px', borderRadius: '8px'}}>Save</button>

                </Form>
            </Container>
        </div>
    );
}

export default OrgSettings;