import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <a
          href="https://twitter.com/carmago_jose_"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </a>

        <a
          href="https://www.linkedin.com/in/kipleting-edwin-25a513120/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
        </a>

        <a
          href="https://github.com/KipletingEdwin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
      <div className={styles.designedBy}>
        <p> Designed and build by <a href="https://www.linkedin.com/in/kipleting-edwin-25a513120/">Kipleting Edwin</a></p>
        <p> Copyright 2021 .All rights reserved.</p>

      </div>
    </div>
  );
}

export default Footer;
