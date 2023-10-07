import "./Broadcast.scss";

import { AiOutlineLike } from "react-icons/ai";

const Broadcast = ({avatar, name, title, content, time, upvotes, category}) => {
    return (
        <div className={"broadcast-wrapper"}>
            <div className={"avatar-box"}>
            </div>
            <div className={"content-box"}>
                <div className={"content-top-row"}>
                    <div>
                        <p className={"content-uploader"}>Posted by {name}
                            <span> · </span>
                            <span style={{fontWeight: "bold"}}>{title}</span>
                            <span> · </span>
                            <span style={{color: 'white', borderRadius: '5px', fontSize: '15px', backgroundColor: 'orange', padding: "0px 5px 0px 5px"}}>{category}</span>
                        </p>
                    </div>
                    <p className={"content-time"}>{time}</p>
                </div>

                <div className={"content-bottom-row"}>
                    <p>{content}</p>
                    <p>
                        <AiOutlineLike />{upvotes}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Broadcast;