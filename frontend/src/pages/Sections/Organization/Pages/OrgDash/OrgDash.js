import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Broadcasts from "./Gadgets/Broadcasts";
import JobOffers from "./Gadgets/JobOffers";
import Groups from "./Gadgets/Groups";

import "./OrgDash.scss";

const OrgDash = () => {
    return (
        <div className={"content-section"}>

            <h1 className={"page-title"}>Dashboard</h1>

            <Container>
                <Row>

                    <Broadcasts />

                    <JobOffers />

                    <Groups />

                    <Col sm={6}>
                        <Card  className={"dash-card"}>
                            <Card.Header>
                                <Card.Title>Trends</Card.Title>
                            </Card.Header>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OrgDash;