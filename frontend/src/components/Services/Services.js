import React from "react";
import styles from "./Services.module.css";

const servicesDetails = [
  {
    id: 1,
    imageUrl: "https://rb.gy/sek2qt",
    serviceType: "Web Development",
    description:
      "At Work Momentum, we specialize in crafting exceptional web experiences tailored to your unique needs. Our team of experienced web developers utilizes the latest technologies and best practices to create websites that not only look stunning but also perform seamlessly across all devices. From simple static sites to complex web applications, we have the expertise to bring your vision to life. Whether you're looking to launch a new website or revamp an existing one, we're here to help you every step of the way.",
  },
  {
    id: 2,
    imageUrl: "https://www.isquarebs.com/img/web-app-development-choose.svg",
    serviceType: "App Development",
    description:
      "Transform your ideas into innovative mobile applications with Work Momentum. Our dedicated team of app developers is passionate about creating user-friendly and feature-rich apps that resonate with your target audience. Whether you're targeting iOS, Android, or cross-platform solutions, we have the skills and experience to build the perfect app for your business. From initial concept to final deployment, we'll work closely with you to ensure your app exceeds your expectations and drives results.",
  },
  {
    id: 3,
    imageUrl:
      "https://www.betasofttechnology.com/wp-content/uploads/2022/03/aws-banner.png",
    serviceType: "Cloud Computing",
    description:
      "Harness the power of the cloud with Work Momentum's AWS and DevOps services. Our team of certified AWS experts can help you leverage Amazon Web Services to build scalable, secure, and reliable cloud solutions that meet your business needs. Whether you're looking to migrate to the cloud, optimize your existing AWS infrastructure, or implement DevOps best practices, we've got you covered. With our expertise in automation, continuous integration, and continuous delivery, we'll streamline your development process and accelerate your time to market. Let us be your trusted partner in the cloud journey.",
  },
];

const Services = () => {
  return (
    <div>
      <div className={styles.servicesContainer}>
        <h1 className={styles.servicesHeading}>Our Services</h1>
        <hr className={styles.servicesHeadingHrLine} />
        <p className={styles.servicesDescription}>
          Work Momentum is a software company that delivers services based on
          user requests. They provide end-to-end software development services,
          ranging from consultancy and ideation of your ideas and product
          strategy to designing UX/UI mockups, development, testing, launch,
          support, and maintenance. Work Momentum is a long-term partner you can
          entrust to work on your product at any stage.
        </p>

        <ul>
          {servicesDetails.map((eachService, index) => (
            <li
              key={eachService.id}
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
                  {eachService.serviceType}
                </h1>
                <p className={styles.serviceProductDetailsDescription}>
                  {eachService.description}
                </p>
                <button className={styles.serviceProductDetailsButton}>
                  Learn More
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Services;
