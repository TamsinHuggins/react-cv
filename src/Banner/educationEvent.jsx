import React from "react";
//import css file
import "./banner.css";

const EducationEvent = (props) => {
  const myEducationEvent = (
    <div>
      <h4>{props.info.courseTitle}</h4>
      <p>{props.info.institution}</p>
      <p>{props.info.dates}</p>
    </div>
  );
  return myEducationEvent;
};

// export the component
export default EducationEvent;
