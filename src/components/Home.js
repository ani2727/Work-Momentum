import { useEffect, useRef } from "react";
import "./Home.css";
import Typed from "typed.js";
import Cards from "./Cards";
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
    <div>
      <div className="home-header">
        <section className="hero-section">
          <h1 className="heading">
            <i>
              <span>Transform your</span>
              <br />
              <span className="heading-2">Ideas into Reality</span>
            </i>
          </h1>
          <div className="wrapper">
            <h2 className="static-txt">
              Expert consultation for <span className="dynamic-txts" ref={el} />{" "}
            </h2>
          </div>
          <div className="buttons-container">
            <button className="demo-btn">Book Demo</button>
            <button className="explore-btn">Explore</button>
          </div>
        </section>
        <div className="image-container">
          <img
            src="https://rb.gy/4u9zpr"
            className="hero-image"
            alt="hero-section"
          />
        </div>
      </div>
      <div className="home-testimonials">
        <h1>Testimonials</h1>
        <Cards />
      </div>
    </div>
  );
};

export default Home;
