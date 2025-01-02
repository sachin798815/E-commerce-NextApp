import React from 'react';
import styles from '';

const CategoriesComponent = () => {
  const categories = ['Laptops', 'Smartphones', 'Accessories', 'Home Gadgets', 'Wearables'];

  return (
    <div className={styles.categories}>
      <h2>Shop by Categories</h2>
      <div className={styles.categoriesGrid}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <h3>{category}</h3>
            <button className={styles.viewButton}>View {category}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesComponent;
