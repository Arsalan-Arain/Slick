import React from "react";
import { NavLink } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import classes from './Management.css';

const homePage = (props) => {
  const activeLinkStyle = {

  }
  return (
    <div className={classes.Management}>
      <Header text={""} heading={"Management"} />

      <div className={classes.pageBody}>
        <div className={classes.pageBodyHeader}>
          <div className={classes.headerItem}>
            <NavLink to="/manage-banners" exact activeStyle={activeLinkStyle}>Manage Banners</NavLink>
            <NavLink className={classes.marginLeft} to="/manage-products" exact activeStyle={activeLinkStyle}>Manage Products</NavLink>
          </div>

          <div className={classes.headerItem}>
            <button>+ Add New</button>
          </div>
        </div>

        <div className={classes.nestedPageBody}>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
          <div className={classes.item}></div>
        </div>
      </div>

    </div>
  );
}

export default homePage;