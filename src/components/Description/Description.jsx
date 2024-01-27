import React from 'react';
import styles from './Description.module.css';
import profile from '../../assets/desc/edwin.png';

function Description() {
  return (
    <div className={styles.container}>
        <div className={styles.myDescription}> 
        <h3> Hello, I'm Edwin</h3>
        <p> I'm a full stack developer majoring in JavaScript,React,Ruby on Rails and SQL</p>
        </div>
        <div className={styles.myImage}>
            <img src={profile} alt='myImage'/>

        </div>
    </div>
  )
}

export default Description