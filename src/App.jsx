import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Garage from "./Components/Garage/Garage";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import TemplateSelection from "./Components/Templates/Template1/TemplateSelection";
import About from "./Components/About/About";
function App() {
  const [currentTemplate, setcurrentTemplate] = useState("")
  return (
    <Router>
      {/* <Navbar></Navbar>
        <TemplateSelection></TemplateSelection> */}
      <div className="AppScreen w-lvw h-lvh flex flex-col ">
        <Navbar></Navbar>
        <div className="flex-grow flex flex-col items-center justify-center ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/garage" element={<Garage currentTemplate={currentTemplate} setcurrentTemplate={setcurrentTemplate}/>} />
            <Route path="/templateSelection" element={<TemplateSelection currentTemplate={currentTemplate} setcurrentTemplate={setcurrentTemplate}/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
