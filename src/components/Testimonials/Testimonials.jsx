import "./Testimonials.css";
import { useSelector } from "react-redux";
const Testimonials = () => {
  const testimonialsList = useSelector((state) => state.testimonial);
  return (
    <div className="testimonials">
      <h1>Our Testimonials</h1>
      <div className="test-desc">
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
        <button>View All</button>
      </div>
      <div className="test-cards">
        {testimonialsList.map((test) => (
          <div className="test-card" key={test.id}>
            <p className="test-text">{test.para}</p>
            <div className="full-story">
              <div className="user">
                <img src={test.img} alt="" />
                <p>{test.name}</p>
              </div>
              <div className="read-more">
                <button>Read Full Story</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
