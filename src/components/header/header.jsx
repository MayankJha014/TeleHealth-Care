import React from "react";
import "./header.css";
import bannerimg from "../../assets/001.png";

function Header() {
  return (
    <>
      <div className="header-start">
        <div className="container1">
          <div className="row2">
            <div className="banner1 banner-size1">
              <h2 className="main-line">Our Introduction</h2>
              <h3>We are One-Health care Solution</h3>
              <h2 className="tag-line">
                Making healthcare hasssle-free and secure, like never before.
              </h2>
              <div className="dialog-box">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, veniam eum non accusantium ducimus, amet necessitatibus
                  eligendi, ullam omnis asperiores voluptates consectetur
                  corrupti. Nisi consectetur vero tempore, fugiat velit
                  quisquam.
                </p>
              </div>
              <div className="nav-button">
                <button className="n-button">Login</button>
              </div>
            </div>
            <div className="banner2 banner-size2">
              <div className="ban-img1">
                <img src={bannerimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
