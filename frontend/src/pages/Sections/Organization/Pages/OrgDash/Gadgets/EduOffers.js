import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const EduOffers = () => {
    return (
        <Col sm={12}>
            <Card  className={"dash-card"}>
                <Card.Header>
                    <Card.Title>Your Education Offers</Card.Title>
                </Card.Header>
                <Card.Body>

                </Card.Body>
                <Card.Footer>
                    <button style={{background: 'none', color: '#153470', border: 'none', borderRight: '1px solid lightgray'}} >View more</button>
                    <button style={{background: 'none', color: '#153470', border: 'none'}} >Add Educational Offer</button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default EduOffers;