import styles from './StorePageComponent.module.css';

const StorePageComponent = () => {
  return (
    <div className={styles.storePage}>
      <h1>Shop by Categories</h1>

      {/* Carousel for gadgets */}
      <div className={styles.carouselContainer}>
        <h2>Phones</h2>
        <div className={styles.carousel}>
          {/*for items*/}
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <h2>Earphones</h2>
        <div className={styles.carousel}>
          
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <h2>Tablets</h2>
        <div className={styles.carousel}>
          
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <h2>Laptops</h2>
        <div className={styles.carousel}>
          
        </div>
      </div>

      <div className={styles.carouselContainer}>
        <h2>Mouse</h2>
        <div className={styles.carousel}>
          
        </div>
      </div>
    </div>
  );
};

export default StorePageComponent;
