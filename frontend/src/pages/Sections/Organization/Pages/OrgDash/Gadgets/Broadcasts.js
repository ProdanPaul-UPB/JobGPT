import Broadcast from "../../Components/Broadcast";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import {useNavigate} from "react-router-dom";

const Broadcasts = () => {

const navigate = useNavigate();

    return (
        <Col sm={12}>
            <Card  className={"dash-card"}>
                <Card.Header>
                    <Card.Title>Your Broadcasts</Card.Title>
                </Card.Header>

                <Card.Body className={"dash-card-broadcast-body"}>
                    <Broadcast name={"Paul"}
                               title={"furnici"}
                               time={"7 mins ago"}
                               content={"lorem ipsum dolor sit amet..."}
                               category={"Design"}
                               upvotes={"15"} />

                    <Broadcast name={"Paul"}
                               title={"furnici"}
                               time={"7 mins ago"}
                               content={"lorem ipsum dolor sit amet..."}
                               category={"Programare & Tech"}
                               upvotes={"15"} />

                    <Broadcast name={"Paul"}
                               title={"furnici"}
                               time={"7 mins ago"}
                               content={"lorem ipsum dolor sit amet..."}
                               category={"Programare & Tech"}
                               upvotes={"15"} />

                    <Broadcast name={"Paul"}
                               title={"furnici"}
                               time={"7 mins ago"}
                               content={"lorem ipsum dolor sit amet..."}
                               category={"Programare & Tech"}
                               upvotes={"15"} />
                </Card.Body>
                <Card.Footer>
                    <button onClick={() => {navigate("/organization/broadcasts")}} style={{background: 'none', color: '#153470', border: 'none', borderRight: '1px solid lightgray'}} >View more</button>
                    <button onClick={() => {navigate("/organization/broadcasts/new")}} style={{background: 'none', color: '#153470', border: 'none'}} >Add broadcast</button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Broadcasts;