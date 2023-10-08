import {AiOutlineUsergroupAdd} from "react-icons/ai";

const EduOffer = ({avatar, name, org, title, content, time, applicants, category}) => {
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
                    <p>
                        <span style={{fontWeight: 'bold'}}>{org}</span>
                        <span> · </span>
                        {content}
                    </p>
                    <p>
                        <AiOutlineUsergroupAdd />{applicants}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default EduOffer;