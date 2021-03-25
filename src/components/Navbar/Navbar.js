import React, { useState } from "react";
import "./Navbar.scss";
import resume from "../../static/resume.pdf";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const changeBackground = () => {
    window.scrollY > 100 ? setScroll(true) : setScroll(false);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={scroll ? "navbar-scroll" : "navbar"}>
      <div className="navbar-logo">
        <a href="/" style={{ textDecoration: "none", color: "#837563" }}>
          Nadya Afandi
        </a>
      </div>

      <div className="navbar-menu">
        <a href="/#about" style={{ textDecoration: "none", color: "#7b8d75" }}>
          About
        </a>
        <a
          href="/#experience"
          style={{ textDecoration: "none", color: "#7b8d75" }}
        >
          Experience
        </a>
        <a
          href="/#project"
          style={{ textDecoration: "none", color: "#7b8d75" }}
        >
          Works
        </a>
        <a
          href="/#contact"
          style={{ textDecoration: "none", color: "#7b8d75" }}
        >
          Contact
        </a>
        <a
          className="resume-btn"
          href={resume}
          // without
          rel="noopener noreferrer"
          target="_blank"
          style={{ textDecoration: "none", color: "#7b8d75" }}
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
