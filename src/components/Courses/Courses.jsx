import "./Courses.css";

const Courses = () => {
  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="cc-desc">
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button>View All</button>
      </div>
      <div className="courses-cards">
        <div className="course-card">
          <img src="/images/card1.png" alt="card-1" />
          <div className="specs">
            <div className="spec-left">
              <div className="weeks">
                <p>4 Weeks</p>
              </div>
              <div className="diff">
                <p>Beginner</p>
              </div>
            </div>
            <h3>By John Smith</h3>
          </div>
          <h2>Web Design Fundamentals</h2>
          <p>
            Learn the fundamentals of web design, including HTML, CSS, and
            responsive design principles. Develop the skills to create visually
            appealing and user-friendly websites.
          </p>
          <button className="get-it-now">Get it Now</button>
        </div>

        <div className="course-card">
          <img src="/images/card2.png" alt="card-1" />
          <div className="specs">
            <div className="spec-left">
              <div className="weeks">
                <p>6 Weeks</p>
              </div>
              <div className="diff">
                <p>Intermediate</p>
              </div>
            </div>
            <h3>By Emily Johnson</h3>
          </div>
          <h2>UI/UX Design</h2>
          <p>
            Master the art of creating intuitive user interfaces (UI) and
            enhancing user experiences (UX). Learn design principles,
            wireframing, prototyping, and usability testing techniques.
          </p>
          <button className="get-it-now">Get it Now</button>
        </div>

        <div className="course-card">
          <img src="/images/card3.png" alt="card-1" />
          <div className="specs">
            <div className="spec-left">
              <div className="weeks">
                <p>8 Weeks</p>
              </div>
              <div className="diff">
                <p>Intermediate</p>
              </div>
            </div>
            <h3>By David Brown</h3>
          </div>
          <h2>Mobile App Development</h2>
          <p>
            Dive into the world of mobile app development. Learn to build native
            iOS and Android applications using industry-leading frameworks like
            Swift and Kotlin.
          </p>
          <button className="get-it-now">Get it Now</button>
        </div>

        <div className="course-card">
          <img src="/images/card4.png" alt="card-1" />
          <div className="specs">
            <div className="spec-left">
              <div className="weeks">
                <p>10 Weeks</p>
              </div>
              <div className="diff">
                <p>Beginner</p>
              </div>
            </div>
            <h3>By Sarah Thompson</h3>
          </div>
          <h2>Graphic Design for Beginners</h2>
          <p>
            Discover the fundamentals of graphic design, including typography,
            color theory, layout design, and image manipulation techniques.
            Create visually stunning designs for print and digital media.
          </p>
          <button className="get-it-now">Get it Now</button>
        </div>

        <div className="course-card">
          <img src="/images/card5.png" alt="card-1" />
          <div className="specs">
            <div className="spec-left">
              <div className="weeks">
                <p>10 Weeks</p>
              </div>
              <div className="diff">
                <p>Intermediate</p>
              </div>
            </div>
            <h3>By Michael Adams</h3>
          </div>
          <h2>Front-End Web Development</h2>
          <p>
            Become proficient in front-end web development. Learn HTML, CSS,
            JavaScript, and popular frameworks like Bootstrap and React. Build
            interactive and responsive websites.
          </p>
          <button className="get-it-now">Get it Now</button>
        </div>

        <div className="course-card">
          <img src="/images/card6.png" alt="card-1" />
          <div className="specs">
            <div className="spec-left">
              <div className="weeks">
                <p>6 Weeks</p>
              </div>
              <div className="diff">
                <p>Advance</p>
              </div>
            </div>
            <h3>By Jennifer Wilson</h3>
          </div>
          <h2>Advanced JavaScript</h2>
          <p>
            Take your JavaScript skills to the next level. Explore advanced
            concepts like closures, prototypes, asynchronous programming, and
            ES6 features. Build complex applications with confidence.
          </p>
          <button className="get-it-now">Get it Now</button>
        </div>
      </div>
    </div>
  );
};

export default Courses;
