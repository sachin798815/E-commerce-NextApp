import styles from './ContactPageComponent.module.css';

const ContactPageComponent = () => {
  return (
    <div className={styles.contactPage}>
      <h1>Contact Us</h1>
      <p>We’re here to help! Reach out to us using the information below.</p>

      <div className={styles.contactDetails}>
        <div className={styles.contactItem}>
          <h2>Phone</h2>
          <p>+91 8899770055</p>
        </div>

        <div className={styles.contactItem}>
          <h2>Email</h2>
          <p>support@gadgethouse .com</p>
        </div>

        <div className={styles.contactItem}>
          <h2>Address</h2>
          <p>Shop no.3, Tech Market, Haryana</p>
        </div>
      </div>

      <div className={styles.supportSection}>
        <h2>Customer Support</h2>
        <p>
          Our support team is available Monday to Friday, 9:00 AM to 5:00 PM.  
          Feel free to reach out for any inquiries or assistance.
        </p>
      </div>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GadgetHouse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactPageComponent;
