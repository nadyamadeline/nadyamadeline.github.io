import React from "react";
import "./index.scss";
import Header from "./Header/header";
import About from "./About/about";
import Experience from "./Experience/experience";
import Project from "./Project/project";

function index() {
  return (
    <div className="sections">
      <Header />
      <About />
      <Experience />
      <Project />
    </div>
  );
}

export default index;
