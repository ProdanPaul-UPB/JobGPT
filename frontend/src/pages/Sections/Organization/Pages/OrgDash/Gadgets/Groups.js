import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Groups = () => {
    return (
        <Col sm={6}>
            <Card  className={"dash-card"}>
                <Card.Header>
                    <Card.Title>Your Groups</Card.Title>
                </Card.Header>
                <Card.Body>

                </Card.Body>
                <Card.Footer>
                    <button style={{background: 'none', color: '#153470', border: 'none'}} >View more</button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default Groups;