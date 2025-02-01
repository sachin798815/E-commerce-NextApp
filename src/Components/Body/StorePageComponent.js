import styles from './StorePageComponent.module.css';

const categories = [
  {
    title: 'Phones',
    items: ['iPhone 14', 'Samsung Galaxy S23', 'OnePlus 11', 'Google Pixel 8'],
    img: '/images/phones.jpg'
  },
  {
    title: 'Earphones',
    items: ['AirPods Pro', 'Sony WF-1000XM4', 'Bose QuietComfort Earbuds', 'JBL Tune 230NC'],
    img: '/images/earphones.jpg'
  },
  {
    title: 'Tablets',
    items: ['iPad Pro', 'Samsung Galaxy Tab S9', 'Microsoft Surface Go', 'Lenovo Tab P11'],
    img: '/images/tablets.jpg'
  },
  {
    title: 'Laptops',
    items: ['MacBook Pro', 'Dell XPS 15', 'HP Spectre x360', 'Lenovo ThinkPad X1'],
    img: '/images/laptops.jpg'
  },
  {
    title: 'Mouse',
    items: ['Logitech MX Master 3', 'Razer DeathAdder', 'Corsair Harpoon', 'Apple Magic Mouse'],
    img: '/images/mouse.jpg'
  }
];

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
