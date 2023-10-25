import React,{ useState } from "react";
import "./footer.css";

const Footer = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  return (
    <>
      <div className="outer-container">
        <p className="p1">Get in touch ☺</p>
        <div className="social-container">
          <div
            className="phone-icon"
            onMouseEnter={() => setShowPhoneNumber(true)}
            onMouseLeave={() => setShowPhoneNumber(false)}
          >
            {showPhoneNumber && (
              <div className="phone-number">+96170605255</div>
            )}
          </div>
        </div>
        <p className="p2">
          Copyright &copy; 2023 All rights reserved Developed by Mohamad Safa
        </p>
      </div>
    </>
  );
};

export default Footer;


