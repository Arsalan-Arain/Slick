import React from "react";
import classes from './Slider.css';

const slide = (props) => {
  return (
    <div className={props.class_Name}>
      <img src={props.link} alt="" />
    </div>
  )
}

export default slide;