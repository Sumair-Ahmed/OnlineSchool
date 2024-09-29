import { useDispatch, useSelector } from "react-redux";
import "./CourseCard.css";
import { Link } from "react-router-dom";
import { filterCourse } from "../../store/coursesSlice";
const CourseCard = ({ course }) => {
  const dispatch = useDispatch();
  return (
    <div className="coursecard" key={course.id}>
      <h1>{course.name}</h1>
      <div className="card-desc">
        <p>{course.desc}</p>
        <Link to={`/Courses/${course.id}`}>
          <button onClick={() => dispatch(filterCourse({ id: course.id }))}>
            View Course
          </button>
        </Link>
      </div>
      <div className="card-images">
        <img src={course.photo1} alt="" />
        <img src={course.photo2} alt="" />
        <img src={course.photo3} alt="" />
      </div>
      <div className="specs">
        <div className="spec-left">
          <div className="weeks">
            <p>{course.week}</p>
          </div>
          <div className="diff">
            <p>{course.diff}</p>
          </div>
        </div>
        <h3>{course.by}</h3>
      </div>
      <div className="curr">
        <h2>Curriculum</h2>
        <hr />
        <div className="curr-det">
          {course.curricullams.map((curr) => (
            <div className="curr-box" key={curr.no}>
              <h1>{curr.no}</h1>
              <p>{curr.subject}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
