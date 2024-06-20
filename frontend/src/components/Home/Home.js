import React from "react";
import HomeHeader from "./HomeHeader";
import Statistics from "../Statistics/Statistics";
import ServicesCards from "../Services/ServicesCards";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <Statistics />
      <ServicesCards />
      <Products />
    </div>
  );
};

export default Home;
