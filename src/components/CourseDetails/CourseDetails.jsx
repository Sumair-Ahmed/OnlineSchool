import { useEffect } from "react";
import "./CourseDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { resetSelectedCourse } from "../../store/coursesSlice";
import { useNavigate } from "react-router-dom";
import CourseDesc from "../CourseDesc/CourseDesc";
import { MdOutlineWatchLater } from "react-icons/md";
const CourseDetails = () => {
  const selectedCourse = useSelector((state) => state.courses.selectedCourse);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!selectedCourse) {
      navigate("/", { replace: true });
    }
  }, []);

  if (!selectedCourse) {
    return <div>No course selected</div>;
  }

  return (
    <>
      <CourseDesc name={selectedCourse.name} desc={selectedCourse.desc} />
      <div className="course-details">
        <img src="/images/CourseView.png" alt="" />
        <div className="course-details-curr-det">
          {selectedCourse.curricullams.map((curr) => (
            <div key={curr.no} className="course-details-curr-box">
              <h1>{curr.no}</h1>
              <h2>{curr.subject}</h2>
              <div className="lessons">
                {curr.Lessons.map((lesson) => (
                  <div
                    key={lesson.name}
                    className="lesson"
                    id={
                      lesson.name === "Importance of User-Centered Design"
                        ? "watching"
                        : ""
                    }
                  >
                    <div>
                      <p className="lesson-name">{lesson.name}</p>
                      <p className="lesson-length">Lesson {lesson.length}</p>
                    </div>
                    <div
                      className="duration"
                      id={
                        lesson.name === "Importance of User-Centered Design"
                          ? "Hourwatching"
                          : ""
                      }
                    >
                      <p className="lesson-duration">
                        <MdOutlineWatchLater /> {lesson.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
