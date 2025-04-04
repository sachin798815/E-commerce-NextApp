import styles from './StorePageComponent.module.css';
import CategoryCarousel from './CategoryCarousel';

const categories = [
  { title: 'Phones', items: ['iPhone 14', 'Samsung Galaxy S23'], img: '/images/phones.jpg' },
  { title: 'Earphones', items: ['AirPods Pro', 'Sony WF-1000XM4'], img: '/images/earphones.jpg' }
];

const StorePageComponent = () => {
  return (
    <div className={styles.storePage}>
      <h1>Shop by Categories</h1>
      {categories.map((category, index) => (
        <CategoryCarousel key={index} title={category.title} items={category.items} img={category.img} />
      ))}
    </div>
  );
};

export default StorePageComponent;
