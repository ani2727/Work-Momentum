import React from "react";
import HomeHeader from "./HomeHeader";
import Statistics from "../Statistics/Statistics";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <Statistics />
      <Services />
    </div>
  );
};

export default Home;
