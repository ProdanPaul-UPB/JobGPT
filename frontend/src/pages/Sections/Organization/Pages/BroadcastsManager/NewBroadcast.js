import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";

import {AiOutlinePlus} from "react-icons/ai";

const NewBroadcast = () => {
    return (
        <div style={{width: '100%'}}>
            <Container>
                <h1 style={{marginTop: '5rem', marginBottom: '5rem'}}>New Broadcast</h1>

                <Form>
                    <Form.Group style={{textAlign: 'left'}} className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Enter title" />
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
    )
}

export default NewBroadcast;