import TestSwiper from "../../TestSwiper/TestSwiper";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login">
      <TestSwiper />
      <div className="login-container">
        <h2>Login</h2>
        <p className="welcome-text">
          Welcome back! Please log in to access your account.
        </p>
        <form className="login-form">
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder="Enter your Email" />
          <label htmlFor="Password">Password</label>
          <input type="password" placeholder="Enter your Password" />
          <label htmlFor="Forgot Password?" className="forgot-label">
            Forgot Password?
          </label>
          <div className="remember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <button>Login</button>
        </form>
        <div className="or">
          <hr />
          <span>OR</span>
          <hr />
        </div>
        <button className="google-btn">
          <FcGoogle className="google-icon" />
          Login with Google
        </button>
        <p className="signup-text">
          Don't have an account?{" "}
          <Link to="/Signup">
            <span>Sign Up</span>
          </Link>
          <img src="/images/loginicon.png" alt="" />
        </p>
      </div>
    </div>
  );
};

export default Login;
