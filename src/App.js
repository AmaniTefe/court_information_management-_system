import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainNavbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/About";
import Login from "./pages/Login";
import "./style/style.scss";
import "./style/style.css";

const App = () => {
  return (
    <Router>
      <div>
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
