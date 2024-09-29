import { useState } from "react";
import "./Header.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [selectedMenu, setSelectedMenu] = useState("Home");
  const [res, setRes] = useState(false);
  return (
    <div className="header">
      <div className="ads">
        <h3>Free Courses 🌟 Sale Ends Soon, Get It Now</h3>
        <span>
          <FaArrowRight />
        </span>
      </div>
      <div className="menu">
        <div className="menu-left">
          <Link to="/" onClick={() => setSelectedMenu("Home")}>
            <img src="/images/Logo.png" alt="" />
          </Link>
          <ul id={res === true ? "responsive-ul" : ""}>
            <li>
              <Link to="/">
                <button
                  className={selectedMenu === "Home" ? "active" : ""}
                  onClick={() => setSelectedMenu("Home")}
                  id={res === true ? "responise-li-button" : ""}
                >
                  Home
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Courses">
                <button
                  className={selectedMenu === "Courses" ? "active" : ""}
                  onClick={() => setSelectedMenu("Courses")}
                  id={res === true ? "responise-li-button" : ""}
                >
                  Courses
                </button>
              </Link>
            </li>
            <li>
              <Link to="/About-us">
                <button
                  className={selectedMenu === "About" ? "active" : ""}
                  onClick={() => setSelectedMenu("About")}
                  id={res === true ? "responise-li-button" : ""}
                >
                  About Us
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Pricing">
                <button
                  className={selectedMenu === "Pricing" ? "active" : ""}
                  onClick={() => setSelectedMenu("Pricing")}
                  id={res === true ? "responise-li-button" : ""}
                >
                  Pricing
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Contact">
                <button
                  className={selectedMenu === "Contact" ? "active" : ""}
                  onClick={() => setSelectedMenu("Contact")}
                  id={res === true ? "responise-li-button" : ""}
                >
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className="menu-right">
          <Link to="/Signup">
            <button className="signup-btn">Sign Up</button>
          </Link>
          <Link to="/Login">
            <button className="login-btn">Login</button>
          </Link>
          <img
            onClick={() => {
              setRes(!res);
            }}
            src="/images/Responsive.png"
            alt=""
            className="mobile-menu"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
