import React from "react";
import Products from "../Products/Products";
import Careers from "../Careers/Careers";
import Services from "../Services/Services";
import About from "../About/About"
import "./Home.css"

const Home = () => {
  return (
    <div className="home">
      {/* <HomeHeader /> */}
      {/* <Statistics /> */}
      <Services/>
        <h1 className="our-products-header">Our Products</h1>
      <Products />
      <Careers/>
      <About/>
    </div>
  );
};

export default Home;
