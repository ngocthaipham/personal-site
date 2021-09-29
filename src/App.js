import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Avatar from "./asserts/person.png";
import Content from "./Content";
import "./App.css";

function App() {
  AOS.init({ duration: 2000 });
  // AOS.refresh();
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
                    className="section first-section"
                    style={{ paddingBottom: "2rem" }}
                  >
                    <div className="container">
                      <p>INTRODUCTION</p>
                      <h1>I'm a Junior Developer</h1>
                    </div>
                  </div>

                  <div data-aos="fade-up" className="section">
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
                  <div data-aos="fade-right" className="section">
                    <Content
                      tag={"SERVICE"}
                      description="What I can do ?"
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
