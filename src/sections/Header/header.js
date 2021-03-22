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
      <p style={{ maxWidth: "450px" }}>
        This is a sample text to be edited later. Loren ipsum delores set amet.
        The quick brown fox jumps over the lazy dog. Lavender blue dilly-dilly
        lavender green.
      </p>
      <a href="mailto:nadyamadeline@gmail.com">
        <button className="contact-btn">Get in Touch!</button>
      </a>
    </div>
  );
}

export default header;
