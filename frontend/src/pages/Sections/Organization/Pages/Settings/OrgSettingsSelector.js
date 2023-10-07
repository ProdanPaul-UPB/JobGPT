import "./OrgSettings.scss";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Card} from "react-bootstrap";

import { FaUniversity, FaUser } from "react-icons/fa";

const OrgSettingsSelector = () => {
    return (
        <div className={"content-section"}>
            <Container>

                <h1 className={"page-title"}>Settings</h1>

                <Row>
                    <Col>
                        <a href={"/organization/settings/org"}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className={"set-card-title"}>Organization Settings</Card.Title>
                                    <FaUniversity style={{color: 'black'}} size={100} />
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                    <Col>
                        <a href={"/organization/settings/profile"}>
                            <Card>
                                <Card.Body>
                                    <Card.Title className={"set-card-title"}>Profile Settings</Card.Title>
                                    <FaUser style={{color: 'black'}} size={100} />
                                </Card.Body>
                            </Card>
                        </a>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default OrgSettingsSelector;