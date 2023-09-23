import React from "react";
//import css file
import "./cvevent.css";

// const makeList = (points) => {
//   // function recieves an array of bullet points associeated with Cv event and returns a list of bullet points in html

//   points.forEach((point) => {
//     <li>{point}</li>;
//   });
// };

const CvEvent = (props) => {
  // return a div element

  // console.log(makeList(props.info.points));

  const listOfPoints = props.info.points.map((point) => {
    return <li>{point}</li>;
  });

  const myEvent = (
    <div className="cvEvent">
      <div>
        <h4>{props.info.jobTitle.toUpperCase()}</h4>
        <h4>{props.info.company}</h4>
      </div>
      <div>
        <ul>{listOfPoints}</ul>
      </div>
    </div>
  );
  return myEvent;
};

// export the component
export default CvEvent;
