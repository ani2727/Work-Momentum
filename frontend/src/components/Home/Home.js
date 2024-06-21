import React from "react";
import HomeHeader from "./HomeHeader";
import ServicesCards from "../Services/ServicesCards";
import Products from "../Products/Products";
import Statistics from "../Statistics/Statistics";
import Careers from "../Careers/Careers";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <Statistics />
      <ServicesCards />
      <Products />
      <Careers/>
    </div>
  );
};

export default Home;
