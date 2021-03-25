import React from "react";
import "./Preload.scss";
import HashLoader from "react-spinners/HashLoader";

function Preload({ loading }) {
  return (
    <div className="preloader">
      <HashLoader size={100} color={"#837563"} loading={loading} />
    </div>
  );
}

export default Preload;
