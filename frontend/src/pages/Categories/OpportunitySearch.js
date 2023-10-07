import {useParams} from "react-router-dom";

import './OpportunitySearch.scss';
import Form from "react-bootstrap/Form";

const OpportunitySearch = () => {
    const {cat} = useParams();
    return (
        <div className={"wrapper"}>
            <h1>{cat}</h1>

            <h1 className={'page_title'}>Descoperă oportunităţi de angajare</h1>

            <div className="header-content__search">
                <Form.Control placeholder="Caută nume de joburi sau cuvinte cheie" className={"search-field"} />
                <button className={"search-button"}>Caută</button>
            </div>

        </div>
    )
}

export default OpportunitySearch;