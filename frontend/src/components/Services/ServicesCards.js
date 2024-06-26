import React, { useState, useEffect } from "react";
import styles from "./ServicesCards.module.css";
import ServicesInfo from "../../utils/ServicesInfo";
import { Link } from "react-router-dom";

function ServicesCards() {
  const [servicesDetails, setServicesDetails] = useState([]);
  useEffect(() => {
    const data = ServicesInfo();
    setServicesDetails(data);
  }, []);
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.servicesHeading}>Our Services</h1>
      <hr className={styles.servicesHeadingHrLine} />
      <p className={styles.servicesDescription}>
        Work Momentum is a software company that delivers services based on user
        requests. They provide end-to-end software development services, ranging
        from consultancy and ideation of your ideas and product strategy to
        designing UX/UI mockups, development, testing, launch, support, and
        maintenance. Work Momentum is a long-term partner you can entrust to
        work on your product at any stage.
      </p>

      <ul>
        {servicesDetails.map((eachService, index) => (
          <Link
            to={`/services/${eachService.path}`}
            key={eachService.id}
            className={styles.servicesLinkContainer}
          >
            <li
              className={`${styles.serviceProductCardContainer} ${
                index % 2 === 0 ? styles.leftImage : styles.rightImage
              }`}
            >
              <div className={styles.servicesImageContainer}>
                <img
                  src={eachService.imageUrl}
                  alt={eachService.serviceType}
                  className={styles.servicesImage}
                />
              </div>
              <div className={styles.serviceProductDetailsContainer}>
                <h1 className={styles.serviceProductDetailsHeading}>
                  {eachService.title}
                </h1>
                <p className={styles.serviceProductDetailsDescription}>
                  {eachService.description}
                </p>
                <button className={styles.serviceProductDetailsButton}>
                  Learn More
                </button>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ServicesCards;
