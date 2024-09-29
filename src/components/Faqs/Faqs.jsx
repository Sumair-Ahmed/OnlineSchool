import { useState } from "react";
import "./Faqs.css";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
const Faqs = () => {
  const [expandedSections, setExpandedSections] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
    section5: false,
  });
  const toggleReadMore = (section) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section], // Toggle the specific section
    }));
  };
  return (
    <div className="faqs">
      <div className="faq-left">
        <h1>Frequently Asked Questions</h1>
        <p>
          Still you have any questions? Contact our Team via
          support@skillbridge.com
        </p>
        <button className="all-faqs-btn">See All FAQ's</button>
      </div>
      <div className="faq-right">
        <div className="faq">
          <div className="question">
            <h3>Can I enroll in multiple courses at once?</h3>
            <button
              className="q-more-btn"
              onClick={() => toggleReadMore("section1")}
            >
              {expandedSections["section1"] ? <RxCross2 /> : <FaPlus />}
            </button>
          </div>
          {expandedSections["section1"] && (
            <div className="answer">
              <hr />
              <p className="answer-text">
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </p>
              <div className="enroll">
                <p>Enrollment Process for Different Courses</p>
                <button className="go-btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="faq">
          <div className="question">
            <h3>What kind of support can I expect from instructors?</h3>
            <button
              className="q-more-btn"
              onClick={() => toggleReadMore("section2")}
            >
              {expandedSections["section2"] ? <RxCross2 /> : <FaPlus />}
            </button>
          </div>
          {expandedSections["section2"] && (
            <div className="answer">
              <hr />
              <p className="answer-text">
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </p>
              <div className="enroll">
                <p>Enrollment Process for Different Courses</p>
                <button className="go-btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="faq">
          <div className="question">
            <h3>
              Are the courses self-paced or do they have specific start and end
              dates?
            </h3>
            <button
              className="q-more-btn"
              onClick={() => toggleReadMore("section3")}
            >
              {expandedSections["section3"] ? <RxCross2 /> : <FaPlus />}
            </button>
          </div>
          {expandedSections["section3"] && (
            <div className="answer">
              <hr />
              <p className="answer-text">
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </p>
              <div className="enroll">
                <p>Enrollment Process for Different Courses</p>
                <button className="go-btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="faq">
          <div className="question">
            <h3>Are there any prerequisites for the courses?</h3>
            <button
              className="q-more-btn"
              onClick={() => toggleReadMore("section4")}
            >
              {expandedSections["section4"] ? <RxCross2 /> : <FaPlus />}
            </button>
          </div>
          {expandedSections["section4"] && (
            <div className="answer">
              <hr />
              <p className="answer-text">
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </p>
              <div className="enroll">
                <p>Enrollment Process for Different Courses</p>
                <button className="go-btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="faq">
          <div className="question">
            <h3>Can I download the course materials for offline access?</h3>
            <button
              className="q-more-btn"
              onClick={() => toggleReadMore("section5")}
            >
              {expandedSections["section5"] ? <RxCross2 /> : <FaPlus />}
            </button>
          </div>
          {expandedSections["section5"] && (
            <div className="answer">
              <hr />
              <p className="answer-text">
                Absolutely! You can enroll in multiple courses simultaneously
                and access them at your convenience.
              </p>
              <div className="enroll">
                <p>Enrollment Process for Different Courses</p>
                <button className="go-btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
