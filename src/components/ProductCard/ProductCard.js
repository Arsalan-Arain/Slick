import React from 'react';
import cssClasses from './ProductCard.css';
import coinIcon from '../../assets/coin.svg';

const productCard = (props) => {
  const url = "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg";
  return (
    <div className={cssClasses.Card}>
      <div className={cssClasses.productShowcase} style={{ backgroundImage: `url(${url})` }}>
        <div className={cssClasses.priceTag}>
          <img src={coinIcon} alt="product" />{props.price}
        </div>
      </div>
      <div className={cssClasses.productDetails}>
        <span>{props.category}</span>
        <h4>{props.name}</h4>
      </div>
    </div>
  );
}

export default productCard;