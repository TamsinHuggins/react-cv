import logo from "./logo.svg";
import "./App.css";
import CvEvent from "./CvEvent/cvevent.jsx";
import Banner from "./Banner/banner.jsx";
import data from "./data.json";

// access all data from data.json where type = work experience

// for (let i = 0; i < data.workExperience.length; i++) {
//   console.log(data.workExperience[i].company);
// }

console.log();

function App() {
  return (
    <div className="App">
      <div className="A4Page">
        <Banner />
        <div className="eventContainer">
          <div id="titleStrip">
            <h1>TAMSIN HUGGINS</h1>
            <p>
              Here I will type my bio Components are independent and reusable
              bits of code. They serve the same purpose as JavaScript functions,
              but work in isolation and return HTML. Components come in two
              types, Class components and Function components, in this tutorial
              we will concentrate on Function components.
            </p>

            <h3>EXPERIENCE</h3>
          </div>

          <CvEvent info={data.workExperience[0]} />
        </div>
      </div>
    </div>
  );
}

export default App;
