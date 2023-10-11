import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import hamburger from "../../assets/ham.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar1">
        <div className="container">
          <div className="row1">
            <div className="logo1">
              <div className="main-logo">
                <img src={logo} alt="" className="w-60 mx-auto"/>
              </div>
            </div>
            <div className="nav-bar">
              <div className="nav-comp">
                <input type="checkbox" name="" id="check" />
                <ul className="nav-ul">
                  <li className="nav-list"><NavLink to="/">Home</NavLink></li>
                  <li className="nav-list"><NavLink to="/services">Services</NavLink></li>
                  <li className="nav-list"><NavLink to="/about">About Us</NavLink></li>
                  <li className="nav-list"><NavLink to="/contact">Contact Us</NavLink></li>
                </ul>
                <label htmlFor="check">
                  <img src={hamburger} alt="" id="ham" />
                  {""}
                </label>
              </div>
              <div className="nav-button">
                <button className="n-button"><NavLink to="/login">Login</NavLink></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
