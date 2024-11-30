import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageSlider from "./ImageSlider";
import home1 from "../images/home1.jpg";
import home2 from "../images/home2.jpg";
import home3 from "../images/home3.jpg";
import home4 from "../images/home5.jpg";

const Intro = () => {
  const slides = [
    {
      url: home1,
      title: "home image 1",
    },
    {
      url: home2,
      title: "home image 2",
    },
    {
      url: home3,
      title: "home image 3",
    },
    {
      url: home4,
      title: "home image 4",
    },
  ];

  const containerStyles = {
    height: "480px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Intro;
