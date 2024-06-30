import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";
import "../components/Header.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Contact from "./Contact";
import About from "./About";
import { motion } from "framer-motion";
import resume from "../images/Kosisochukwu_Aniekwe Resume.pdf";
import BackDrop from "./BackDrop";

const Header = ({ setActivePage }) => {
  // Contact toggle(Visibility)
  //   State to manage the visibility of the contact section
  // const [showContact, setShowContact] = useState(false);

  // Function to manage toggle the contact section
  // const toggleContact = () => {
  //   setShowContact(!showContact);
  // };

  // const [activePage, setActivePage] = useState("header");

  // const renderContent = () => {
  //   switch (activePage) {
  //     case "contact":
  //       return <Contact />;
  //     case "about":
  //       return <About />;
  //     default:
  //       return <Header />;
  //   }
  // };

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
      className="header"
      variants={dropIn}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="navbar">
        <div className="navbar-logo">
          <a
            href=""
            onClick={() => {
              navigate("/header");
            }}
          >
            K
          </a>
        </div>
        <ul className="nav-list">
          <li>
            <a
              className="nav-link"
              href=""
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href={resume}
              download="Kosisochukwu_Aniekwe Resume"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              href=""
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="header-bio">
        <h2>Hi, I'm Kosy</h2>
        {/* Header Intro */}
        <div>
          {" "}
          <Typical
            loop={Infinity}
            wrapper="h3"
            steps={[
              "Student at Fisk University",
              2000,
              "Aspiring Software Engineer!",
              2000,
              "React Developer",
              2000,
              "Gamer 🎮",
              2000,
              "Jane Street Focus",
              2000,
              "ColorStack Fellow",
              2000,
            ]}
          />
        </div>

        {/* Header Socials */}
        <div className="header-socials">
          <a
            href="https://www.linkedin.com/in/kosisochukwu-aniekwe/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FaLinkedin />
          </a>
          <a href="https://github.com/CodeTMN" target="_blank" rel="noreferrer">
            Github <FaGithub />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
