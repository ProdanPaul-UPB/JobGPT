import Broadcast from "../../Components/Broadcast";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Broadcasts = () => {
    return (
        <Col sm={6}>
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
                    <button style={{background: 'none', color: '#153470', border: 'none'}} >View more</button>
                </Card.Footer>
            </Card>
        </Col>
    );
}

export default Broadcasts;