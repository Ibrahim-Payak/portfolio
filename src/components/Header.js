import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import Dropdown from "./Dropdown";

const Header = () => {
  return (
    <nav id="nav">
      <img src={logo} alt="" />
      <div className="links">
        <Link to={"/Home"} className="product-link">
          Home
        </Link>
        <Dropdown
          name="Accessories"
          fields={[
            "Air Eliminators",
            "Differential Pressure Gauge & Switch",
            "Filter Elements",
            "Filter Cartridges",
            "PP Bags",
            "Gaskets",
            "Steam Traps",
          ]}
        />
        <Dropdown
          name="Strainers"
          fields={[
            "Y Type Strainers",
            "T Type Strainers",
            "Basket Strainers",
            "Duplex Basket Strainers",
            "Temporary/Conical Strainers",
          ]}
        />
        <Dropdown
          name="Valves"
          fields={[
            "Ball Valve",
            "Butterfly Valve",
            "Check Valve",
            "Flush Bottom Valve",
            "Gate Valve",
            "Globe Valve",
            "Multi-Port Ball Valve",
          ]}
        />
        <Dropdown
          name="Filters"
          fields={[
            "Bag Filters",
            "Cartridge Filter",
            "Filtration System",
            "Magnetic Filter",
            "Air Filter",
            "Steam Filter",
          ]}
        />
        <Dropdown
          name="Sight Glass"
          fields={[
            "Double Window Sight Flow Indicators",
            "Tubular Sight Flow Indicators",
          ]}
        />
        <Dropdown
          name="Self Cleaning Filters"
          fields={[
            "Scrapper Type Self Cleaning Filters",
            "Disc Type Self Cleaning Filters",
          ]}
        />
        <a
          href="https://drive.google.com/uc?export=download&id=1j1USWKi9C69vYiZX8AflPGSvNBAFEz6r"
          download
        >
          Brochure
        </a>
        <a href="#contact">Contact Us</a>
      </div>
    </nav>
  );
};

export default Header;
