import {Card} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

const SubmitRegisterCode = () => {
    return (
        <div style={{minHeight: '100vh'}}>
            <Container>
                <Card style={{marginTop: '120px'}}>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Submit Register Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter Register Code" />
                            </Form.Group>
                        </Form>
                        <button>Submit</button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default SubmitRegisterCode;