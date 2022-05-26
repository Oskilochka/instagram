import React from "react";
import Navbar from "../components/library/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div className="content">
          content body
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
