import React from "react";
import FeatherIcon from "feather-icons-react";
import "./Footer.css";

function Footer() {
  let year = new Date();
  year = year.getFullYear();

  return (
    <footer>
      <div className="footer-top">
        <div className="container">
          <p className="delivery">
            <span>
              <FeatherIcon icon="truck" size="30" />
            </span>
            خدمة التوصيل متوفرة فى بلدك
          </p>
          <div className="payments-way">
            <p>طرق الدفع</p>
            <span className="payments-way_img">
              <img src="/images/payments.png" alt="payments" />
            </span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            جميع الحقوق محفوظة{" "}
            <a
              href="https://github.com/youssef-ahmed-Devlogs"
              target="blank"
              className="devloper"
            >
              Youssef Ahmed
            </a>
            &copy; {year}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
