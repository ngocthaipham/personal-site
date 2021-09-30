import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Avatar from "./asserts/person.png";
import Javascript from "./asserts/js.png";
import ReactJs from "./asserts/reactjs.png";
import Node from "./asserts/nodejs.png";
import Express from "./asserts/expressjs.png";
import Facebook from "./asserts/facebook.png";
import Instagram from "./asserts/instagram.png";
import Github from "./asserts/github.png";
import Gmail from "./asserts/gmail.png";
import Content from "./Content";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
    // AOS.refresh();
  }, []);
  return (
    <>
      <body>
        <div id="main">
          <div className="flex-container">
            <div className="flex-item flex-item-left avatar">
              <img style={{ zIndex: 10 }} src={Avatar} alt="Avatar" />
            </div>
            <div className="flex-item flex-item-right">
              <div className="inner-right-item">
                <div className="content-container">
                  <div
                    className="first-section"
                    style={{ paddingBottom: "2rem" }}
                  >
                    <div className="container">
                      <p>INTRODUCTION</p>
                      <h1>I'm a Junior Developer</h1>
                    </div>
                  </div>

                  <div
                    //  data-aos="fade-up"
                    className="section"
                  >
                    <Content
                      tag={"ABOUT"}
                      description="My approach to building"
                      content={
                        <p>
                          "Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting."
                        </p>
                      }
                    />
                  </div>
                  <div
                    // data-aos="fade-right"
                    className="section"
                  >
                    <Content
                      tag={"SERVICE"}
                      description="What I can do"
                      content={
                        <p>
                          Lorem ipsum dolor sit amet, consectetur. adipiscing
                          elit. Aenean et elementum purus.
                        </p>
                      }
                    />
                  </div>
                  <div
                    // data-aos="fade-right"
                    className="section"
                  >
                    <Content
                      tag={"RESUME"}
                      description="Experience"
                      content={
                        <div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur. adipiscing
                            elit. Aenean et elementum purus.
                          </p>
                          <div className="resume">
                            <div className="resume-item">
                              <p className="small">
                                Internship :
                                <span style={{ marginLeft: "10px" }}>
                                  2021-Now
                                </span>
                              </p>
                              <p style={{ color: "white" }}>Intership</p>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                industry.
                              </p>
                            </div>
                            <div className="resume-item">
                              <p className="small">
                                Self study :
                                <span style={{ marginLeft: "10px" }}>
                                  2020-2021
                                </span>
                              </p>
                              {/* <p style={{color: "white"}}>Student</p> */}
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                industry.
                              </p>
                            </div>
                            <div className="resume-item">
                              <p className="small">
                                Nong Lam University :
                                <span style={{ marginLeft: "10px" }}>
                                  2017-2020
                                </span>
                              </p>
                              <p style={{ color: "white" }}>Student</p>
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                industry.
                              </p>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                  <div
                    // data-aos="fade-right"
                    className="section"
                  >
                    <Content
                      tag={"SKILLS"}
                      description="Skills I have collected
                      over the years and days."
                      content={
                        <div className="skills-flex">
                          <div className="skills-item">
                            <img src={Javascript} alt="skill" />
                          </div>
                          <div className="skills-item">
                            <img src={ReactJs} alt="skill" />
                          </div>
                          <div className="skills-item">
                            <img src={Node} alt="skill" />
                          </div>
                          <div className="skills-item">
                            <img
                              style={{ color: "white" }}
                              src={Express}
                              alt="skill"
                            />
                          </div>
                        </div>
                      }
                    />
                  </div>
                  <div
                    // data-aos="fade-right"
                    className="section"
                  >
                    <Content
                      tag={"CONTACT"}
                      description="Let's get in touch."
                      content={
                        <div className="contact-flex">
                          {/* <p>Fill out my form below and send me an email.</p> */}
                          <div className="contact-item">
                            <img src={Gmail} alt="contact" />
                            <div>
                              <a
                                className="link"
                                // href="blank"
                              >
                                ngocthaipham99@gmail.com
                              </a>
                            </div>
                          </div>
                          <div className="contact-item">
                            <img src={Github} alt="contact" />
                            <div>
                              <a
                                className="link"
                                href="https://github.com/ngocthaipham"
                              >
                                Ngoc Thai Pham
                              </a>
                            </div>
                          </div>
                          <div className="contact-item">
                            <img src={Facebook} alt="contact" />
                            <div>
                              <a
                                className="link"
                                href="https://www.facebook.com/marbiosgod/"
                              >
                                Ngoc Thai
                              </a>
                            </div>
                          </div>
                          <div className="contact-item">
                            <img src={Instagram} alt="contact" />
                            <div>
                              <a
                                className="link"
                                href="https://www.instagram.com/pnthaiiii_/"
                              >
                                pnthaiiii_
                              </a>
                            </div>
                          </div>
                        </div>
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
