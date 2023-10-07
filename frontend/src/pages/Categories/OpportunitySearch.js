import './OpportunitySearch.scss';
import Form from "react-bootstrap/Form";

const OpportunitySearch = () => {

    return (
        <div className={"wrappers"}>

            <h1 className={'page_title'}>Descoperă oportunităţi</h1>

            <div className="header-content__search">
                <Form.Control placeholder="Caută nume de joburi sau cuvinte cheie" className={"search-field"} />
                <button className={"search-button"}>Caută</button>
            </div>

        </div>
    )
}

export default OpportunitySearch;