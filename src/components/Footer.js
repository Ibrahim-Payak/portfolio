import React from "react";
import {
  AiOutlineArrowUp,
  AiFillFacebook,
  AiFillLinkedin,
  AiTwotoneMail,
  AiFillEnvironment,
} from "react-icons/ai";
import "../styles/Footer.css";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Footer = () => {
  return (
    <footer id="contact">
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-widget">
            <h2>About Company</h2>
            <p>
              Manufacturers of Strainer, Duplex Strainer, Basket Strainer, Y
              Type Strainer, Self Cleaning Filter
            </p>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-widget">
            <h2>Products Range</h2>
            <ul className="footer-service-list">
              <li>
                <a href="#">Strainers</a>
              </li>
              <li>
                <a href="#">Valves</a>
              </li>
              <li>
                <a href="#">Filters</a>
              </li>
              <li>
                <a href="#">Automatic Filters</a>
              </li>
              <li>
                <a href="#">Credentials</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-column">
          <div className="footer-widget contact">
            <h2>Contact</h2>
            <ul>
              <li>
                <strong>Address</strong>
                <br />
                Nr. Post office, A/9, ARCHNA INDUSTRIAL ESTATE NO.2, near BANNER
                ESTATE, Rakhial, Ahmedabad, Gujarat 380023(INDIA)
              </li>

              <li className="mail">
                <strong>Mail Us</strong>
                <br />
                info@strainersindia.com
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="https://www.facebook.com/acmefluidsystems">
                  <AiFillFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/acmefluidsystems">
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a href="mailto:ibrahimpayak@gmail.com">
                  <AiTwotoneMail />
                </a>
              </li>
              <li>
                <a href="https://maps.app.goo.gl/QXppxUYZMiswrQWM7">
                  <AiFillEnvironment />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <a
        href="#nav"
        className="scroll-top"
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
      >
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
