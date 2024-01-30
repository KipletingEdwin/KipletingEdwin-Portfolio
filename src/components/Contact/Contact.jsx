import styles from "./Contact.module.css";
import React from "react";
import contactImage from "../../assets/contact/contact.png";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    let formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill out all fields");
      return;
    }

    emailjs
      .send("service_cxbqpxe", "template_mbjhj3t", formData)
      .then((response) => {
        alert("Email sent successfully:", response);
      })
      .catch((error) => {
        alert("Error sending email:", error);
      });
  }

  return (
    <div className={styles.container} id="contact">
      <div className={styles.containerImage}>
        <h3>Contact</h3>
        <img src={contactImage} alt="contact" />
      </div>
      <div className={styles.contactForm}>
        <p> Feel free to reach out to me! </p>
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
