import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./ServiceDetails.module.css";
import ServicesInfo from "../../utils/ServicesInfo";

const ServiceDetailsHeader = ({ details }) => {
  return (
    <div className={styles.serviceHeaderContainer}>
      <div className={styles.servicesImageContainer}>
        <img
          src={details.imageUrl}
          alt={details.serviceType}
          className={styles.servicesImage}
        />
      </div>
      <div className={styles.serviceProductDetailsContainer}>
        <h1 className={styles.serviceProductDetailsHeading}>{details.title}</h1>
        <p className={styles.serviceProductDetailsDescription}>
          {details.description}
        </p>
        <button className={styles.serviceProductDetailsButton}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

const ServiceDetailsContent = ({ details }) => {
  return (
    <ul className={`${styles.servicesWeOfferedConaitner} fade-in`}>
      {details.map((eachItem, index) => (
        <li key={index} className={styles.serviceOfferdItem}>
          <h1 className={styles.serviceOfferdItemHeading}>{eachItem.name}</h1>
          <p className={styles.serviceOfferdItemDescription}>
            {eachItem.description}
          </p>
        </li>
      ))}
    </ul>
  );
};

function ServiceDetails() {
  const location = useLocation();
  const currentPath = location.pathname;
  const lastSegment = currentPath.substring(currentPath.lastIndexOf("/") + 1);

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const services = ServicesInfo();
    const filteredData = services.find((each) => each.path === lastSegment);
    setDetails(filteredData);
  }, [lastSegment]);

  return (
    <div className={styles.serviceDetailsContainer}>
      {details && <ServiceDetailsHeader details={details} />}
      <div className={styles.servicesWeOfferedHeadingContainer}>
        <hr className={styles.servicesWeOfferedHeadingContainerHrLine} />
        <h1 className={styles.servicesWeOfferedHeading}>Services We Offer</h1>
        <hr className={styles.servicesWeOfferedHeadingContainerHrLine} />
      </div>
      {details && <ServiceDetailsContent details={details.servicesOffered} />}
    </div>
  );
}

export default ServiceDetails;
