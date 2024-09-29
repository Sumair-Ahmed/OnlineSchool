import "./Benefit.css";

const Benefit = () => {
  return (
    <div className="benefit">
      <h1>Benefits</h1>
      <div className="benefit-desc">
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button>View All</button>
      </div>
      <div className="benefit-cards">
        <div className="benefit-card">
          <h1>01</h1>
          <h2>Flexible Learning Schedule</h2>
          <p>
            Fit your coursework around your existing commitments and
            obligations.
          </p>
          <div className="custom">
            <div className="custom-btn">
              <img src="/images/customBtn.png" alt="" />
            </div>
          </div>
        </div>
        <div className="benefit-card">
          <h1>02</h1>
          <h2>Expert Instruction</h2>
          <p>
            Learn from industry experts who have hands-on experience in design
            and development.
          </p>
          <div className="custom">
            <div className="custom-btn">
              <img src="/images/customBtn.png" alt="" />
            </div>
          </div>
        </div>
        <div className="benefit-card">
          <h1>03</h1>
          <h2>Diverse Course Offerings</h2>
          <p>
            Explore a wide range of design and development courses covering
            various topics.
          </p>
          <div className="custom">
            <div className="custom-btn">
              <img src="/images/customBtn.png" alt="" />
            </div>
          </div>
        </div>
        <div className="benefit-card">
          <h1>04</h1>
          <h2>Updated Curriculum</h2>
          <p>
            Access courses with up-to-date content reflecting the latest trends
            and industry practices.
          </p>
          <div className="custom">
            <div className="custom-btn">
              <img src="/images/customBtn.png" alt="" />
            </div>
          </div>
        </div>
        <div className="benefit-card">
          <h1>05</h1>
          <h2>Practical Projects and Assignments</h2>
          <p>
            Develop a portfolio showcasing your skills and abilities to
            potential employers.
          </p>
          <div className="custom">
            <div className="custom-btn">
              <img src="/images/customBtn.png" alt="" />
            </div>
          </div>
        </div>
        <div className="benefit-card">
          <h1>06</h1>
          <h2>Interactive Learning Environment</h2>
          <p>
            Collaborate with fellow learners, exchanging ideas and feedback to
            enhance your understanding.
          </p>
          <div className="custom">
            <div className="custom-btn">
              <img src="/images/customBtn.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
