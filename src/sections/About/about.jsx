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
          <p>
            Hello! I'm Nadya, a software engineer currently based in Indonesia.
          </p>

          <p>
            I enjoy creating useful &amp; interesting platforms, be it websites,
            applications, or anything in between. My vision is to keep on
            delivering an impact using the things I build, solving people's
            common issues along the way.
          </p>

          <p>
            I graduated from{" "}
            <a href="https://www.monash.edu/">Monash University</a> in
            Melbourne, Australia after completing my Bachelor of Actuarial
            Science in 2.5 years. I developed an interest in programming after
            spending most of my time doing data analysis (using tools like R,
            Python, and SQL), as my course is largely data-dependant.
          </p>

          <p>
            After graduating, I started learning further about web/app
            development. I enrol myself in a coding bootcamp organised by{" "}
            <a href="https://www.glints.com">Glints</a>, where I nurtured &amp;
            improved my programming skills by building various projects.
          </p>

          <p>
            Currently, I'm improving my knowledge on Data Structure &amp;
            Algorithms by taking various courses on the subject and practice my
            problem-solving skills on LeetCode, HackerRank, CodeWars, and many
            more.
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
          <img src={myImg} alt="" />
          <div className="img-border"></div>
        </div>
      </div>
    </div>
  );
}

export default about;
