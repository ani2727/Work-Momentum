import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGlobeAsia } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { JobsData } from "../../utils/JobsData";
import "./Careers.css";
const Careers = () => {
  const [jobSearchInput, setJobSearchInput] = useState("");
  const jobResults = JobsData.filter((eachItem) =>
    eachItem.jobTitle.toLowerCase().includes(jobSearchInput)
  );
  const updatedJobResults = jobResults.slice(0, 4);
  return (
    <div className="careers-home">
      <section className="careers-top-section">
        <div className="careers-top-section-left-part">
          <p className="careers-text">CAREERS</p>
          <h1 className="careers-heading">
            Innovate, from<br></br>
            <span>Anywhere.</span>
          </h1>
          <h3 className="careers-description">
            Work with household names like Google, Pinterest, and Rolls-Royce,
            as well as game-changing startups that are shaping the future. We
            are a remote-first company that connects you to global
            opportunities.
          </h3>
          <NavLink to="/contact-us">
            <button className="explore-jobs-button">
              Explore Job Opportunities
              <FaArrowRightLong className="arrow-icon" />
            </button>
          </NavLink>
        </div>
        <div className="careers-top-section-right-part">
          <img
            alt="world-map"
            className="careers-image"
            src="/career-world.svg"
          />
        </div>
      </section>
      <section className="careers-mid-section">
        <h1>Why WorkMomentum?</h1>
        <p>
          Join a company where new ideas are always welcome. Together, let’s
          drive innovation and redefine the tech landscape.
        </p>
        <div className="laptop-image-container">
          <img
            className="laptops-image"
            alt="workspace"
            src="/laptop-undraw.svg"
          />
        </div>
        <div className="why-workmomentum-container">
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{ height: "2rem", width: "2rem", color: "#2f2ff3" }}
              />
            </div>
            <div className="why-card-details">
              <h3>Work From Anywhere</h3>
              <p>
                Your workspace, your choice. Be a digital nomad if you like!
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{ height: "2rem", width: "2rem", color: "#2f2ff3" }}
              />
            </div>
            <div className="why-card-details">
              <h3>Diverse Network</h3>
              <p>Connect with 4,000+ professionals across 50+ countries.</p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{ height: "2rem", width: "2rem", color: "#2f2ff3" }}
              />
            </div>
            <div className="why-card-details">
              <h3>Team Up with the Best</h3>
              <p>
                Join forces with the top 1% of professionals in your field.{" "}
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{ height: "2rem", width: "2rem", color: "#2f2ff3" }}
              />
            </div>
            <div className="why-card-details">
              <h3>Upskill Avenues</h3>
              <p>
                Thrive with mentorship, training, and comprehensive courses.{" "}
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{ height: "2rem", width: "2rem", color: "#2f2ff3" }}
              />
            </div>
            <div className="why-card-details">
              <h3>Flexible Schedules</h3>
              <p>Claim your autonomy. Set your own schedule. </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{ height: "2rem", width: "2rem", color: "#2f2ff3" }}
              />
            </div>
            <div className="why-card-details">
              <h3>Growth Possibilities</h3>
              <p>
                As we rise, so can you. That's the story of our CIO, VP of
                Talent, and hundreds of others at BairesDev.{" "}
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{ height: "2rem", width: "2rem", color: "#2f2ff3" }}
              />
            </div>
            <div className="why-card-details">
              <h3>Vacations & Holidays</h3>
              <p>
                Refresh with 2 weeks of paid vacation and get all your local
                holidays off.{" "}
              </p>
            </div>
          </div>
          <div className="why-card">
            <div className="why-card-icon">
              <FaGlobeAsia
                style={{
                  height: "1.75rem",
                  width: "1.75rem",
                  color: "#2f2ff3",
                }}
              />
            </div>
            <div className="why-card-details">
              <h3>Innovative Global Projects</h3>
              <p>
                We help 100+ industry sectors seeking game-changing tech
                solutions. Be part of those exciting solutions!{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="careers-jobs-section">
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
          {updatedJobResults.map((eachItem) => (
            <JobItemCard data={eachItem} />
          ))}
        </div>
        <Link className="explore-more" to="/job-opportunities">
          Explore More Jobs
        </Link>
      </section>
      <section className="careers-bottom-section">
        <div className="first-part">
          <h1>We don't just fill vacancies.</h1>
          <p>
            We go beyond traditional hiring. By spotlighting your strengths and
            interests, we can connect you to your ideal role.
          </p>
          <p>
            Don't see your dream job listed? Fill out an open application. We're
            always looking for top talent!
          </p>

          <Link to="/contact-us">
            <button>Send an Open Application</button>
          </Link>
        </div>
        <img
          className="careers-bottom-section-image"
          src="/person-laptop.avif"
          alt="bottom-section"
        />
      </section>
    </div>
  );
};

export default Careers;
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
