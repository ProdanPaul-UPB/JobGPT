import {useParams} from "react-router-dom";
import {Form} from "react-bootstrap";

import Communities from "../../components/Communities/Communities";

const Careers = () => {

    const {career} = useParams();

    const domain =
        career === "design" ? "Grafic"
        : career === "tech" ? "Programării"
            : career === "business" ? "Digital Marketing"
            : career === "videophoto" ? "Video & Fotografie"
                    : career === "med" ? "Medicină / Big Pharma"
                    : "Muzică & Audio"

    return (
        <div>
            <h2 style={{marginTop: '5rem', marginBottom: '5rem'}}>Explorează oportunităţile din domeniul {domain}</h2>

            <div className="header-content__search">
                <Form.Control placeholder="Caută nume de organizaţii sau cuvinte cheie" className={"search-field"} />
                <button className={"search-button"}>Caută</button>
            </div>

            <Communities />

            <div style={{marginBottom: '5rem'}}></div>

        </div>
    )
}

export default Careers;