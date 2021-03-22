import React from "react";
import "./Footer.scss";
import Moment from "moment";

function Footer() {
  const date = new Date().setFullYear(2021);
  return (
    <div className="footer">
      <p>Created in {Moment(date).format("YYYY")} by Nadya Afandi.</p>
    </div>
  );
}

export default Footer;
