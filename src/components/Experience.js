import React from "react";
import "../styles/Experience.css";
import data from "../data/data.json";

const Experience = () => {
  return (
    <div id="experience">
      <div className="box">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className={`item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="block">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a className="link" target="blank" href={project.github}>
                (📜 Source Code)
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
