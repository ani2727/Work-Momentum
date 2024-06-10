import "./Home.css";

const Home = () => {
  return (
    <div className="bg-cont">
      <section className="hero-section">
        <h1>
          <i>
            <span>Transform your</span>
            <br />
            <span className="hewr">Ideas into Reality</span>
          </i>
        </h1>
        <div className="wrapper">
          <h2 className="static-txt">Expert consultation for </h2>
          <ul class="dynamic-txts">
            <li>
              <span>Hosting</span>
            </li>
            <li>
              <span>Mobile Apps</span>
            </li>
            <li>
              <span>Web apps</span>
            </li>
            <li>
              <span>Frameworks</span>
            </li>
          </ul>
        </div>
        <div className="buttons-container">
          <button className="demo-btn">Book Demo</button>
          <button className="explore-btn">Explore</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
