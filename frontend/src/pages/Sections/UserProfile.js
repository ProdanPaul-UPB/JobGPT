import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const UserProfile = () => {
    return (
        <div style={{minHeight: '100vh', width: '100%'}}>
            <Container>
                <h1 style={{marginTop: '5rem', marginBottom: '5rem'}}>Profile settings</h1>

                <Form>
                    <Row>
                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter first name" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter last name" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" placeholder="Enter username" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" placeholder="Enter email" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Curriculum Vitae</Form.Label>
                                <Form.Control type="text" placeholder="Enter CV" />
                            </Form.Group>
                        </Col>

                        <Col sm={6} style={{marginBottom: '2rem'}}>
                            <Form.Group style={{textAlign: 'left'}}>
                                <Form.Label>Avatar</Form.Label>
                                <Form.Control type="text" placeholder="Upload Avatar" />
                            </Form.Group>
                        </Col>
                    </Row>

                </Form>

                <button style={{background: "#153470", border: 'none', color: 'white', padding: '10px 20px 10px 20px', borderRadius: '8px'}}>Save</button>

            </Container>
        </div>
    )
}

export default UserProfile;