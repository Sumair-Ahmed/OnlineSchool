import "./Footer.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="outside">
      <div className="footer">
        <div className="footer-company">
          <Link to="/">
            <img src="/images/Logo.png" alt="" />
          </Link>
          <p>
            <IoIosMail /> hello@skillbridge.com
          </p>
          <p>
            <FaPhoneAlt /> +91 91813 23 2309
          </p>
          <p>
            <FaLocationDot /> Somewhere in the World
          </p>
        </div>
        <div className="home-about">
          <div className="home-links">
            <h3>Home</h3>
            <ul>
              <li>Benefit</li>
              <li>Our Courses</li>
              <li>Our Testimonials</li>
              <li>Our FAQ</li>
            </ul>
          </div>
          <div className="about-links">
            <h3>About Us</h3>
            <ul>
              <li>Company</li>
              <li>Achievements</li>
              <li>Our Goals</li>
            </ul>
          </div>
        </div>
        <div className="profile-links">
          <h3>Social Profiles</h3>
          <img src="/images/links.png" alt="" />
        </div>
      </div>
      <div className="copyright">
        <hr />
        <p>&copy; 2023 Skillbridge. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
