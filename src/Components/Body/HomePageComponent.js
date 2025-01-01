import React from 'react';
import styles from './Homepage.module.css';

const HomepageComponent = () => {
  return (
    <div className={styles.homepage}>
      <header className={styles.heroSection}>
        <h1>Welcome to GadgetHouse</h1>
        <p>Your one-stop shop for the latest tech gadgets!</p>
        <button className={styles.shopNowButton}>Shop Now</button>
      </header>
      <section className={styles.featuredSection}>
        <h2>Featured Products</h2>
        <div className={styles.featuredGrid}>
          {/* for placeholder cards */}
          <div className={styles.productCard}>Product 1</div>
          <div className={styles.productCard}>Product 2</div>
          <div className={styles.productCard}>Product 3</div>
        </div>
      </section>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GadgetHouse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomepageComponent;
