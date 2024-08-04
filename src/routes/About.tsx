import React from "react";
import me from "../assets/me.jpeg";
import classes from "./About.module.css"; // Import the CSS file

const About: React.FC = () => {
  return (
    <div className={classes.aboutPage}>
      <h1 className={classes.title}>All About Us</h1>
      <img
        src={me}
        alt="Michael and Allison"
        className={classes.profileImage}
      />
      <div className={classes.contentContainer}>
        <p className={classes.description}>
          Michael and Allison have owned Texas Floor Restoration for over ten
          years and have over 20 years of experience with natural stone. This
          work is Michael's passion, and we genuinely enjoy what we do. We take
          pride in our work and our commitment to providing excellent service to
          our clients.
          <br />
          <br />
          Outside of work, we enjoy traveling, gardening, and spending time with
          our family and dogs. Our hobbies and interests help us maintain a
          well-rounded and fulfilling life.
        </p>
      </div>
    </div>
  );
};

export default About;
