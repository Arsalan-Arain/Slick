import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Sidebar.css';
import logo from '../../assets/slick-logo.png';
import homeIcon from '../../assets/home-icon.svg';
import analyticsIcon from '../../assets/analytics-icon.svg';
import productsIcon from '../../assets/products-icon.svg';
import managementIcon from '../../assets/management-icon.svg';
import banner from '../../assets/explore-pro-banner.svg';

const sidebar = (props) => {
  return (
    <div className={classes.Sidebar}>
      <div className={classes.HeaderHeight}>
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <NavLink to="/" exact activeClassName={classes.activeLink}>
          <div>
            <img src={homeIcon} alt='icon' />Home
          </div>
        </NavLink>
        <NavLink to="/analytics" activeClassName={classes.activeLink}>
          <div>
            <img src={analyticsIcon} alt='icon' />Analytics
          </div>
        </NavLink>
        <NavLink to="/products" activeClassName={classes.activeLink}>
          <div>
            <img src={productsIcon} alt='icon' />Products
          </div>
        </NavLink>
        <NavLink to="/manage-banners" activeClassName={classes.activeLink}>
          <div>
            <img src={managementIcon} alt='icon' />Management
          </div>
        </NavLink>
      </nav>

      <div className={classes.Banner}>
        <img src={banner} alt='banner' />
      </div>
    </div>
  );
}

export default sidebar;