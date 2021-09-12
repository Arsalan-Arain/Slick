import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Slide from './Slide';
import classes from './Slider.css';
// import Slide from "./Slide";

const slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveDot = index => {
    setSlideIndex(index);
  }

  useEffect(() => {
    let timer = setInterval(() => {
      if (slideIndex === props.banners.length - 1) { setSlideIndex(0) }
      else { setSlideIndex(slideIndex + 1) }
    }, 4000);
    return () => { clearInterval(timer) }
  })

  return (
    <div className={classes.slider}>
      {props.banners.map(({ _id, link }, index) => (
        <Slide class_Name={slideIndex === index ? `${classes.slide} ${classes.activeSlide}` : classes.slide} key={_id} link={link} />
      ))}
      <div className={classes.containerDots}>
        {Array.from({ length: props.banners.length }).map((item, index) => (
          <div key={index} onClick={() => moveDot(index)} className={slideIndex === index ? `${classes.dot} ${classes.activeDot}` : classes.dot} ></div>
        ))}
      </div>
    </div >
  );
}

const mapStateToProps = state => {
  return {
    banners: state.banners
  };
};

export default connect(mapStateToProps)(slider);