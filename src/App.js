import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import bg from "./asserts/bg-effects.png";
import Facebook from "./asserts/fb.png";
import Instagram from "./asserts/ig.png";
import Github from "./asserts/github.svg";
import rocket from "./asserts/rocket.png";
import Content from "./Content";
import Hero from "./Hero";
import { Proficient } from "./SkillData";
import "./App.css";

AOS.init({ duration: 2000 });
function App() {
  // useEffect(() => {
  // AOS.refresh();
  // }, []);
  return (
    <>
      <body>
        <div id="main">
          <div className="flex-container">
            <div className="flex-item flex-item-left avatar">
              <div className="bg">
                <img src={bg} alt="bg" />
              </div>
              <div className="hero">
                <Hero />
              </div>
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
                  >
                    <Content
                      tag={<p>ABOUT</p>}
                      description={<p>Sumary</p>}
                      content={
                        <p>
                          I’m an aspiring full-stack web developer with more
                          than 1 year of experience based in Saigon who loves
                          the process of imagining better futures and coding
                          them into existence. I’m passionate about learning new
                          languages and technologies as well as sharing with
                          others.
                        </p>
                      }
                    />
                  </div>
                  {/* <div 
                  // data-aos="fade-right"
                   className="section">
                    <Content
                      tag={<p>SERVICE</p>}
                      description={<p>What I can do</p>}
                      content={
                        <p>
                          Lorem ipsum dolor sit amet, consectetur. adipiscing
                          elit. Aenean et elementum purus.
                        </p>
                      }
                    />
                  </div> */}
                  <div
                    // data-aos="fade-right"
                    className="section"
                  >
                    <Content
                      tag={<p>RESUME</p>}
                      description={<p>Experience</p>}
                      content={
                        <div>
                          <div className="resume">
                            <div className="resume-item">
                              <p style={{ color: "white" }}>
                                Easy English :
                                <span style={{ marginLeft: "10px" }}>
                                  {`May, 2021 - Present`}
                                </span>
                              </p>
                              <p>
                                This is an application for vocabulary learning,
                                creating an effective and inspirational
                                vocabulary learning strategy, users can create
                                their own vocabulary with strategies optimized
                                for the best person, and create a community to
                                share vocabulary optimized for different
                                purposes such as Toeic, IELTS...
                              </p>
                              <p style={{ color: "white" }}>
                                Project :{" "}
                                <a href="https://https://deploy-easy-english.herokuapp.com/">
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
                            <div className="resume-item">
                              <p style={{ color: "white" }}>
                                ToeicX :
                                <span style={{ marginLeft: "10px" }}>
                                  {`Jul, 2020 - Present`}
                                </span>
                              </p>
                              <p>
                                This is a cross-platform toeic exam preparation
                                application that fully supports vocabulary,
                                grammar, and practice tests to help Toeic exam
                                preparation easier and get the best results.
                              </p>
                              <p style={{ color: "white" }}>
                                Project :{" "}
                                <a href="https://toeicx.com/">ToeicX</a>{" "}
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
                            <div className="resume-item">
                              <p style={{ color: "white" }}>
                                Xang dau Vuong Sau :
                                <span style={{ marginLeft: "10px" }}>
                                  {`Jun, 2019 - Jul, 2020`}
                                </span>
                              </p>
                              <p>
                                A company in the gas stations, petrol stations
                                with 2 large branches in Quang Ngai province.
                              </p>
                              <p style={{ color: "white" }}>
                                Project : The internal system{" "}
                              </p>
                              <ul>
                                <li>
                                  <p>
                                    Project Description: A solution for managing
                                    gas stations, petrol stations, petrol
                                    agents, employees and loyalty systems.
                                    Helping to solve the problem of optimizing
                                    the management process, and bring the best
                                    customer care.
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
                                        I contribute to developing the admin
                                        panel both in the back-end and
                                        front-end.
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
                            <div className="resume-item">
                              <p style={{ color: "white" }}>
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
                  >
                    <Content
                      tag={<p>SKILLS</p>}
                      description={
                        <p>Skills I have collected over the years and days.</p>
                      }
                      content={
                        <div>
                          {Proficient?.length > 0 && (
                            <div className="pl-3">
                              {/* <h2 className='text-xl'> Proficient </h2> */}
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
                                    {x.skill}
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
                    className="section"
                  >
                    <Content
                      tag={<p>CONTACT ME</p>}
                      description={
                        <p>
                          Let's get in touch. I'd love to hear your thoughts !
                        </p>
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
                            <div className="md:w-6/12 md:px-0 p-5 my-5 flex-contact-item">
                              <div>
                                <p className="font-bold">Pham Ngoc Thai</p>
                                {/* <p className='font-thin'>HCM</p> */}
                                <a
                                  href={`mailto: ngocthaipham99@gmail.com`}
                                  className="border-b-2 mt-3 inline-block border-gray-500"
                                >
                                  ngocthaipham99@gmail.com
                                </a>
                              </div>
                              <a
                                className="border-b-2 mt-3 inline-block border-gray-500"
                                href="#"
                                target="_blank"
                                rel="noreferrer"
                              >
                                Resume
                              </a>

                              <div className="flex flex-row flex-wrap mt-7">
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
                                        width="24px"
                                        height="24px"
                                        className="mr-1"
                                      />
                                      Facebook
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
                                      <img
                                        src={Github}
                                        alt=""
                                        width="24px"
                                        height="24px"
                                        className="mr-1"
                                      />
                                      GitHub
                                    </span>
                                  </a>
                                </div>

                                <a
                                  href={`https://www.instagram.com/pnthaiiii_/`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <span className="mb-2 flex flex-row items-end border border-gray-500 p-2 rounded-lg text-sm">
                                    <img
                                      src={Instagram}
                                      alt=""
                                      width="24px"
                                      height="24px"
                                      className="mr-1"
                                    />
                                    Instagram
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div
                              className="relative md:bottom-56 mr-auto ml-auto md:mr-auto md:ml-0 max-w-xs md:max-w-sm flex-contact-item"
                              onClick={() => window.scroll(0, 0)}
                            >
                              <picture>
                                <source srcSet={rocket} type="image/png" />
                                <img
                                  width="500px"
                                  height="500px"
                                  loading="lazy"
                                  alt="red rocket flying"
                                />
                              </picture>
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
