import logo from "./logo.svg";
import "./App.css";
import CvEvent from "./CvEvent/cvevent.jsx";

function App() {
  return (
    <div className="App">
      <div className="A4Page">
        <CvEvent />
        <CvEvent />
      </div>
    </div>
  );
}

export default App;
