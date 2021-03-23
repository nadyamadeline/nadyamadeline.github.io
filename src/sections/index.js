import React from "react";
import "./index.scss";
import Header from "./Header/header";
import About from "./About/about";
import Experience from "./Experience/experience";
import Project from "./Project/project";
import Contact from "./Contact/contact";
import Footer from "../components/Footer/Footer";

function index() {
  return (
    <div className="sections">
      <Header />
      <About />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default index;
