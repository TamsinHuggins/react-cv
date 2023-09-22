import React from "react";
//import css file
import "./cvevent.css";

const CvEvent = () => {
  // return a div element
  const myEvent = (
    <div className="cvEvent">
      <div>
        <h3>Event Title</h3>
      </div>
      <div>
        <p>Event description</p>
      </div>
    </div>
  );
  return myEvent;
};

// export the component
export default CvEvent;
