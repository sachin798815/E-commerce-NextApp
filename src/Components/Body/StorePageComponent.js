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
  }
];


const StorePageComponent = () => {
  return (
    <div>
      <h1>Shop by Categories</h1>
      {categories.map((category, index) => (
        <CategoryCarousel 
          key={index} 
          title={category.title} 
          items={category.items} 
          img={category.img} 
        />
      ))}
    </div>
  );
};


export default StorePageComponent;
