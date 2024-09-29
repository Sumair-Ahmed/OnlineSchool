import "./CourseDesc.css";

const CourseDesc = ({ name, desc }) => {
  return (
    <>
      <div className="coursedesc">
        <h1>{name}</h1>
        <p>{desc}</p>
      </div>
      <div className="coursedeschr">
        <hr />
      </div>
    </>
  );
};

export default CourseDesc;
