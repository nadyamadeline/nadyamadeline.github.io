import React from "react";
import "./about.scss";
import myImg from "../../assets/1555992778985.jpg";

function about() {
  return (
    <div className="about" id="about">
      <div className="section-title">
        <h2>01. About Me</h2>
        <div className="title-line"></div>
      </div>

      <div className="about-container">
        <div className="about-data">
          <p>Hello, there! I'm Nadya Afandi, a software engineer.</p>

          <p>
            I enjoy creating useful &amp; interesting platforms. My vision is to
            keep on delivering an impact using the things I build, helping solve
            people's common issues along the way.
          </p>

          <p>
            I graduated from{" "}
            <a href="https://www.monash.edu/" target="_blank" rel="noreferrer">
              Monash University
            </a>{" "}
            in Melbourne, Australia after completing my Bachelor of Actuarial
            Science in 2.5 years. After graduating, I joined a coding bootcamp
            organised by{" "}
            <a href="https://www.glints.com" target="_blank" rel="noreferrer">
              Glints
            </a>
            , where I nurtured &amp; improved my programming skills by building
            various projects.
          </p>

          <p>
            Currently, I'm improving my knowledge on{" "}
            <span>Data Structure &amp; Algorithms</span> by taking various
            courses on the subject and practice my problem-solving skills on
            LeetCode, HackerRank, CodeWars, and many more.
          </p>

          <p>
            Here are some technologies that I've been working with recently:
          </p>
          <div className="tech-list">
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux</li>
            </ul>
            <ul>
              <li>HTML5 &amp; S(CSS)</li>
              <li>Firebase</li>
              <li>Node.js</li>
            </ul>
          </div>
        </div>
        <div className="my-img">
          <img src={myImg} alt="Nadya" />
          <div className="img-border"></div>
        </div>
      </div>
    </div>
  );
}

export default about;
