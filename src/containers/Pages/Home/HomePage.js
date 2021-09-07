import React from "react";
import Header from '../../../components/Header/Header';
import Carosel from '../../Carosel/Carosel';
import ProductCard from '../../../components/ProductCard/ProductCard';
import cssClasses from './HomePage.css';

const homePage = (props) => {
  return (
    <div className={cssClasses.Homepage}>
      <Header text={"Hey Awesome."} heading={"Welcome Back..."} />
      <div className={cssClasses.homeContainer}>
        <Carosel />
        <h2>Listed Products</h2>

        <div className={cssClasses.Products}>
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
          <ProductCard name={"Apple"} category={"Food"} price={"2000"} />
        </div>
      </div>
    </div>
  );
}

export default homePage;