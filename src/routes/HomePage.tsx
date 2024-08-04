import React from "react";
import logo from "../assets/logo.jpg"; // Make sure the path is correct
import frontpage from "../assets/frontpage.jpg";
import classes from "./HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className={classes.homepageContainer}>
      <header className={classes.homepageHeader}>
        <img
          src={logo}
          alt="Texas Floor Restoration Logo"
          className={classes.logo}
        />
        <h1 className={classes.title}>Texas Floor Restoration</h1>
      </header>

      {/* <div className={classes.mottoContact}>
        <div className={classes.mottoContactInnerContainer}>
          <h2 className={classes.motto}>"Don't Replace It, Restore It"</h2>
          <p className={classes.contact}>Phone: 713-306-4822</p>
        </div>
      </div>

      <div className={classes.frontpageImageContainer}>
        <img
          src={frontpage}
          alt="Front Page"
          className={classes.fullWidthImage}
        />
      </div> */}

      <div className={classes.frontpageImageContainer}>
        <div className={classes.frontpageBackgroundImageContainer}>
          <div className={classes.mottoContact}>
            <div className={classes.mottoContactInnerContainer}>
              <h2 className={classes.motto}>"Don't Replace It, Restore It"</h2>
              <p className={classes.callToAction}>
                Click the link below or give us a call
              </p>
              <Link className="btn btn-secondary mb-3" to="/estimate-form">
                Get My Estimate
              </Link>
              <p className={classes.contact}>713-306-4822</p>
            </div>
          </div>
        </div>
        {/* <img
          src={frontpage}
          alt="Front Page"
          className={classes.fullWidthImage}
        /> */}
      </div>
    </div>
  );
};

export default HomePage;
