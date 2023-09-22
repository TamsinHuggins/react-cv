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
          <CvEvent />
          <CvEvent />
        </div>
      </div>
    </div>
  );
}

export default App;
