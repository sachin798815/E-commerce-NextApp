import styles from "./CategoryCarousel.module.css";

const CategoryCarousel = ({ category }) => {
  return (
    <div className={styles.carouselContainer}>
      <h2 className={styles.carouselTitle}>{category.title}</h2>
      <div className={styles.carousel}>
        {category.items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={category.img}
              alt={item || "Product Image"}
              className={styles.productImage}
              loading="lazy"
            />
            <p className={styles.productName}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;
