const JobOffer = ({ jobOffer }) => {
    return (
        <div className="job-offer">
            <h2>{jobOffer.title}</h2>
            <p>{jobOffer.description}</p>
            <p>{jobOffer.requirements}</p>
            <p>{jobOffer.salary}</p>
            <p>{jobOffer.location}</p>
            <p>{jobOffer.contact}</p>
        </div>
    );
}

export default JobOffer;