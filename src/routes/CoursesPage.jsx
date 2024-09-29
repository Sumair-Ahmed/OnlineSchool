import { useSelector } from "react-redux";
import CourseCard from "../components/CourseCard/CourseCard";
import CourseDesc from "../components/CourseDesc/CourseDesc";

const CoursesPage = () => {
  const courses = useSelector((state) => state.courses.courses);

  if (!courses || !Array.isArray(courses)) {
    return <div>Loading...</div>;
  }
  return (
    <div className="coursepage">
      <CourseDesc
        name="Online Courses on Design and Development"
        desc="Welcome to our online course page, where you can enhance your skills
          in design and development. Choose from our carefully curated selection
          of 10 courses designed to provide you with comprehensive knowledge and
          practical experience. Explore the courses below and find the perfect
          fit for your learning journey."
      />
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesPage;
