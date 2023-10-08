import Container from "react-bootstrap/Container";
import { AiOutlinePlus } from "react-icons/ai";
import JobOffer from "../Components/JobOffer";

import { useNavigate } from "react-router-dom";

const ListStudentJobs = () => {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%" }} className="list-JobOffers">
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            border: "none",
          }}
        >
          <h1 style={{ margin: "2rem 0 2rem 0", textAlign: "left" }}>
            My Job Offers
          </h1>
        </div>

        <JobOffer
          name={"TechCorp"}
          title={"Software Engineer"}
          org={"InnovateTech Solutions"}
          time={"1 mins ago"}
          content={"We are seeking a talented software engineer to join our team and work on cutting-edge projects."}
          category={"Information Technology"}
          applicants={"15"}
        />
        <JobOffer
          name={"Global Enterprises"}
          title={"Marketing Manager"}
          org={"MarketPro"}
          time={"2 mins ago"}
          content={"You will develop and execute marketing strategies, manage campaigns, and analyze performance to drive business growth."}
          category={"Marketing"}
          applicants={"11"}
        />
        <JobOffer
          name={"Paul"}
          title={"Junior Software Developer"}
          org={"Microsoft"}
          time={"7 mins ago"}
          content={"lorem ipsum dolor sit amet..."}
          category={"Design"}
          applicants={"6"}
        />
      </Container>
    </div>
  );
};

export default ListStudentJobs;
