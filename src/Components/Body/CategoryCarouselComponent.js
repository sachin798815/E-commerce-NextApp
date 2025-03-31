const CategoryCarouselComponent = ({ title, items, img }) => {
    return (
      <div>
        <h2>{title}</h2>
        <div>
          {items.map((item, index) => (
            <div key={index}>
              <img src={img} alt={item} width="100" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  