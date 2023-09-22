import logo from "./logo.svg";
import "./App.css";
import CvEvent from "./CvEvent/cvevent.jsx";
import Banner from "./Banner/banner.jsx";

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
          </div>

          <CvEvent />
          <CvEvent />
        </div>
      </div>
    </div>
  );
}

export default App;
