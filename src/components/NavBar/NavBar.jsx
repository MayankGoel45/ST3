import React from "react";
import "./NavBar.css";
// import image from "./img1.png";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid">
        <div>
          <a className="navbar-brand" href="#">
            <img
              id="img1"
              src={"image/img1.png"}
              alt="Bootstrap"
              width="30"
              height="24"
            />
          </a>
        </div>
        <a className="navbar-brand" href="#">
          Find Jobs
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#div3">
                Explore
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#div-8">
                More
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button type="button" class="btn btn-outline-success">
              Login
            </button>
            <button className="btn btn-danger" type="submit">
              Register Now
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
