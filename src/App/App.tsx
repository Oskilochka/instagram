import React from "react";
import Navbar from "../components/library/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AuthPage from "../pages/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <div className="content">
          content body
          <AuthPage />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
