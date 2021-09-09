import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { Route } from "react-router-dom";
import Header from '../../../components/Header/Header';
import classes from './Management.css';
import ManageBanners from './ManageBanners/ManageBanners';
import ManageProducts from './ManageProducts/ManageProducts';
import manageBanners from "./ManageBanners/ManageBanners";


const homePage = (props) => {
  const [productPage, setProductPage] = useState(false);

  const togglePageHandler = () => {
    setProductPage(!productPage)
  }

  let pageBody = <ManageBanners />;
  if (productPage) {
    pageBody = <ManageProducts />;
  }

  const activePageStyle = {
    fontWeight: '600',
    color: '#6F8AE8'
  }

  return (
    <div className={classes.Management}>
      <Header text={""} heading={"Management"} />

      <div className={classes.pageBody}>
        <div className={classes.pageBodyHeader}>
          <div className={classes.headerItem}>
            <div onClick={togglePageHandler} className={`${classes.togglePageButton} ${!productPage ? classes.pageActive : null}`}>
              Manage Banners
              <div className={`${classes.activeBar} ${productPage ? classes.hide : null}`}></div>
            </div>
            <div onClick={togglePageHandler} className={`${classes.marginLeft} ${classes.togglePageButton} ${productPage ? classes.pageActive : null}`}>
              Manage Products
              <div className={`${classes.activeBar} ${!productPage ? classes.hide : null}`}></div>
            </div>
          </div>

          <div className={classes.headerItem}>
            <button>+ Add New</button>
          </div>
        </div>

        {pageBody}

      </div>

    </div>
  );
}

export default homePage;