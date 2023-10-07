import Broadcast from "../Components/Broadcast";
import Container from "react-bootstrap/Container";

import { AiOutlinePlus } from "react-icons/ai";

import {useNavigate} from "react-router-dom";

const ListBroadcasts = ({ broadcasts, loading, error }) => {

    const navigate = useNavigate();

    return (
        <div style={{width: '100%'}} className="list-broadcasts">
            <Container>
                <div style={{display: 'flex', justifyContent: 'space-between', border: 'none'}}>
                    <h1 style={{margin: "2rem 0 2rem 0", textAlign: "left"}}>My Broadcasts</h1>
                    <button onClick={() => {navigate("new")}} style={{border: 'none', background: 'none', color: '#153470', borderRadius: '10px'}} >
                        <AiOutlinePlus size={40} />
                    </button>
                </div>

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
            </Container>
        </div>
    )
}

export default ListBroadcasts;