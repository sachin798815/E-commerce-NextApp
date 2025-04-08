import styles from './CategoryCarousel.module.css';

const CategoryCarousel = ({ title, items, img }) => {
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>{title}</h2>
      <div className={styles.carousel}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={img} alt={item} className={styles.productImage} />
            <p className={styles.productName}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
