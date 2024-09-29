import "./Goals.css";
import { useSelector } from "react-redux";
const Goals = () => {
  const goalList = useSelector((state) => state.goals);
  return (
    <div className="goals">
      <h1>Our Goals</h1>
      <p className="goal-p">
        At SkillBridge, our goal is to empower individuals from all backgrounds
        to thrive in the world of design and development. We believe that
        education should be accessible and transformative, enabling learners to
        pursue their passions and make a meaningful impact. Through our
        carefully crafted courses, we aim to
      </p>
      <div className="goal-box">
        {goalList.map((achi) => (
          <div className="goal" key={achi.id}>
            <img src={achi.img} alt="" />
            <h3>{achi.title}</h3>
            <p>{achi.para}</p>
          </div>
        ))}
      </div>

      <div className="goal-footer">
        <div className="goal-left">
          <h1>
            <span className="goal-span">Together</span> , let's shape the future of digital innovation
          </h1>
          <p>
            Join us on this exciting learning journey and unlock your potential
            in design and development.
          </p>
        </div>
        <div className="goal-right">
          <button>Join Now</button>
        </div>
      </div>
    </div>
  );
};

export default Goals;
