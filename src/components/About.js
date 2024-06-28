import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <section className="hero">
        <p>
          We are an IT services and products company committed to delivering the
          best solutions for our clients.
        </p>
      </section>

      <section className="mission">
        <img src="/mission.svg" alt="mission" className="mission-image" />
        <div className="mission-details">
          <h1 className="mission-heading">Our Mission</h1>
          <p className="mission-desc">
            To be the trusted partner for businesses, known for our commitment
            to quality and innovation. We tailor solutions to meet unique client
            needs, driving success and growth.
          </p>
        </div>
      </section>

      <section className="vision">
        <div className="vision-details">
          <h1 className="vision-heading">Our Vision</h1>
          <p className="vision-desc">
            To be a global leader in IT services and products, recognized for
            our customer-centric approach and quality solutions.
          </p>
        </div>
        <img src="/vision.svg" alt="mission" className="vision-image" />
      </section>

      <section className="services">
        <h1>Our Services</h1>
        <ul className="services-cont">
          <li>Custom Software Development</li>
          <li>IT Consulting</li>
          <li>App Development</li>
          <li>Web Development</li>
        </ul>
      </section>

      <section className="team">
        <h1>Meet Our Team</h1>
        <div className="team-members">
          <div className="team-member">
            <img src="/Abhi.jpg" alt="Team Member 1" />
            <h3>Abhi</h3>
            <p>Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
