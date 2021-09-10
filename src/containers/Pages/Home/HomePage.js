import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from '../../../components/Header/Header';
import ProductCard from '../../../components/ProductCard/ProductCard';
import classes from './HomePage.css';
import Slider from '../../../components/Slider/Slider';
import * as actionCreators from '../../../redux/actions/index'
// lec 7 tak
const homePage = (props) => {
  useEffect(() => {
    props.onInitBanners();
    props.onInitProducts();
  }, [])

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
    banners: state.banners, // isse access kerne k liye --- props.banner --- for class-based: this.props.banners
    products: state.products
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onInitProducts: () => dispatch(actionCreators.initProucts()),
    onInitBanners: () => dispatch(actionCreators.initBanners())
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(homePage);