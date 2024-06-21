import React from "react";
import styles from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faNodeJs,
  faPython,
  faJava,
  faPhp,
  faJs,
  faAws,
  faDocker,
  faGithub,
  faGit,
  faGoogle,
  faMicrosoft,
  faJsSquare,
  faJenkins,
  faLinux,
  faHtml5,
  faCss3Alt,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";

import {
  faDatabase,
  faServer,
  faTools,
  faBox,
  faProjectDiagram,
  faVial,
  faFire,
  faSearch,
  faCog,
  faCloud,
  faWind,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

import { MdReadMore } from "react-icons/md";

import ServicesCards from "./ServicesCards";
import { Link } from "react-router-dom";

const servicesData = [
  {
    icon: "Code",
    title: "Custom Software Development",
    description:
      "Create tailored software solutions that meet specific business needs, incorporating both front-end and back-end technologies.",
  },
  {
    icon: "Mobile",
    title: "Mobile App Development",
    description:
      "Develop high-performance, secure mobile applications for both iOS and Android platforms.",
  },
  {
    icon: "CheckCircle",
    title: "QA and Testing",
    description:
      "Guarantee the robustness and reliability of technology products through comprehensive manual and automated QA processes.",
  },
  {
    icon: "Brain",
    title: "AI and Data Science",
    description:
      "Leverage AI and data science to uncover insights, drive decisions, and develop intelligent solutions using advanced data engineering principles.",
  },
  {
    icon: "PaintBrush",
    title: "UX/UI Design",
    description:
      "Design intuitive and engaging user experiences for websites and mobile applications, focusing on usability and aesthetics.",
  },
  {
    icon: "Server",
    title: "Platform and Infrastructure",
    description:
      "Ensure scalable and resilient applications with robust platform and infrastructure solutions, including cybersecurity and DevOps practices.",
  },
];

const Services = () => {
  return (
    <div>
      <div className={styles.servicesHeaderContainer}>
        <div className={styles.servicesHeaderContainerContent}>
          <h1 className={styles.servicesHeaderContainerHeading}>
            Scale your software development efforts.
          </h1>
          <h1
            className={`${styles.servicesHeaderContainerHeading} ${styles.servicesHeaderContainerHeadingColor}`}
          >
            Effortlessly.
          </h1>
          <p className={styles.servicesHeaderContainerDescription}>
            We deliver high quality software with top-tier nearshore talent.
          </p>
          <Link to="/contact-us" className={styles.connectButton}>
            Let's Connect
          </Link>
        </div>
      </div>
      <div className={styles.servicesContainer}>
        <h1 className={styles.servicesHeaderContainerHeading}>
          Software development services.
        </h1>
        <h1 className={styles.servicesHeaderContainerHeading}>
          From Concept To Completion.
        </h1>
        <div className={styles.services}>
          {servicesData.map((service, index) => (
            <div className={styles.serviceItem} key={index}>
              <div
                className={`${styles.serviceIcon} ${
                  styles[`serviceIcon${service.icon}`]
                }`}
              ></div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.techStackContainer}>
        <div className={styles.stackDescription}>
          <h2>What's Our Stack?</h2>
          <p>
            Leverage over 100 software engineers to build your digital products
            in whatever tech stack you need.
          </p>
        </div>
        <div className={styles.stackGrid}>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faReact} className={styles.icon} />
            <span>React</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faNodeJs} className={styles.icon} />
            <span>Node.js</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faPython} className={styles.icon} />
            <span>Python</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faJava} className={styles.icon} />
            <span>Java</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faPhp} className={styles.icon} />
            <span>PHP</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faJs} className={styles.icon} />
            <span>JavaScript</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faAws} className={styles.icon} />
            <span>AWS</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faDocker} className={styles.icon} />
            <span>Docker</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            <span>GitHub</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faGit} className={styles.icon} />
            <span>Git</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faGoogle} className={styles.icon} />
            <span>Google Cloud</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faMicrosoft} className={styles.icon} />
            <span>Azure</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
            <span>MongoDB</span>
          </div>

          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
            <span>PostgreSQL</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faDatabase} className={styles.icon} />
            <span>MySQL</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faVial} className={styles.icon} />
            <span>Jest</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faCss3Alt} className={styles.icon} />
            <span>Sass</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faFire} className={styles.icon} />
            <span>Firebase</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faReact} className={styles.icon} />
            <span>Redux</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faSearch} className={styles.icon} />
            <span>ElasticSearch</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faCog} className={styles.icon} />
            <span>Rust</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faReact} className={styles.icon} />
            <span>Next.js</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faCloud} className={styles.icon} />
            <span>Vercel</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faBootstrap} className={styles.icon} />
            <span>Bootstrap</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faWind} className={styles.icon} />
            <span>Tailwind CSS</span>
          </div>

          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faTools} className={styles.icon} />
            <span>Webpack</span>
          </div>
          <div className={styles.stackItem}>
            <FontAwesomeIcon icon={faJsSquare} className={styles.icon} />
            <span>TypeScript</span>
          </div>

          <div className={styles.stackItem}>
            <MdReadMore className={styles.stackManyMoreIcon} />
            <span>Many more...</span>
          </div>
        </div>
      </div>

      <ServicesCards />

      <div className={styles.FooterContainer}>
        <div className={styles.FooterTextSection}>
          <h1>Want to accelerate software development at your company?</h1>
          <p>See how we can help.</p>
          <a href="/contact-us" className={styles.FooterScheduleButton}>
            Schedule a Call
          </a>
        </div>
        <div className={styles.FooterImageSection}>
          <img
            src="https://bytessolutions.in/images/gen/homemenu.jpg"
            alt="Services"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
