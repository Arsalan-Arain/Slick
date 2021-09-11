import React from "react";
import { connect } from "react-redux";
import Header from '../../../components/Header/Header';
import ProductCard from '../../../components/ProductCard/ProductCard';
import classes from './HomePage.css';
import Slider from '../../../components/Slider/Slider';

const homePage = (props) => {
  return (
    <div className={classes.Homepage}>
      <Header text={"Hey Awesome."} heading={"Welcome Back..."} />
      <div className={classes.homeContainer}>
        <Slider />
        <h2>Listed Products</h2>
        
        <div className={classes.Products}>
          {props.products.map(product => (
            <ProductCard key={product._id} name={product.name} category={product.category.name} price={product.price} image={product.image} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(homePage);