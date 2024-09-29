import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <img className="abs-line" src="/images/Abstract Line.png" alt="" />
        <div className="unlock">
          <div className="current">
            <img src="\images\Icon.png" alt="icon" />
          </div>
          <span>Unlock</span>
          <h1>Your Creative Potential</h1>
        </div>
        <h2>with Online Design and Development Courses.</h2>
        <p>Learn from Industry Experts and Enhance Your Skills.</p>
        <button className="explore-btn">Explore Courses</button>
        <button className="viewprice-btn">View Pricing</button>
      </div>
    </div>
  );
};

export default Home;
