import React, { useRef } from "react";
import "../styles/Home.css";
import { animate, motion } from "framer-motion";
import Typing from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import image from "../images/image.png";

const Home = () => {
  const projectCount = useRef(null);

  const animationCount = (val, refToUpdate) => {
    animate(0, val, {
      duration: 1,
      onUpdate: (v) => (refToUpdate.current.textContent = v.toFixed()),
    });
  };

  return (
    <div id="home">
      <section>
        <div>
          <h1>
            Hello World <span className="hand">👋🏻</span>
          </h1>
          <motion.h1
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            I'm <br /> Ibrahim.
          </motion.h1>

          <Typing
            className="typewriter"
            options={{
              strings: ["Full Stack Developer", "Problem Solver", "Freelancer"],
              autoStart: true,
              loop: true,
            }}
          />

          <div className="home-links">
            <a
              href="https://drive.google.com/file/d/1G5OO6RB6Ugg6au83N2Dei7PWtV40M3IX/view?usp=sharing"
              download="filename.ext"
            >
              Resume
            </a>
            <a href="#experience">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <aside>
            <article>
              <p>
                <motion.span
                  ref={projectCount}
                  whileInView={() => animationCount(25, projectCount)}
                ></motion.span>
                +
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <a href="mailto:ibrahimpayak@gmail.com">
                Contact <FiMail />
              </a>
              <br />
              <span>ibrahimpayak4@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={image} alt="Ibrahim" />
      </section>
      <BsChevronDown className="down-arrow" />
    </div>
  );
};

export default Home;
