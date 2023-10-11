import React from "react";
import "./services.css";
import psychological from "../../assets/service-iocn1.png";
import cardiology from "../../assets/service-iocn2.png";
import gynecology from "../../assets/service-iocn3.png";
import pediatrician from "../../assets/service-iocn4.png";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Copyright from "../copyright/copyright";

function Services() {
  return (
    <>
    <Navbar/>
      <div className="services1">
        <div className="container2">
          <div className="row2">
            <div className="flex-services1 flex-services2">
              <div className="service-box">
                <div className="service-icon1">
                  <img src={psychological} alt="" />
                </div>
                <p className="service-title">Psycological</p>
                <p>
                  Aenean facilisis sodales est neciMorbi vitapurus on convallis
                  commodo velante
                </p>
              </div>
            </div>
            <div className="flex-services1 flex-services2">
              <div className="service-box">
                <div className="service-icon2">
                  <img src={cardiology} alt="" />
                </div>
                <p className="service-title">Cardiology</p>
                <p>
                  Aenean facilisis sodales est neciMorbi vitapurus on convallis
                  commodo velante
                </p>
              </div>
            </div>
            <div className="flex-services1 flex-services2">
              <div className="service-box">
                <div className="service-icon3">
                  <img src={gynecology} alt="" />
                </div>
                <p className="service-title">Gynecology</p>
                <p>
                  Aenean facilisis sodales est neciMorbi vitapurus on convallis
                  commodo velante
                </p>
              </div>
            </div>
            <div className="flex-services1 flex-services2">
              <div className="service-box">
                <div className="service-icon4">
                  <img src={pediatrician} alt="" />
                </div>
                <p className="service-title">Pediatrician</p>
                <p>
                  Aenean facilisis sodales est neciMorbi vitapurus on convallis
                  commodo velante
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default Services;
