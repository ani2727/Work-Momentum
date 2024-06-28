import React from "react";
import HomeHeader from "./HomeHeader"
import Products from "../Products/Products";
import Careers from "../Careers/Careers";
import About from "../About/About"
import "./Home.css"
import ServicesCards from "../Services/ServicesCards";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <ServicesCards/>
      <h1 className="home-products-header">Our Products</h1>
      <hr className="productsHeadingHrLine"></hr>
      <div className="home-products">
        <Products/>
      </div>
      
      <Careers/>
      <About/>
    </div>
  );
};

export default Home;
