const CategoryCarousel = ({ category }) => {
  return (
    <div className={styles.carouselContainer}>
      <div className={styles.header}>
        <h2 className={styles.carouselTitle}>{category.title}</h2>
        {category.link && (
          <a href={category.link} className={styles.viewAll}>View All</a>
        )}
      </div>
      <div className={styles.carousel}>
        {category.items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={category.img} alt={item} className={styles.productImage} loading="lazy" />
            <p className={styles.productName}>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
