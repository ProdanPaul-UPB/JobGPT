import University from "./University";

import rectorat from "../../static/rectorat.jpg";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Universities = () => {
    return (
        <Row>
            <Col sm={3}>
                <University name="Universitatea politehnică din Bucureşti" domain="Programare & Hardware" photo={rectorat}/>
            </Col>
            <Col sm={3}>
                <University name="Universitatea politehnică din Bucureşti" domain="Programare & Hardware" photo={rectorat}/>
            </Col>
            <Col sm={3}>
                <University name="Universitatea politehnică din Bucureşti" domain="Programare & Hardware" photo={rectorat}/>
            </Col>
            <Col sm={3}>
                <University name="Universitatea politehnică din Bucureşti" domain="Programare & Hardware" photo={rectorat}/>
            </Col>
            <Col sm={3}>
                <University name="Universitatea politehnică din Bucureşti" domain="Programare & Hardware" photo={rectorat}/>
            </Col>
            <Col sm={3}>
                <University name="Universitatea politehnică din Bucureşti" domain="Programare & Hardware" photo={rectorat}/>
            </Col>
        </Row>
    )
}

export default Universities;