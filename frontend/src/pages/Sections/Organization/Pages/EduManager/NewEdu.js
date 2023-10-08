import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

const NewEdu = () => {
    return (
        <div style={{width: '100%'}}>
            <Container>
                <h1 style={{marginTop: '5rem', marginBottom: '5rem'}}>New Education Offer</h1>

                <Form>
                    <Form.Group style={{textAlign: 'left'}} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Degree</Form.Label>
                        <Form.Control type="text" placeholder="Enter degree" />
                    </Form.Group>

                    <Form.Group style={{textAlign: 'left'}} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>University</Form.Label>
                        <Form.Control type="text" placeholder="Enter University" />
                    </Form.Group>

                    <Form.Group style={{textAlign: 'left'}} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter content" />
                    </Form.Group>

                    <Form.Group style={{textAlign: 'left'}} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Categories</Form.Label>
                        <Form.Control type="text" placeholder="Enter categories" />
                    </Form.Group>

                    <button style={{border: 'none', background: 'none', color: '#153470', borderRadius: '10px'}} >
                        Save
                    </button>
                </Form>

            </Container>
        </div>
    );
}

export default NewEdu;