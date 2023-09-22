import React from "react";
//import css file
import "./banner.css";

const Banner = () => {
  // return a div element
  const myBanner = (
    <div className="Banner">
      <div>
        <h3>Banner title</h3>
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
