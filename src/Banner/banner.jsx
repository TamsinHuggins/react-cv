import React from "react";
//import css file
import "./banner.css";
import headshot from "./headshot.jpg";
import EducationEvent from "./educationEvent";
import data from "../data.json";

// console.log(data.education[0]);

const Banner = () => {
  // return a div element
  const myBanner = (
    <div className="Banner">
      <img id="bannerImg" src={headshot} />

      <div className="BannerText">
        <h3>CONTACT</h3>
        <h3>EDUCATION</h3>
        <EducationEvent info={data.education[0]} />
        <EducationEvent info={data.education[1]} />
        <EducationEvent info={data.education[2]} />
        <h3>SKILLS</h3>
      </div>
    </div>
  );
  return myBanner;
};

// export the component
export default Banner;
