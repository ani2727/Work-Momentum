import React from "react";
import styles from "./SoftwareDevelopmentCards.module.css";
import { Link } from "react-router-dom";

const servicesData = [
  {
    icon: "Web",
    title: "Web Development",
    description:
      "Build responsive and dynamic websites using the latest technologies to ensure high performance and user engagement.",
    path: "web-development",
  },
  {
    icon: "Mobile",
    title: "Mobile App Development",
    description:
      "Develop high-performance, secure mobile applications for both iOS and Android platforms.",
    path: "app-development",
  },
  {
    icon: "Cloud",
    title: "Cloud and DevOps",
    description:
      "Deploy, manage, and optimize cloud infrastructure for scalable solutions, and implement DevOps practices to enhance collaboration and automate workflows.",
    path: "cloud-devops",
  },
  {
    icon: "Code",
    title: "Custom Software Development",
    description:
      "Create tailored software solutions that meet specific business needs, incorporating both front-end and back-end technologies.",
    path: "custom-software-development",
  },

  {
    icon: "CheckCircle",
    title: "QA and Testing",
    description:
      "Guarantee the robustness and reliability of technology products through comprehensive manual and automated QA processes.",
    path: "qa-and-testing",
  },
  {
    icon: "Brain",
    title: "AI and Data Science",
    description:
      "Leverage AI and data science to uncover insights, drive decisions, and develop intelligent solutions using advanced data engineering principles.",
    path: "ai-and-data-science",
  },
  {
    icon: "PaintBrush",
    title: "UX/UI Design",
    description:
      "Design intuitive and engaging user experiences for websites and mobile applications, focusing on usability and aesthetics.",
    path: "ux-ui-design",
  },
  {
    icon: "Server",
    title: "Platform and Infrastructure",
    description:
      "Ensure scalable and resilient applications with robust platform and infrastructure solutions, including cybersecurity and DevOps practices.",
    path: "platform-and-infrastructure",
  },
  {
    icon: "Link",
    title: "API Development and Integration",
    description:
      "Design and develop robust APIs for seamless integration with external services, ensuring secure and efficient data exchange between different systems.",
    path: "api-development-integration",
  },
];

function SoftwareDevelopmentCards() {
  return (
    <div className={styles.services}>
      {servicesData.map((service, index) => (
        <Link
          to={`/services/${service.path}`}
          className={styles.serviceItem}
          key={index}
        >
          <div>
            <div
              className={`${styles.serviceIcon} ${
                styles[`serviceIcon${service.icon}`]
              }`}
            ></div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default SoftwareDevelopmentCards;
