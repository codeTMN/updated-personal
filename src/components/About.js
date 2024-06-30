import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./About.css";
import resume from "../images/Kosisochukwu_Aniekwe Resume.pdf";
import { IoClose } from "react-icons/io5";
import Header from "./Header";
import Contact from "./Contact";

const About = ({ handleClose, setActivePage }) => {
  const navigate = useNavigate();

  const dropIn = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="about-me"
      variants={dropIn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="sticky">
        <IoClose
          id="sticky"
          className="close-button"
          onClick={() => {
            navigate("/header");
          }}
          // onClick={handleClose}
          // href={Header}
        />
      </div>
      <h4 className="about-head">
        ABOUT <span>ME</span>
      </h4>
      <div>
        <div className="about-img-write">
          <div className="about-img"></div>
          <p className="about-write-up">
            I am Kosy, a Computer Science student at Fisk Univeristy with a deep
            fascination for technology and innovation. My curiosity and awe of
            the world drive me to constantly think outside the box and find
            resourceful solutions to complex problems. With a strong foundation
            in computer science, I am proficient in Python, Java, and
            JavaScript. I have extensive experience in web development using
            React.js, Node.js with Express.js, SCSS, MongoDB, MySQL, Bootstrap,
            and TailwindCSS. My technical journey has equipped me with a solid
            understanding of algorithm design, data structures, and software
            engineering principles. I am a lifelong learner, always eager to
            explore new technologies and improve my existing skills. This
            commitment to continuous learning allows me to stay at the forefront
            of the ever-evolving tech landscape. Currently, I am seeking
            software engineering internship opportunities that will enable me to
            work on challenging projects and further develop my skills as a full
            stack developer. If you are looking for an innovative, passionate,
            and highly motivated individual to join your team, let's connect!
            Feel free to reach out to me via{" "}
            <a href="mailto:kosisochukwuaniekwe09@gmail.com">email</a> or
            connect with me on{" "}
            <a href="https://www.linkedin.com/in/kosisochukwu-aniekwe/">
              LinkedIn
            </a>{" "}
            <div className="about-links">
              <a
                href=""
                className=""
                onClick={() => {
                  navigate("/contact");
                }}
              >
                Get in Touch
              </a>
              <a href={resume} download="Kosisochukwu_Aniekwe Resume">
                My Resume
              </a>
            </div>
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
