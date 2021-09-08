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
  const activeLinkStyle = {
    color: '#6F8AE8',
    fontWeight: '600'
  }
  return (
    <div className={classes.Sidebar}>
      <div className={classes.HeaderHeight}>
        <img src={logo} alt="logo" />
      </div>

      <nav>
        <ul>
          {/* style active pe nhi lag raha to ek variable mein save ker yahin onActiveStyle pe lagana hai */}
          <li><img src={homeIcon} alt='icon' /><NavLink to="/" exact activeStyle={activeLinkStyle}>Home</NavLink></li>
          <li><img src={analyticsIcon} alt='icon' /><NavLink to="/analytics" activeStyle={activeLinkStyle}>Analytics</NavLink></li>
          <li><img src={productsIcon} alt='icon' /><NavLink to="/products" activeStyle={activeLinkStyle}>Products</NavLink></li>
          <li><img src={managementIcon} alt='icon' /><NavLink to="/management" activeStyle={activeLinkStyle}>Management</NavLink></li>
        </ul>
      </nav>

      <div className={classes.Banner}>
        <img src={banner} alt='banner' />
      </div>
    </div>
  );
}

export default sidebar;