import React from "react";
import "./about.css";
import aboutimg from "../../assets/about.jpg";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Copyright from "../copyright/copyright";

function About() {
  return (
    <>
      <Navbar />
      <div className="about1">
        <div className="container3">
          <div className="row3">
            <div className="about-left partition1">
              <div className="about-img-style">
                <div className="about-img">
                  <img src={aboutimg} alt="" />
                </div>
              </div>
            </div>
            <div className="about-right partition1">
              <div className="about-heading-content">
                <div className="about-heading">About Us</div>
                <h4 className="about-heading-text">
                  We are the best to take care of you
                </h4>
              </div>
              <input
                id="tab1"
                type="radio"
                className="about-input"
                name="tabs"
                checked
              />
              <label className="about-label" for="tab1">
                Work
              </label>

              <input
                id="tab2"
                type="radio"
                className="about-input"
                name="tabs"
              />
              <label for="tab2" className="about-label">
                Mission
              </label>

              <input
                id="tab3"
                type="radio"
                className="about-input"
                name="tabs"
              />
              <label for="tab3" className="about-label">
                Achievment
              </label>

              <section id="content1">
                <p>
                  Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
                  Sausage pig leberkas, t-bone sirloin shoulder bresaola.
                  Frankfurter rump porchetta ham. Pork belly prosciutto brisket
                  meatloaf short ribs.
                </p>
              </section>

              <section id="content2">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel
                  officia alias magni praesentium veniam inventore ipsam dolore
                  ex doloremque totam, reiciendis, repudiandae quas dolor
                  accusantium neque culpa aperiam labore cupiditate?
                </p>
              </section>

              <section id="content3">
                <p>
                  Bacon ipsum dolor sit amet beef venison beef ribs kielbasa.
                  Sausage pig leberkas, t-bone sirloin shoulder bresaola.
                  Frankfurter rump porchetta ham. Pork belly prosciutto brisket
                  meatloaf short ribs.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </>
  );
}

export default About;
