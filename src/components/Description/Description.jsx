import React, { useEffect, useState } from "react";
import styles from "./Description.module.css";
import profile from "../../assets/desc/edwin1.png";

function Description() {
  const [rotate, setRotate] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentence = "Hello, I'm Edwin";

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < sentence.length) {
        // Add letters one by one
        setRotate((prevRotate) => prevRotate + sentence[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        // Remove letters one by one
        if (rotate.length > 0) {
          setRotate((prevRotate) => prevRotate.slice(0, -1));
        } else {
          // Reset currentIndex when all letters are removed
          setCurrentIndex(0);
        }
      }
    }, 400); // Adjust speed as needed

    return () => clearInterval(interval);
  }, [currentIndex, rotate, sentence.length]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.myDescription}>
          <h1>{rotate}</h1>
          <p>
            I'm a full stack developer majoring in JavaScript, ReactJS, Ruby,
            Ruby on Rails, and SQL
          </p>
        </div>
        <div className={styles.myImage}>
          <img src={profile} alt="myImage" />
        </div>
      </div>
    </div>
  );
}

export default Description;
