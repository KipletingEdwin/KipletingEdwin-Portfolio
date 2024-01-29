import styles from './Contact.module.css';

import React from 'react'

function Contact() {
  return (
    <div>
        <h3> Fell free to reach out to me </h3>
        <div className={styles.contactForm}>
            <form>
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

                    <textarea placeholder='Message' name='message' required></textarea>

                </ul>
            </form>

        </div>
    </div>
  )
}

export default Contact