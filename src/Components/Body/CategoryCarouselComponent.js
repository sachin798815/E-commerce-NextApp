const CategoryCarousel = ({ title, items, img }) => {
  return (
    <div className={styles.carouselContainer}>
      <h2>{title}</h2>
      <div className={styles.carousel}>
        {items.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={img} alt={item} className={styles.productImage} />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
