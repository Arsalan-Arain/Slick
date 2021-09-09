import React, { useState } from "react";
import Header from '../../../components/Header/Header';
import classes from './Management.css';
import ManageBanners from '../../../components/ManageBanners/ManageBanners';
import ManageProducts from '../../../components/ManageProducts/ManageProducts';

const homePage = (props) => {
  const [productPage, setProductPage] = useState(false);

  const togglePageHandler = () => {
    setProductPage(!productPage)
  }

  // in dono functions mein arrow func ki jaga jo dispatch k func honge wo aye ge
  // or sirf functions k naam hi aye ge na () bhi. () sirf param ho tab honge wo bhi doosre func mein a k
  const addBannerHandler = () => { };
  const addProductHandler = () => { };
  let addBtnHandler = addBannerHandler;

  let pageBody = <ManageBanners />;
  if (productPage) {
    pageBody = <ManageProducts />;
    addBtnHandler = addProductHandler;
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