import "./HeaderSection.scss";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const HeaderSection = () => {
    return (
        <div className="header-content">
            <div className="header-content__title">

                <h1>Caută comunităţi pentru pasiunile <span>tale</span></h1>

            </div>
            <div className="header-content__search">
                <Form.Control placeholder="Caută nume de joburi sau cuvinte cheie" className={"search-field"} />
                <button className={"search-button"}>Caută</button>
            </div>

        </div>
    )
}

export default HeaderSection;