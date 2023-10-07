const University = ({name, domain, photo}) => {
    return (
        <div style={{border: "1px solid lightgray", marginBottom: '30px'}}>
            <img style={{height: "100px"}} src={photo} alt="university"/>
            <p>{name}</p>
            <p>{domain}</p>
        </div>
    )
}

export default University;