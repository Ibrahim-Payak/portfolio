import React from "react";
import "../styles/Home.css";
import Products from "./Products.js";
import Intro from "./Intro.js";

const Home = () => {
  return (
    <>
      <Intro />
      <Products />
    </>
  );
};

export default Home;
