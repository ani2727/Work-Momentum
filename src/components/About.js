import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-us-container">
      <section className="hero">
        <h1>About Us</h1>
        <p>
          We are an IT services and products company committed to delivering the
          best solutions for our clients.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          To provide innovative and effective IT solutions that help businesses
          achieve their goals.
        </p>
      </section>

      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          To be a global leader in IT services and products, recognized for our
          customer-centric approach and quality solutions.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>Custom Software Development</li>
          <li>IT Consulting</li>
          <li>Cloud Solutions</li>
          <li>Data Analytics</li>
          <li>Cybersecurity</li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src="/Abhi.jpg" alt="Team Member 1" />
            <h3>Abhi</h3>
            <p>CEO</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
