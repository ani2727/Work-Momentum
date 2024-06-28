import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./JobOpportunities.css";
import { JobsData } from "../../utils/JobsData";
const JobOpportunities = () => {
  const [jobSearchInput, setJobSearchInput] = useState("");
  const jobResults = JobsData.filter((eachItem) =>
    eachItem.jobTitle.toLowerCase().includes(jobSearchInput)
  );
  // console.log(jobResults);
  return (
    <section className="job-opportunities-home">
      <h1 className="heading">Explore our Open Positions</h1>
      <div className="job-search-container">
        <FiSearch style={{ height: "1.5rem", width: "1.5rem" }} />
        <input
          className="job-search-input"
          placeholder="Job Title, keyword"
          value={jobSearchInput}
          onChange={(e) => setJobSearchInput(e.target.value)}
        />
      </div>
      <div className="job-search-results-container">
        {jobResults.map((eachItem) => (
          <JobItemCard data={eachItem} />
        ))}
      </div>
    </section>
  );
};

export default JobOpportunities;

const JobItemCard = (props) => {
  const { data } = props;
  return (
    <div className="job-item-card">
      <div className="top-section">
        <p className="title">{data.jobTitle}</p>
        <p className="description">{data.jobDescription}</p>
      </div>
      <div className="bottom-section">
        <p>{data.employmentType}</p>
        <button>Apply Now</button>
      </div>
    </div>
  );
};
