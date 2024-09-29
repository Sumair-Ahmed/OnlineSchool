import "./Achievements.css";
import { useSelector } from "react-redux";
const Achievements = () => {
  const achievementsList = useSelector((state) => state.achivements);
  return (
    <div className="achievements">
      <h1>Achievements</h1>
      <p className="achi-p">
        Our commitment to excellence has led us to achieve significant
        milestones along our journey. Here are some of our notable achievements
      </p>
      <div className="achi">
        {achievementsList.map((achi) => (
          <div className="achievement" key={achi.id}>
            <img src={achi.img} alt="" />
            <h3>{achi.title}</h3>
            <p>{achi.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
