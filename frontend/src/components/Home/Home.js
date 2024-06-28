import React from "react";
import HomeHeader from "./HomeHeader";
import Products from "../Products/Products";
import Careers from "../Careers/Careers";
import About from "../About/About";
import "./Home.css";
import SoftwareDevelopmentCards from "../Services/SoftwareDevelopmentCards";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <div className="servicesContainer">
        <h1 className="servicesHeading">Our Services</h1>
        <hr className="servicesHeadingHrLine" />
        <p className="servicesDescription">
          Work Momentum is a software company that delivers services based on
          user requests. They provide end-to-end software development services,
          ranging from consultancy and ideation of your ideas and product
          strategy to designing UX/UI mockups, development, testing, launch,
          support, and maintenance. Work Momentum is a long-term partner you can
          entrust to work on your product at any stage.
        </p>
        <SoftwareDevelopmentCards />
      </div>
      <h1 className="home-products-header">Our Products</h1>
      <hr className="productsHeadingHrLine"></hr>
      <div className="home-products">
        <Products />
      </div>

      <Careers />
      <About />
    </div>
  );
};

export default Home;
