import React from "react";
import "./header.scss";

function header() {
  return (
    <div className="header">
      <p className="hi" style={{ fontFamily: "Open Sans" }}>
        Hi! Welcome aboard. My name is
      </p>
      <h1>Nadya Afandi.</h1>
      <h2>I can make your dreams come true.</h2>
      <p style={{ maxWidth: "500px" }}>
        Now that I caught your attention, here's how I can help.
        <br />
        I'm a software engineer who enjoys creating beautiful and useful apps.
        I'm experienced with various web-development technologies, so if you
        have that new and shiny app idea in mind, I'm your person!
      </p>
      <a href="mailto:nadyamadeline@gmail.com">
        <button className="contact-btn">Get in Touch!</button>
      </a>
    </div>
  );
}

export default header;
