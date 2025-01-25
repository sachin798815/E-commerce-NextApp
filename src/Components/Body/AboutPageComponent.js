import styles from './AboutPageComponent.module.css';

const AboutPageComponent = () => {
  return (
    <div className={styles.aboutPage}>
      <h1 className={styles.heading}>About GadgetHouse</h1>
      <p className={styles.parah}>
        Welcome to <strong>GadgetHouse</strong>! We are your one-stop shop for the latest tech gadgets, from smartphones and laptops to smart home devices and accessories.
        Our mission is to bring you the best gadgets at unbeatable prices, ensuring you stay ahead of the curve with the latest innovations in technology.
      </p>
      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          At GadgetHouse, we aim to provide a seamless shopping experience for tech enthusiasts. Our carefully curated collection ensures you find exactly what you’re looking for.
        </p>
      </section>
      <section className={styles.teamSection}>
        <h2>Meet the Team</h2>
        <p>
          Our team of tech experts is passionate about technology and committed to delivering top-notch customer service.
        </p>
      </section>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GadgetHouse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPageComponent;
