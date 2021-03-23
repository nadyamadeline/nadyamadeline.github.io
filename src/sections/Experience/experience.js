import React, { useState } from "react";
import "./experience.scss";

function Experience() {
  const [work1, setWork1] = useState(true);
  const [work2, setWork2] = useState(false);
  const [work3, setWork3] = useState(false);

  const handleWork1 = () => {
    setWork1(true);
    setWork2(false);
    setWork3(false);
  };

  const handleWork2 = () => {
    setWork1(false);
    setWork2(true);
    setWork3(false);
  };

  const handleWork3 = () => {
    setWork1(false);
    setWork2(false);
    setWork3(true);
  };
  return (
    <div className="experience" id="experience">
      <div className="section-title">
        <h2>02. Where I've Worked</h2>
        <div className="title-line"></div>
      </div>
      <div className="jobs-table">
        <div className="tabs">
          <p
            onClick={handleWork1}
            className={work1 ? "jobs-active" : "jobs-name"}
          >
            Glints
          </p>
          <p
            onClick={handleWork2}
            className={work2 ? "jobs-active" : "jobs-name"}
          >
            Butterworks
          </p>
          <p
            onClick={handleWork3}
            className={work3 ? "jobs-active" : "jobs-name"}
          >
            RAJAWALI Machinery
          </p>
        </div>
        <div className="contents">
          {work1 ? (
            <div>
              <h3>
                Software Engineering Trainee &#64;{" "}
                <a href="https://glints.com" target="_blank">
                  Glints
                </a>
              </h3>
              <p className="duration">Dec 2020 - Mar 2021</p>
              <br />
              <ul>
                <li>
                  Glints is a Series B Talent Recruitment Start-Up backed by top
                  VCs like MonkHill Ventures, MindWorks, and many more
                </li>
                <li>
                  Developed an online Interior Design &amp; Home Decor Services
                  Website using React &amp; Redux, successfully integrated 90+
                  APIs for its features (such as create appointment, create
                  project quotation, and upload payment receipt)
                </li>
                <li>
                  Built a Movie Review Website using React &amp; Firebase, with
                  features like search, create watch list, and adding reviews
                </li>
              </ul>
            </div>
          ) : work2 ? (
            <div>
              <h3>
                Founder &#64;{" "}
                <a href="https://instagram.com/butterworks.id" target="_blank">
                  Butterworks.id
                </a>
              </h3>
              <p className="duration">Apr 2020 - present</p>
              <br />
              <ul>
                <li>
                  Butterworks is an online-based bakery focusing on creating
                  customised high-end celebration cakes
                </li>
                <li>
                  Established &amp; managed all aspects of the business,
                  analysed cost incurred &amp; cash inflows to determine profit
                  margin
                </li>
              </ul>
            </div>
          ) : work3 ? (
            <div>
              <h3>
                Project Manager Assistant &#64;{" "}
                <a href="/" target="_blank">
                  RAJAWALI
                </a>
              </h3>
              <p className="duration">Jan 2020 - Mar 2020</p>
              <br />
              <ul>
                <li>
                  Rajawali is a metal-cutting machine manufacturer, providing
                  metal cutting, painting, and other metal-related services
                </li>
                <li>
                  Liaised between client &amp; production team, conducted
                  quality control &amp; organised shipping of goods
                </li>
                <li>
                  Created quotation, invoice, and handled client queries &amp;
                  payments
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default Experience;
