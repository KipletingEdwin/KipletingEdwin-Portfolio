import styles from './Contact.module.css';

import React from 'react'

function Contact() {
  return (
    <div className={styles.container}>
        <h3>Contact</h3>
        <p> Feel free to reach out to me! </p>
        <div className={styles.contactForm}>
            <form className={styles.contactFormInputs}>
                <ul>
                    <li>
                        <input type='text' name='name' placeholder='Name' required/>
                    </li>

                    <li>
                        <input type='email' name='email' placeholder='Email' required/>
                    </li>

                    <li>
                        <input type='text' name='subject' placeholder='Subject' required/>
                    </li>

                    <li>
                         <textarea placeholder='Message' name='message' required></textarea>
                    </li>

                    <li>
                        <input type='submit' className={styles.flatButton} value="SEND"/>
                    </li>

                   

                </ul>
            </form>

        </div>
    </div>
  )
}

export default Contact