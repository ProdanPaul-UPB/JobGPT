import JobOffer from "../../Components/JobOffer";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import {useNavigate} from "react-router-dom";

const JobOffers = () => {

    const navigate = useNavigate();

    return (
        <Col sm={12}>
            <Card  className={"dash-card"}>
                <Card.Header>
                    <Card.Title>Your Job Listings</Card.Title>
                </Card.Header>
                <Card.Body style={{padding: '0px'}}>
                    <JobOffer name={"Paul"}
                              title={"Junior Software Developer"}
                              org={"Microsoft"}
                              time={"7 mins ago"}
                              content={"lorem ipsum dolor sit amet..."}
                              category={"Design"}
                              applicants={"15"} />
                </Card.Body>
                <Card.Footer>
                    <button style={{background: 'none', color: '#153470', border: 'none', borderRight: '1px solid lightgray'}} >View more</button>
                    <button onClick={() => {navigate("/organization/jobs/new")}} style={{background: 'none', color: '#153470', border: 'none'}} >Add Job Offer</button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default JobOffers;