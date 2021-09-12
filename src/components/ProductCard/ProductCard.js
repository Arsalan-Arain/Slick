import React from 'react';
import classes from './ProductCard.css';
import coinIcon from '../../assets/coin.svg';

const productCard = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.productShowcase} style={{ backgroundImage: `url(${props.image})` }}>
        <div className={classes.priceTag}>
          <img src={coinIcon} alt="product" />{props.price}
        </div>
      </div>
      <div className={classes.productDetails}>
        <span>{props.category.toUpperCase()}</span>
        <div><h4>{props.name}</h4></div>
      </div>
    </div>
  );
}

export default productCard;