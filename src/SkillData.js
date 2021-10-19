// import React from "react"
import js from "./asserts/javascript-original.svg";
import react from "./asserts/react-original.svg";
import nodejs from "./asserts/nodejs-original.svg";
import mongodb from "./asserts/mongodb-original.svg";
import git from "./asserts/git-scm-icon.svg";
import socketio from "./asserts/socket-io.svg";
import mysql from "./asserts/mysql-ar21.svg";
import redis from "./asserts/redis-icon.svg";
import html5 from "./asserts/html5-original.svg";
import css3 from "./asserts/css3-original.svg";

const Proficient = [
  {
    skill: "Javascript",
    logo: (
      <img
        src={js}
        alt=""
        loading="lazy"
        className="w-16 mb-1"
        width="64px"
        height="64px"
      />
    ),
  },
  {
    skill: "React Js",
    logo:  (
        <img
          src={react}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
  {
    skill: "Node JS ",
    logo:  (
        <img
          src={nodejs}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
  {
    skill: "MongoDB",
    logo:  (
        <img
          src={mongodb}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
  {
    skill: "Git",
    logo:  (
        <img
          src={git}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },

  {
    skill: "SocketIO",
    logo:  (
        <img
          src={socketio}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
  {
    skill: "MySql",
    logo:  (
        <img
          src={mysql}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
  {
    skill: "Redis",
    logo:  (
        <img
          src={redis}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
  {
    skill: "HTML 5",
    logo:  (
        <img
          src={html5}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
  {
    skill: "CSS 3",
    logo:  (
        <img
          src={css3}
          alt=""
          loading="lazy"
          className="w-16 mb-1"
          width="64px"
          height="64px"
        />
      ),
  },
];

export { Proficient };
