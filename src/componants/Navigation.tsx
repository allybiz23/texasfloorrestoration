import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler ml-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-3">
            <Link
              className={`nav-link ${activeLink === "/" ? "active" : ""}`}
              to="/"
              onClick={() => setActiveLink("/")}
            >
              Home
            </Link>
            <Link
              className={`nav-link ${activeLink === "/about" ? "active" : ""}`}
              to="/about"
              onClick={() => setActiveLink("/about")}
            >
              About
            </Link>
            <Link
              className={`nav-link ${
                activeLink === "/estimate-form" ? "active" : ""
              }`}
              to="/estimate-form"
              onClick={() => setActiveLink("/estimate-form")}
            >
              Estimate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
