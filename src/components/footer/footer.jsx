import React from "react";
import logo from "../../assets/logo-white.png";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer1">
        <div className="container6">
          <div className="row6">
            <div className="footer-up">
              <div className="footer-logo">
                <img src={logo} alt="" className="w-60 mx-auto"/>
              </div>
            </div>
            <div className="footer-down">
              <div className="footer-contact">
                <li>
                  <div className="footer-contact-box">
                    <div className="footer-heading">Office Address</div>
                    <p>801/3 Prabhatam Height, Bhopal, Madhya Pradesh, India</p>
                  </div>
                </li>
                <li>
                  <div className="footer-contact-box">
                    {" "}
                    <div className="footer-heading">Talk to Expert</div>
                    <p>(+91) 9123456785</p>
                  </div>
                </li>
                <li>
                  <div className="footer-contact-box">
                    {" "}
                    <div className="footer-heading">Email Us</div>
                    <p>kaizukuluffy03@gmail.com</p>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
