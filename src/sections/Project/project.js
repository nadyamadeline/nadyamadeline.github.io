import React from "react";
import "./project.scss";
import Actflix from "../../assets/Actflix.png";
import SweetHome from "../../assets/SweetHome.png";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function project() {
  return (
    <div className="project" id="project">
      <div className="section-title">
        <h2>03. Some Things I've Built</h2>
        <div className="title-line"></div>
      </div>
      <div className="project-list">
        <div className="project1">
          <a href="https://sweethomeweb.netlify.app">
            <img src={SweetHome} alt="SweetHome" />
          </a>
          <div className="p1-data">
            <p className="featured">Featured Project</p>
            <h3>Interior Design &amp; Home Decor Services</h3>
            <br />
            <div className="p1-detail">
              <p>
                Created an interior design &amp; home decor web-app using React
                and Redux, with features such as creating an appointment
                (user/client), creating project package (admin/designer), and
                uploading payment receipt.
              </p>
            </div>
            <br />
            <div className="p1-tools">
              <p>React</p>
              <p>Redux</p>
              <p>JWT</p>
              <p>Chart.js</p>
            </div>
            <br />
            <div className="p1-icons">
              <a href="">
                <FaGithub className="project-icons" />
              </a>
              <a href="https://sweethomeweb.netlify.app">
                <FaExternalLinkAlt
                  className="project-icons"
                  style={{ marginLeft: "1.25rem" }}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="project2">
          <div className="p2-data">
            <p className="featured" style={{ marginTop: "3rem" }}>
              Featured Project
            </p>
            <h3>Actflix: Movie Review App</h3>
            <br />
            <div className="p2-detail">
              <p>
                Built a movie review app using React and Firebase, with features
                such as search movie, add to watch list, and adding reviews.
              </p>
            </div>
            <br />
            <div className="p2-tools">
              <p>React</p>
              <p>Firebase</p>
            </div>
            <br />
            <div className="p2-icons">
              <a href="">
                <FaGithub className="project-icons" />
              </a>
              <a href="https://sweethomeweb.netlify.app">
                <FaExternalLinkAlt
                  className="project-icons"
                  style={{ marginLeft: "1.25rem" }}
                />
              </a>
            </div>
          </div>
          <div className="img-container">
            <a href="https://actflix.herokuapp.com">
              <img src={Actflix} alt="Actflix" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default project;
