import React from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";
import "../styles/Dropdown.css";

const Dropdown = ({ name, fields }) => {
  return (
    <div className="dropdown">
      <span className="dropbtn">{name}</span>
      <div className="dropdown-content">
        {fields.map((field, index) => (
          <Link to={`/details/${field}`} key={index}>
            {field}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
