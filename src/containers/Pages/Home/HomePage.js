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
          <ProductCard name={"Overcome Basic Sweatshirt"} category={"CASUAL"} price={"3222"} />
          <ProductCard name={"Overcome Purple"} category={"OUTDOOR"} price={"2000"} />
          <ProductCard name={"Apple"} category={"PARTY"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    banners: state.banners, // isse access kerne k liye --- props.banner --- for class-based: this.props.banners
    producs: state.producs
  }
}

export default connect(mapStateToProps)(homePage);