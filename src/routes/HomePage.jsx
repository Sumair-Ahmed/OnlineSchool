import Home from "../components/Home/Home";
import Pricing from "../components/Pricing/Pricing";
import Testimonials from "../components/Testimonials/Testimonials";
import Benefit from "../components/Benefit/Benefit";
import Companies from "../components/Companies/Companies";
import Courses from "../components/Courses/Courses";
import Faqs from "../components/Faqs/Faqs";
const HomePage = () => {
  return (
    <>
      <Home />
      <Companies />
      <Benefit />
      <Courses />
      <Testimonials />
      <Pricing />
      <Faqs />
    </>
  );
};

export default HomePage;
