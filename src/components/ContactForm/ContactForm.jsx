import "./ContactForm.css";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="cf-left">
        <form className="cf-form">
          <div className="input1">
            <div className="input1-1">
              <label htmlFor="First Name">First Name</label>
              <input type="text" placeholder="Enter First Name" />
            </div>
            <div className="input1-2">
              <label htmlFor="First Name">Last Name</label>
              <input type="text" placeholder="Enter Last Name" />
            </div>
          </div>
          <div className="input2">
            <div className="input2-1">
              <label htmlFor="Email">Email</label>
              <input type="email" placeholder="Enter your Email" />
            </div>
            <div className="input2-2">
              <label htmlFor="Phone">Phone</label>
              <input type="text" placeholder="Enter Phone Number" />
            </div>
          </div>
          <label htmlFor="Subject">Subject</label>
          <input type="text" placeholder="Enter your Subject" />
          <label htmlFor="Message">Message</label>
          <textarea placeholder="Enter your Message here..." rows={5} />
          <div className="send-msg-btn">
            <button>Send Your Message</button>
          </div>
        </form>
      </div>

      <hr />

      <div className="cf-right">
        <div className="support-div">
          <div className="cf-icon">
            <IoIosMail />
          </div>
          <p>support@skillbridge.com</p>
        </div>
        <div className="support-div">
          <div className="cf-icon">
            <FaPhoneAlt />
          </div>
          <p>+91 91813 23 2309</p>
        </div>
        <div className="support-div">
          <div className="cf-icon">
            <FaLocationDot />
          </div>
          <p>Some Where in the World</p>
        </div>
        <div className="support-div">
          <img src="/images/links.png" alt="" />
          <p>Social Profiles</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
