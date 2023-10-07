import JobOffer from "../../Components/JobOffer";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const JobOffers = () => {
    return (
        <Col sm={6}>
            <Card  className={"dash-card"}>
                <Card.Header>
                    <Card.Title>Your Job Listings</Card.Title>
                </Card.Header>
                <Card.Body>

                </Card.Body>
                <Card.Footer>
                    <button style={{background: 'none', color: '#153470', border: 'none'}} >View more</button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default JobOffers;