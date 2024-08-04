import React from "react";
import logo from "../assets/logo.jpg"; // Make sure the path is correct
import frontpage from "../assets/frontpage.jpg";
import "./HomePage.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <img src={logo} alt="Texas Floor Restoration Logo" className="logo" />
        <h1 className="title">Texas Floor Restoration</h1>
      </header>

      <div className="motto-contact">
        <h2 className="motto">"Don't Replace It, Restore It"</h2>
        <p className="contact">Phone: 713-306-4822</p>
      </div>

      <div className="frontpage-image">
        <img src={frontpage} alt="Front Page" className="full-width-image" />
      </div>
    </div>
  );
};

export default HomePage;
