import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./about/About";
import Home from "./landingpage/Home";
import Projects from "./projects/Projects";
import Navbarheader from "./Navbarheader";

function App() {
  return (
    <BrowserRouter>
      <Navbarheader></Navbarheader>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/contect" element={<About />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
