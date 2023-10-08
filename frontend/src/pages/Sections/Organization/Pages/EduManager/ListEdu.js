import EduOffer from "../Components/EduOffer";
import Container from "react-bootstrap/Container";
import {AiOutlinePlus} from "react-icons/ai";
import JobOffer from "../Components/JobOffer";

import {useNavigate} from "react-router-dom";

const ListEdu = () => {

    const navigate = useNavigate();

    return (
        <div style={{width: '100%'}} className="list-JobOffers">
            <Container>
                <div style={{display: 'flex', justifyContent: 'space-between', border: 'none'}}>
                    <h1 style={{margin: "2rem 0 2rem 0", textAlign: "left"}}>My Education Offers</h1>
                    <button onClick={() => {navigate("new")}} style={{border: 'none', background: 'none', color: '#153470', borderRadius: '10px'}} >
                        <AiOutlinePlus size={40} />
                    </button>
                </div>

                <EduOffer name={"Paul"}
                          title={"Bachelor's Degree in Computer Science"}
                          org={"Universitatea Politehnica Timisoara"}
                          time={"7 mins ago"}
                          content={"lorem ipsum dolor sit amet..."}
                          category={"Programming & Tech"}
                          applicants={"15"} />
            </Container>
        </div>
    );
}

export default ListEdu;