import React, { useEffect, useState } from "react";
import styles from "./Description.module.css";
import profile from "../../assets/desc/edwin1.png";

function Description() {

  const [rotate, setRotate] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentance = "Hello, I'm Edwin";

  useEffect(()=> {
    const interval = setInterval(() => {
      if (currentIndex < sentance.length){
        setRotate((prevRotate) => prevRotate + sentance[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);

      } else {
        setCurrentIndex(0);
        setRotate("");
      }
      
    }, 500);
    return () =>clearInterval(interval);
  }, [currentIndex, sentance.length]);




  return (
    <div className={styles.container}>
      <div className={styles.myDescription}>
        <h1> {rotate}</h1>
        <p>
          I'm a full stack developer majoring in JavaScript,ReactJS,Ruby,Ruby on
          Rails and SQL
        </p>
      </div>
      <div className={styles.myImage}>
        <img src={profile} alt="myImage" />
      </div>
    </div>
  );
}

export default Description;
