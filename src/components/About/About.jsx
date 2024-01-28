import styles from "./About.module.css";

import React from "react";
import server from "../../assets/about/server.png";
import frontend from "../../assets/about/frontend.png";

function About() {
  return (
    <div className={styles.container} id="about">
      <h2> About </h2>
      <div className={styles.aboutMe}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={frontend} alt="frontend" />
            <div className={styles.aboutItemText}>
              <h3> FrontEnd Developer</h3>
              <p>
                I am a frontend developer majoring in JavaScript and React
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={server} alt="backend" />
            <div className={styles.aboutItemText}>
              <h3> BackEnd Developer</h3>
              <p>
                I am a backend developer majoring in Ruby and Ruby on Rails
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
