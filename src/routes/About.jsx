import Achievements from "../components/Achievements/Achievements";
import CourseDesc from "../components/CourseDesc/CourseDesc";
import Goals from "../components/Goals/Goals";

const About = () => {
  return (
    <>
      <CourseDesc
        name="About Skillbridge"
        desc="Welcome to our platform, where we are passionate about empowering individuals to master the world of design and development. We offer a wide range of online courses designed to equip learners with the skills and knowledge needed to succeed in the ever-evolving digital landscape."
      />
      <Achievements />
      <Goals />
    </>
  );
};

export default About;
