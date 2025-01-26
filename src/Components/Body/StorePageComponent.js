import styles from './StorePageComponent.module.css';

const StorePageComponent = () => {
  const phones = ['iPhone 14', 'Samsung Galaxy S23', 'OnePlus 11', 'Google Pixel 8'];
  const earphones = ['AirPods Pro', 'Sony WF-1000XM4', 'Bose QuietComfort Earbuds', 'JBL Tune 230NC'];
  const tablets = ['iPad Pro', 'Samsung Galaxy Tab S9', 'Microsoft Surface Go', 'Lenovo Tab P11'];
  const laptops = ['MacBook Pro', 'Dell XPS 15', 'HP Spectre x360', 'Lenovo ThinkPad X1'];
  const mouse = ['Logitech MX Master 3', 'Razer DeathAdder', 'Corsair Harpoon', 'Apple Magic Mouse'];

  return (
    <div className={styles.storePage}>
      <h1>Shop by Categories</h1>

      {/* Carousel for Phones */}
      <div className={styles.carouselContainer}>
        <h2>Phones</h2>
        <div className={styles.carousel}>
          {phones.map((phone, index) => (
            <div key={index} className={styles.card}>
              <p>{phone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel for Earphones */}
      <div className={styles.carouselContainer}>
        <h2>Earphones</h2>
        <div className={styles.carousel}>
          {earphones.map((earphone, index) => (
            <div key={index} className={styles.card}>
              <p>{earphone}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel for Tablets */}
      <div className={styles.carouselContainer}>
        <h2>Tablets</h2>
        <div className={styles.carousel}>
          {tablets.map((tablet, index) => (
            <div key={index} className={styles.card}>
              <p>{tablet}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel for Laptops */}
      <div className={styles.carouselContainer}>
        <h2>Laptops</h2>
        <div className={styles.carousel}>
          {laptops.map((laptop, index) => (
            <div key={index} className={styles.card}>
              <p>{laptop}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Carousel for Mouse */}
      <div className={styles.carouselContainer}>
        <h2>Mouse</h2>
        <div className={styles.carousel}>
          {mouse.map((item, index) => (
            <div key={index} className={styles.card}>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StorePageComponent;
