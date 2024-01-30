import styles from "./Contact.module.css";

import React, {useState} from "react";

function Contact() {
    const [formError, setFormError] = useState(null);

    function sendEmail(e){
        e.preventDefault();
        let formData = {
            name : e.target.name.value,
            email : e.target.email.value,
            subject : e.target.subject.value,
            message : e.target.message.value,
        };
        if (!formData.name || !formData.email || !formData.subject || !formData.message){
            setFormError("Please fill out all fields");
            return;
        }

        setFormError(null);

        emailjs.send('service_cxbqpxe', 'template_mbjhj3t', formData)
        .then((response) => {
            alert('Email sent successfully:', response);
        })
        .catch((error) => {
            alert('Error sending email:', error);
        });
    }


  return (
    <div className={styles.container}>
      <h3>Contact</h3>
      <p> Feel free to reach out to me! </p>
      <div className={styles.contactForm}>
        <form className={styles.contactFormInputs} onSubmit={sendEmail}>
          <ul>
            <li>
              <input type="text" name="name" placeholder="Name" required />
            </li>

            <li>
              <input type="email" name="email" placeholder="Email" required />
            </li>

            <li>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </li>

            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>

            <li>
              <input type="submit" className={styles.flatButton} value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default Contact;
