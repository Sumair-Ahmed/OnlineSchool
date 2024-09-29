import "./TestSwiper.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSelector } from "react-redux";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
const TestSwiper = () => {
  const swiperRef = useRef(null);
  const testimonialsList = useSelector((state) => state.testimonial);

  return (
    <div className="test-swiper">
      <div className="test-swiper-desc">
        <h2>Students Testimonials</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
          elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget
          habitasse in velit fringilla feugiat senectus in.
        </p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        loop={true}
      >
        {testimonialsList.map((test, index) => (
          <SwiperSlide key={test.id} className="stest-card">
            <p className="stest-text">{test.para}</p>
            <div className="sfull-story">
              <div className="suser">
                <img src={test.img} alt="" />
                <p>{test.name}</p>
              </div>
              <div className="sread-more">
                <button>Read Full Story</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next-prev">
        <button onClick={() => swiperRef.current.slidePrev()}>
          <FaArrowLeft />
        </button>
        <button onClick={() => swiperRef.current.slideNext()}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default TestSwiper;
