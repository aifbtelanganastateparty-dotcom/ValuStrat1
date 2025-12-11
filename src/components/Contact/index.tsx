import React from 'react';
import { useFadeInUp } from '../../hooks/useGSAPScrollAnimation';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const titleRef = useFadeInUp(0);
  const formRef = useFadeInUp(200);

  return (
    <section className={styles.contact}>
      <div className={styles.container}>
        <div ref={titleRef.ref} className={styles.header}>
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div ref={formRef.ref} className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Email</h3>
              <a href="mailto:info@valuestrat.com">info@valuestrat.com</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Phone</h3>
              <a href="tel:+1234567890">+1 (234) 567-890</a>
            </div>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>123 Innovation Street<br />Tech City, TC 12345</p>
            </div>
          </div>

          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={6} required></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

