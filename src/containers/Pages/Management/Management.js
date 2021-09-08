import React from "react";
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";
import Header from '../../../components/Header/Header';
import classes from './Management.css';
import ManageBanners from './ManageBanners/ManageBanners';
import ManageProducts from './ManageProducts/ManageProducts';


const homePage = (props) => {
  const activeLinkStyle = {

  }
  return (
    <div className={classes.Management}>
      <Header text={""} heading={"Management"} />

      <div className={classes.pageBody}>
        <div className={classes.pageBodyHeader}>
          <div className={classes.headerItem}>
            <NavLink to="/manage-banners">Manage Banners</NavLink>
            <NavLink className={classes.marginLeft} to="/manage-products">Manage Products</NavLink>
          </div>

          <div className={classes.headerItem}>
            <button>+ Add New</button>
          </div>
        </div>

        <Route path="/manage-products" component={ManageProducts} />
        <Route path="/manage-banners" component={ManageBanners} />

        {/* <ManageBanners /> */}
        {/* <ManageProducts /> */}
      </div>

    </div>
  );
}

export default homePage;