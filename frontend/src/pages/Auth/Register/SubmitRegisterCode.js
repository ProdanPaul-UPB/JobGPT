import {Button, Card} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import {useState} from "react";
import useFetch from "../../../hooks/useFetch";
import {emailConfirmation} from "../../../api/auth";
import {useNavigate} from "react-router-dom";

const SubmitRegisterCode = () => {

    const [registerCode, setRegisterCode] = useState('');
    const [error, setError] = useState('');
    const confirmEmail = useFetch(emailConfirmation, {});

    const nav = useNavigate();

    const submitRegisterCode = () => {
        confirmEmail.sendRequest({code: registerCode}).then(res => {
            if(res){
                nav('/login');
            }else{
                setError('Invalid Register Code');
            }
        })
    }

    return (<div style={{minHeight: '100vh'}}>
            <Container>
                <Card style={{marginTop: '120px'}}>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Submit Register Code</Form.Label>
                                <Form.Control type="text" placeholder="Enter Register Code"
                                              value={registerCode} onChange={(e) => setRegisterCode(e.target.value)}
                                />
                            </Form.Group>
                        </Form>
                        <Button onClick={submitRegisterCode}>Submit</Button>
                        <p style={{color: 'red'}}>{error}</p>
                    </Card.Body>
                </Card>
            </Container>
        </div>)
}

export default SubmitRegisterCode;