import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "./asserts/bg-effects.png";
import Facebook from "./asserts/fb.png";
import Instagram from "./asserts/ig.png";
import Github from "./asserts/github.svg";
import Download from "./asserts/download.png";
import rocket from "./asserts/rocket.png";
import Content from "./Content";
import Hero from "./Hero";
import { Proficient } from "./SkillData";
import "./App.css";
import "./responsive.css";

AOS.init({ duration: 2000 });
function App() {
  return (
    <>
      <body>
        <div id="main">
          <div className="right-content">
          <div className="left-content">
            <div className="inner-content">
              <div className="picture-box">
                {/* <div className="picture"> */}
                <div className="picture">
                  <Hero />
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
            <div className="inner-content">
              <div className="section-container">
                <div
                  className="section height-100 y-center"
                  style={{ paddingBottom: "2rem" }}
                >
                  <div className="container">
                    <p className="tag">INTRODUCTION</p>
                    <h1 className="text-5xl font-bold md:text-7xl">
                      Hello. I’m {`Pham Ngoc Thai`}
                    </h1>
                    <p className="tracking-wide leading-relaxed">
                      {`A Full-Stack Web Developer & Open Source Contributor. I like to build things for web and solving problems.`}{" "}
                    </p>
                  </div>
                </div>

                <div
                  // data-aos="fade-up"
                  className="section"
                  // style={{ paddingBottom: "20rem" }}
                >
                  <Content
                    tag={"ABOUT"}
                    description={"Summary"}
                    content={
                      <p>
                        I’m an aspiring full-stack web developer with more than
                        1 year of experience based in Saigon who loves the
                        process of imagining better futures and coding them into
                        existence. I’m passionate about learning new languages
                        and technologies as well as sharing with others.
                      </p>
                    }
                  />
                </div>
                <div
                  // data-aos="fade-right"
                  className="section"
                  // style={{ paddingBottom: "20rem" }}
                >
                  <Content
                    tag={"RESUME"}
                    description={"Experience"}
                    content={
                      <div>
                        <div className="resume">
                          <div className="resume-item m-b-6">
                            <p
                              className="small m-b-1-5"
                              style={{ color: "white" }}
                            >
                              Easy English :
                              <span
                                className="resume-job-name"
                                style={{ marginLeft: "10px" }}
                              >
                                {`May, 2021 - Present`}
                              </span>
                            </p>
                            <p>
                              This is an application for vocabulary learning,
                              creating an effective and inspirational vocabulary
                              learning strategy, users can create their own
                              vocabulary with strategies optimized for the best
                              person, and create a community to share vocabulary
                              optimized for different purposes such as Toeic,
                              IELTS...
                            </p>
                            <p className="small" style={{ color: "white" }}>
                              Project :{" "}
                              <a href="https://deploy-easy-english.herokuapp.com/">
                                Easy English
                              </a>{" "}
                            </p>
                            <ul>
                              <li>
                                <p>Team Size: 1</p>
                              </li>
                              <li>
                                <p>
                                  Technologies: NodeJS, ReactJS, ExpressJS,
                                  SocketIO, MySql, Docker/ Docker Swarm.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Responsibilities: Do it myself from start to
                                  finish.
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="resume-item m-b-6">
                            <p
                              className="small m-b-1-5"
                              style={{ color: "white" }}
                            >
                              ToeicX :
                              <span
                                className="resume-job-name"
                                style={{ marginLeft: "10px" }}
                              >
                                {`Jul, 2020 - Present`}
                              </span>
                            </p>
                            <p>
                              This is a cross-platform toeic exam preparation
                              application that fully supports vocabulary,
                              grammar, and practice tests to help Toeic exam
                              preparation easier and get the best results.
                            </p>
                            <p className="small" style={{ color: "white" }}>
                              Project : <a href="https://toeicx.com/">ToeicX</a>{" "}
                            </p>
                            <ul>
                              <li>
                                <p>Team Size: 5</p>
                              </li>
                              <li>
                                <p>
                                  Technologies: Flutter, NodeJS, ReactJS,
                                  ExpressJS, SocketIO, MySql, Docker/ Docker
                                  Swarm.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Responsibilities:{" "}
                                  <ul>
                                    <li>
                                      I lead the front-end team with 2 members
                                      to build the Admin front-end.
                                    </li>
                                    <li>
                                      Create the landing page with responsive.
                                    </li>
                                    <li>
                                      Apply unit test as integration test to
                                      increase &gt; 98% unit test coverage.
                                    </li>
                                    <li>
                                      Apply end-to-end testing (Cypress) to
                                      decrease &gt; 60% manual testing time.
                                    </li>
                                    <li>
                                      Manage the front-end project schedule,
                                      break user stories into small tasks for
                                      team members.
                                    </li>
                                    <li>
                                      I work with the CEO & Product Manager to
                                      figure out solutions about product
                                      strategy, team members.
                                    </li>
                                  </ul>
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="resume-item m-b-6">
                            <p
                              className="small m-b-1-5"
                              style={{ color: "white" }}
                            >
                              Vuong Sau Petrol :
                              <span
                                className="resume-job-name"
                                style={{ marginLeft: "10px" }}
                              >
                                {`Jun, 2019 - Jul, 2020`}
                              </span>
                            </p>
                            <p>
                              A company in the gas stations, petrol stations
                              with 2 large branches in Quang Ngai province.
                            </p>
                            <p className="small" style={{ color: "white" }}>
                              Project : The internal system{" "}
                            </p>
                            <ul>
                              <li>
                                <p>
                                  Project Description: A solution for managing
                                  gas stations, petrol stations, petrol agents,
                                  employees and loyalty systems. Helping to
                                  solve the problem of optimizing the management
                                  process, and bring the best customer care.
                                </p>
                              </li>
                              <li>
                                <p>Team Size: 4</p>
                              </li>
                              <li>
                                <p>
                                  Technologies: NodeJS, ReactJS, ExpressJS,
                                  SocketIO, MySql.
                                </p>
                              </li>
                              <li>
                                <p>
                                  Responsibilities:
                                  <ul>
                                    <li>
                                      I contribute to developing the admin panel
                                      both in the back-end and front-end.
                                    </li>
                                    <li>
                                      I’m a core-member who develops at least
                                      40% of features on the front-end side.
                                    </li>
                                    <li>
                                      Re-structure the project makes it more
                                      readable, keeping the code format
                                      consistent across the team.
                                    </li>
                                    <li>
                                      Propose team applying UI Library (Ant
                                      Design) instead of self-build components
                                      to reduce development time and speed up
                                      performance.
                                    </li>
                                    <li>
                                      I had built and mentored 2 interns in an
                                      internal CMS project of the company.
                                    </li>
                                    <li>
                                      I validated customer problems and found
                                      user-focussed solutions by working
                                      directly with product and sales teams.
                                    </li>
                                  </ul>
                                </p>
                              </li>
                            </ul>
                          </div>
                          <div className="resume-item m-b-6">
                            <p
                              className="small m-b-1-5"
                              style={{ color: "white" }}
                            >
                              Nong Lam University : Aug, 2017 - Jul, 2019
                              {/* <span style={{ marginLeft: "10px" }}>
                                  {`Aug, 2017 - Jul, 2019`}
                                </span> */}
                            </p>
                            <p> Software Engineer Major</p>
                          </div>
                        </div>
                      </div>
                    }
                  />
                </div>
                <div
                  // data-aos="fade-right"
                  className="section"
                  // style={{ paddingBottom: "20rem" }}
                >
                  <Content
                    tag={"SKILLS"}
                    description={
                      "Skills I have collected over the years and days."
                    }
                    content={
                      <div>
                        {Proficient?.length > 0 && (
                          <div className="pl-3">
                            <div className="my-7 grid gap-5 grid-cols-3 md:grid-cols-6 content-center">
                              {Proficient.map((x, index) => (
                                <div
                                  className="flex flex-col items-center"
                                  tabIndex="0"
                                  role="img"
                                  aria-label={x.skill}
                                  key={index}
                                >
                                  {x.logo}
                                  <p
                                    className="small"
                                    style={{ color: "white" }}
                                  >
                                    {x.skill}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    }
                  />
                </div>
                <div
                  // data-aos="fade-right"
                  className="section last-section"
                  // style={{ paddingBottom: "20rem" }}
                >
                  <Content
                    tag={"CONTACT ME"}
                    description={
                      "Let's get in touch. I'd love to hear your thoughts !"
                    }
                    content={
                      <div>
                        <div className="bg-gray px-5 py-10 md:py-8 sm:p-8 my-2 md:rounded-lg shadow-lg  justify-between w-full  md:w-6/12 ">
                          <form
                            className="flex flex-col space-y-3 m-auto w-full"
                            name="contact"
                          >
                            <input
                              type="hidden"
                              name="form-name"
                              value="contact"
                            />

                            <label htmlFor="name">Name</label>
                            <input
                              type="text"
                              name="name"
                              id="name"
                              className="gradient"
                              required
                            ></input>
                            <label htmlFor="email">Email</label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="gradient"
                              required
                            ></input>
                            <label htmlFor="message">Message</label>
                            <textarea
                              name="message"
                              id="message"
                              cols="25"
                              rows="5"
                              className="gradient"
                              required
                            ></textarea>
                            <button className="border border-gray-500 p-2 rounded-lg w-auto mr-auto shadow-md">
                              Send Message
                            </button>
                          </form>
                        </div>

                        <div className="md:mx-6 flex flex-wrap md:flex-row justify-between flex-contact">
                          <div className="md:w-6/12 md:px-0 p-5 my-5 flex-contact-item flex-contact-left">
                            <div>
                              <p className="font-bold">Pham Ngoc Thai</p>
                              <a
                                href={`mailto: ngocthaipham99@gmail.com`}
                                className="border-b-2 mt-3 inline-block border-gray-500"
                              >
                                <p>ngocthaipham99@gmail.com</p>
                              </a>
                            </div>

                            <div className="flex flex-row flex-wrap mt-7">
                              <div className="mr-4">
                                <a
                                  href={`https://drive.google.com/file/d/10UiIv0XCqStCoWoXTU3PRQnPj0aqZ7p2/view?usp=sharing`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                                    {/* <img
                                        src={Download}
                                        alt=""
                                        className="mr-1"
                                      /> */}
                                    <svg
                                      className="mr-1"
                                      xmlns="http://www.w3.org/2000/svg"
                                      x="0px"
                                      y="0px"
                                      viewBox="0 0 172 172"
                                      style={{ fill: "#000000" }}
                                    >
                                      <g
                                        fill="none"
                                        fill-rule="nonzero"
                                        stroke="none"
                                        stroke-width="1"
                                        stroke-linecap="butt"
                                        stroke-linejoin="miter"
                                        stroke-miterlimit="10"
                                        stroke-dasharray=""
                                        stroke-dashoffset="0"
                                        font-family="none"
                                        font-weight="none"
                                        font-size="none"
                                        text-anchor="none"
                                        style={{ "mix-blend-mode": "normal" }}
                                      >
                                        <path
                                          d="M0,172v-172h172v172z"
                                          fill="none"
                                        ></path>
                                        <g fill="#ffffff">
                                          <path d="M148.9692,76.49413c0.02867,-0.6536 0.09747,-1.29573 0.09747,-1.9608c0,-25.32987 -20.5368,-45.86667 -45.86667,-45.86667c-17.83067,0 -33.25333,10.1996 -40.83853,25.0604c-3.33107,-1.34733 -6.9488,-2.12707 -10.76147,-2.12707c-14.50533,0 -26.3676,10.80733 -28.2768,24.79093c-13.55933,4.61533 -23.3232,17.4236 -23.3232,32.5424c0,19.00027 15.39973,34.4 34.4,34.4h103.2c19.00027,0 34.4,-15.39973 34.4,-34.4c0,-15.00987 -9.62627,-27.73787 -23.0308,-32.4392zM107.25347,107.25347l-17.2,17.2c-1.118,1.118 -2.58573,1.67987 -4.05347,1.67987c-1.46773,0 -2.93547,-0.56187 -4.05347,-1.67987l-17.2,-17.2c-2.24173,-2.24173 -2.24173,-5.8652 0,-8.10693c2.24173,-2.24173 5.8652,-2.24173 8.10693,0l7.4132,7.4132v-32.0264c0,-3.1648 2.5628,-5.73333 5.73333,-5.73333c3.17053,0 5.73333,2.56853 5.73333,5.73333v32.0264l7.4132,-7.4132c2.24173,-2.24173 5.8652,-2.24173 8.10693,0c2.24173,2.24173 2.24173,5.8652 0,8.10693z"></path>
                                        </g>
                                      </g>
                                    </svg>
                                    <p className="social">Resume</p>
                                  </span>
                                </a>
                              </div>
                              <div className="mr-4">
                                <a
                                  href={`https://www.facebook.com/marbiosgod/`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                                    <img
                                      src={Facebook}
                                      alt=""
                                      className="mr-1"
                                    />
                                    <p className="social">Facebook</p>
                                  </span>
                                </a>
                              </div>

                              <div className="mr-4">
                                <a
                                  href={`https://github.com/ngocthaipham`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                                    <img src={Github} alt="" className="mr-1" />
                                    <p className="social">GitHub</p>
                                  </span>
                                </a>
                              </div>
                              <div className="mr-4">
                                <a
                                  href={`https://www.instagram.com/pnthaiiii_/`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                                    <img
                                      src={Instagram}
                                      alt=""
                                      className="mr-1"
                                    />
                                    <p className="social">Instagram</p>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div
                            className="relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm flex-contact-item flex-contact-right"
                            onClick={() => {window.scrollTo(0, 0)}}
                          >
                            <img
                              className="rocket"
                              src={rocket}
                              loading="lazy"
                              alt="red rocket flying"
                            />
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
      </body>
    </>
  );
}

export default App;
