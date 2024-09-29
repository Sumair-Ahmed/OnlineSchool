import TestSwiper from "../../TestSwiper/TestSwiper";
import "./Signup.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="signup">
      <TestSwiper />
      <div className="login-container">
        <h2>Sign Up</h2>
        <p className="welcome-text">
          Create an account to unlock exclusive features.
        </p>
        <form className="login-form">
          <label htmlFor="text">Full Name</label>
          <input type="text" placeholder="Enter your Name" />
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Enter your Password" />
          <div className="remember">
            <input type="checkbox" />
            <span>
              I agree with <a>Terms of Use</a> and <a>Privacy Policy</a>
            </span>
          </div>
          <button>Sign Up</button>
        </form>
        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <button className="google-btn">
          <FcGoogle className="google-icon" />
          Sign Up with Google
        </button>
        <p className="signup-text">
          Don't have an account?
          <Link to="/Login">
            <span>Login</span>
          </Link>
          <img src="/images/loginicon.png" alt="" />
        </p>
      </div>
    </div>
  );
};

export default Signup;
