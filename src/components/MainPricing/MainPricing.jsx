import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import "./MainPricing.css";
const MainPricing = () => {
  return (
    <div className="pricing">
      <div className="pricing-desc main-price-desc">
        <div className="days">
          <button className="monthly-btn">Monthly</button>
          <button className="yearly-btn">Yearly</button>
        </div>
      </div>
      <div className="packages">
        <div className="package">
          <div className="plan">
            <h3>Free Plan</h3>
          </div>
          <div className="monthly">
            <span>$0</span>
            <p>/Month</p>
          </div>
          <div className="features">
            <h2>Available Features</h2>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Access to selected free courses.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Limited course materials and resources.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Basic community support.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>No certification upon completion.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Ad-supported platform.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <RxCross2 />
              </div>
              <p>Access to exclusive Pro Plan community forums.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <RxCross2 />
              </div>
              <p>Early access to new courses and updates.</p>
            </div>
            <button className="get-start-btn">Get Started</button>
          </div>
        </div>

        <div className="package">
          <div className="plan">
            <h3>Pro Plan</h3>
          </div>
          <div className="monthly">
            <span>$79</span>
            <p>/Month</p>
          </div>
          <div className="features">
            <h2>Available Features</h2>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Unlimited access to all courses.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Unlimited course materials and resources.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Priority support from instructors.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Course completion certificates.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Ad-free experience.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Access to exclusive Pro Plan community forums.</p>
            </div>
            <div className="feature">
              <div className="bullet-point">
                <TiTick />
              </div>
              <p>Early access to new courses and updates.</p>
            </div>
            <button className="get-start-btn">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPricing;
