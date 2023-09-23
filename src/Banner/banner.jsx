import React from "react";
//import css file
import "./banner.css";
import headshot from "./headshot.jpg";

const Banner = () => {
  // return a div element
  const myBanner = (
    <div className="Banner">
      <div className="topBoxBanner">
        <img id="bannerImg" src={headshot} />
      </div>
      <div className="BannerText">
        <h3>CONTACT</h3>
      </div>
      <div>
        <p>Banner content</p>
      </div>
    </div>
  );
  return myBanner;
};

// export the component
export default Banner;
