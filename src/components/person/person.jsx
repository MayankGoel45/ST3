import React from "react";

import "./person.css";

export default function Person({ data }) {
  const styles = {
    backgroundImage: data.img,
  };
  return (
    <div className="div-4">
      <div id="img-4" className="img-4" style={styles}></div>
      <p className="img-4">{data.name}</p>
      <h5 className="img-4">{data.position}</h5>
      <p className="img-4">{data.location}</p>
      <p id="img-4-p1">
        <button>{data.time}</button>
        <button>{data.level}</button>
      </p>
    </div>
  );
}
