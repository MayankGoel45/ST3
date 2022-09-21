import React from "react";
import Person from "../person/person";
import "./BelowMain.css";
export default function BelowMain() {
  const persons = [
    {
      img: `url("image/img01.png")`,
      name: "Google",
      position: "Frontend Developmnt",
      location: "Mountain View, California",
      time: "Full Time",
      level: "Entry Level",
    },
    {
      img: `url("image/img02.png")`,
      name: "You Tube",
      position: "Frontend Developmnt",
      location: "San Bruno, California",
      time: "Part Time",
      level: "Mid Level",
    },
    {
      img: `url("image/img03.png")`,
      name: "Apple",
      position: "Frontend Developmnt",
      location: "Cupertino, California",
      time: "Full Time",
      level: "Top Level",
    },
  ];
  return (
    <>
      <div id="div3">
        <img id="img3" src={"image/img3.png"} />
        <div id="div3-1">
          <div id="div-3-1-1" className="div-3-1">
            <p className="p3">200K+</p>
            <p>Available Work</p>
          </div>
          <div id="div-3-1-1" className="div-3-1">
            <p className="p3">10K+</p>
            <p>Job Seekers</p>
          </div>
          <div id="div-3-1-1" className="div-3-1">
            <p className="p3">95+</p>
            <p> Trusted Companies </p>
          </div>
        </div>
      </div>
      <div id="div-4">
        <h1>Top Tech and Design Jobs</h1>
        <div id="div-4-1">
          {persons.map((person) => (
            <Person data={person} />
          ))}
          <div className="div-4" id="add">
            <div id="add1">
              <p>+</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
