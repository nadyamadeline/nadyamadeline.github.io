import React, { useState } from "react";
import "./Navbar.scss";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const changeBackground = () => {
    window.scrollY > 100 ? setScroll(true) : setScroll(false);
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={scroll ? "navbar-scroll" : "navbar"}>
      <div className="navbar-logo">
        <a href="/" style={{ textDecoration: "none", color: "black" }}>
          Nadya Afandi
        </a>
      </div>

      <div className="navbar-menu">
        <a href="/#about" style={{ textDecoration: "none", color: "black" }}>
          About
        </a>
        <a
          href="/#experience"
          style={{ textDecoration: "none", color: "black" }}
        >
          Experience
        </a>
        <a href="/#project" style={{ textDecoration: "none", color: "black" }}>
          Works
        </a>
        <a href="/#contact" style={{ textDecoration: "none", color: "black" }}>
          Contact
        </a>
        <a
          className="resume-btn"
          href="/#resume"
          style={{ textDecoration: "none", color: "black" }}
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
