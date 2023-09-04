import React from "react";
import "../styles/Footer.css";
import { AiFillLinkedin, AiFillGithub, AiOutlineArrowUp } from "react-icons/ai";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
  return (
    <div id="contact">
      <footer>
        <article>
          <a href="https://www.linkedin.com/in/ibrahimpayak/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/Ibrahim-Payak" target={"blank"}>
            <AiFillGithub />
          </a>

          <a href="https://leetcode.com/ibrahim_payak/" target={"blank"}>
            <SiLeetcode />
          </a>

          <a
            href="https://auth.geeksforgeeks.org/user/ibupayak"
            target={"blank"}
          >
            <SiGeeksforgeeks />
          </a>
        </article>

        <a href="#home" className="scroll-top">
          <AiOutlineArrowUp />
        </a>
      </footer>
      <small> Dev with ♥ by © Ibrahim Payak</small>
    </div>
  );
};

export default Footer;
