import React from 'react';
import cssClasses from './Sidebar.css';
import logo from '../../assets/slick-logo.png';

const sidebar = (props) => {
  return (
    <div className={cssClasses.Sidebar}>
      <div className={cssClasses.HeaderHeight}>
        <img src={logo} />
      </div>
      <br />
      nav links <br />
      pro account banner
    </div>
  );
}

export default sidebar;