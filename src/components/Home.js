import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./Home.css";

const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Web Apps", "Mobile Apps"],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <section className="hero-section">
      <h1 className="heading">
        <i>
          <span>Transform your</span>
          <br />
          <span className="heading2">Ideas into Reality</span>
        </i>
      </h1>
      <div className="wrapper">
        <h2 className="static-txt">
          Expert consultation for{" "}
          <i>
            {" "}
            <span className="dynamic-txts" ref={el}></span>
          </i>
        </h2>
      </div>
      <div className="buttons-container">
        <button className="demo-btn">Book Demo</button>
        <button className="explore-btn">Explore</button>
      </div>
      <div></div>
    </section>
  );
};

export default Home;
