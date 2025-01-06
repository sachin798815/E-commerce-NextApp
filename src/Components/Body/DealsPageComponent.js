import styles from './DealsPageComponent.module.css';

const DealsPageComponent = () => {
  return (
    <div className={styles.dealsPage}>
      <h1>Hot Deals & Special Offers</h1>
      <p>Don’t miss out on our best deals. Grab your favorite gadgets at unbeatable prices!</p>

      <section className={styles.dealsGrid}>
        <div className={styles.dealCard}>
          <h2>Redmi Note 12 Pro</h2>
          <p>Now: ₹19,999</p>
          <p>Was: ₹24,999</p>
        </div>
        <div className={styles.dealCard}>
          <h2>boAt Rockerz 450 Headphones</h2>
          <p>Now: ₹1,999</p>
          <p>Was: ₹3,499</p>
        </div>
        <div className={styles.dealCard}>
          <h2>HP Pavilion Gaming Laptop</h2>
          <p>Now: ₹57,999</p>
          <p>Was: ₹69,999</p>
        </div>
        <div className={styles.dealCard}>
          <h2>Noise ColorFit Smartwatch</h2>
          <p>Now: ₹2,499</p>
          <p>Was: ₹4,999</p>
        </div>
      </section>

      <section className={styles.specialOffer}>
        <h2>Limited-Time Offer!</h2>
        <p>Get **Flat 20% Off** on all accessories. Use code: **GADGET20** at checkout.</p>
      </section>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} GadgetHouse. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DealsPageComponent;
