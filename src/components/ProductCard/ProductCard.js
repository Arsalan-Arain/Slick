import React from 'react';
import classes from './ProductCard.css';
import coinIcon from '../../assets/coin.svg';

const productCard = (props) => {
  const url = "https://post.healthline.com/wp-content/uploads/2020/09/health-benefits-of-apples-1200x628-facebook-1200x628.jpg";
  return (
    <div className={classes.Card}>
      <div className={classes.productShowcase} style={{ backgroundImage: `url(${url})` }}>
        <div className={classes.priceTag}>
          <img src={coinIcon} alt="product" />{props.price}
        </div>
      </div>
      <div className={classes.productDetails}>
        <span>{props.category}</span>
        <div><h4>{props.name}</h4></div>
      </div>
    </div>
  );
}

export default productCard;