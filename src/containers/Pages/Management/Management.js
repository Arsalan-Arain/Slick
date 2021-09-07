import React from "react";
import Header from '../../../components/Header/Header';
import cssClasses from './Management.css';

const homePage = (props) => {
  return (
    <div className={cssClasses.Management}>
      <Header text={""} heading={"Management"} />

      <br/>
      Content <br /> <br /> Content
      
    </div>
  );
}

export default homePage;