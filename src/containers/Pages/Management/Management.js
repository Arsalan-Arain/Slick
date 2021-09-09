import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";
import Header from '../../../components/Header/Header';
import classes from './Management.css';
import ManageBanners from './ManageBanners/ManageBanners';
import ManageProducts from './ManageProducts/ManageProducts';


const homePage = (props) => {
  const [productPage, setProductPage] = useState(false);

  const togglePageHandler = () => {
    setProductPage(!productPage)
  }


  const activeLinkStyle = {
    fontWeight: '600',
    color: '#6F8AE8'
  }
  return (
    <div className={classes.Management}>
      <Header text={""} heading={"Management"} />

      <div className={classes.pageBody}>
        <div className={classes.pageBodyHeader}>
          <div className={classes.headerItem}>
            <NavLink to="/manage-banners" activeStyle={activeLinkStyle}>Manage Banners</NavLink>
            <NavLink className={classes.marginLeft} activeStyle={activeLinkStyle} to="/manage-products">Manage Products</NavLink>
          </div>

          <div className={classes.headerItem}>
            <button>+ Add New</button>
          </div>
        </div>

        <Route path="/manage-products" component={ManageProducts} />
        <Route path="/manage-banners" component={ManageBanners} />
      </div>

    </div>
  );
}

export default homePage;