import "./Community.scss";

const Community = ({ name, photo, description }) => {
    return (
        <div style={{background: `url(${photo})`}} className="cardz">
            <div className="content">
                <h2 className="title">{name}</h2>
                <p className="copy">{description}</p><button className="btn">Vizitează</button>
            </div>
        </div>
    );
}

export default Community;