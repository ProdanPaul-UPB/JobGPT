import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";

import {AiOutlinePlus} from "react-icons/ai";

const NewBroadcast = () => {
    return (
        <div style={{width: '100%'}}>
            <Container>
                <h1 style={{marginTop: '5rem', marginBottom: '5rem'}}>New Broadcast</h1>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control type="text" placeholder="Enter subject" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Content</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter content" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recipients</Form.Label>
                        <Form.Control type="text" placeholder="Enter recipients" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Attachments</Form.Label>
                        <Form.Control type="text" placeholder="Enter attachments" />
                    </Form.Group>

                    <button style={{border: 'none', background: 'none', color: '#153470', borderRadius: '10px'}} >
                        <AiOutlinePlus size={40} />
                    </button>
                </Form>

            </Container>
        </div>
    )
}

export default NewBroadcast;