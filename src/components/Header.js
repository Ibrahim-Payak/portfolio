import React from "react";
import "../styles/Header.css";
import logo from "../images/logo.png";

const Header = () => {
  return (
    <nav>
      <img src={logo} alt="" />

      <div className="links">
        <a href="#home">Home</a>
        <a href="#experience">Experience</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Header;
