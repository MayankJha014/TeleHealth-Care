import React from "react";
import "./achievments.css";
import achievmenticon1 from "../../assets/counter1.png";
import achievmenticon2 from "../../assets/counter2.png";
import achievmenticon3 from "../../assets/counter3.png";
import achievmenticon4 from "../../assets/counter4.png";

function Achievment() {
  return (
    <>
      <div className="achievment1">
        <div className="container4">
          <div className="row4">
            <div className="achievment-up">
              <div className="achievment-content">
                <div className="achievment-subheading">Our Achievments</div>
                <div className="achievment-heading">Why Choose Us</div>
              </div>
            </div>
            <div className="achievment-down">
              <div className="row4">
                <div className="achievment-flex1 achievment-flex">
                  <div className="achievment-box">
                    <div className="achievment-no">
                      <div>8500</div>
                    </div>
                    <div className="achievment-count">
                      <div className="achievment-icon">
                        <img src={achievmenticon1} alt="" />
                      </div>
                      <div className="achievment-head">Successful Cases</div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo beatae provident omnis asperiores incidunt rerum,
                      quidem non molestias veniam natus cumque quis iure dolore
                      accusamus debitis dicta nesciunt ullam velit?
                    </p>
                  </div>
                </div>
                <div className="achievment-flex1 achievment-flex">
                  <div className="achievment-box">
                    <div className="achievment-no">
                      <div>150</div>
                    </div>
                    <div className="achievment-count">
                      <div className="achievment-icon">
                        <img src={achievmenticon2} alt="" />
                      </div>
                      <div className="achievment-head">Qualified Doctors</div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo beatae provident omnis asperiores incidunt rerum,
                      quidem non molestias veniam natus cumque quis iure dolore
                      accusamus debitis dicta nesciunt ullam velit?
                    </p>
                  </div>
                </div>
                <div className="achievment-flex1 achievment-flex">
                  <div className="achievment-box">
                    <div className="achievment-no">
                      <div>1</div>
                    </div>
                    <div className="achievment-count">
                      <div className="achievment-icon">
                        <img src={achievmenticon3} alt="" />
                      </div>
                      <div className="achievment-head">Year Of Experience</div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo beatae provident omnis asperiores incidunt rerum,
                      quidem non molestias veniam natus cumque quis iure dolore
                      accusamus debitis dicta nesciunt ullam velit?
                    </p>
                  </div>
                </div>
                <div className="achievment-flex1 achievment-flex">
                  <div className="achievment-box">
                    <div className="achievment-no">
                      <div>24x7</div>
                    </div>
                    <div className="achievment-count">
                      <div className="achievment-icon">
                        <img src={achievmenticon4} alt="" />
                      </div>
                      <div className="achievment-head">Staff Availability</div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Illo beatae provident omnis asperiores incidunt rerum,
                      quidem non molestias veniam natus cumque quis iure dolore
                      accusamus debitis dicta nesciunt ullam velit?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Achievment;
