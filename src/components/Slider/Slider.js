import React, { useState, useEffect } from "react";
import Slide from './Slide';
import classes from './Slider.css';
// import Slide from "./Slide";

const slider = (props) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const moveDot = index => {
    setSlideIndex(index);
  }

  const banners = [
    {
      _id: "b1",
      link: "https://blog.creatopy.com/wp-content/uploads/2016/06/images-for-banner-ads.png"
    },
    {
      _id: "b2",
      link: "https://img.freepik.com/free-vector/abstract-website-banner-with-modern-shapes_1361-1738.jpg?size=626&ext=jpg"
    },
    {
      _id: "b3",
      link: "https://img.freepik.com/free-vector/stylish-glowing-digital-red-lines-banner_1017-23964.jpg?size=626&ext=jpg"
    }
  ];

  useEffect(() => {
    let timer = setInterval(() => {
      if (slideIndex == banners.length - 1) { setSlideIndex(0) }
      else { setSlideIndex(slideIndex + 1) }
    }, 4000);
    return () => { clearInterval(timer) }
  })

  return (
    <div className={classes.slider}>
        {banners.map(({ _id, link }, index) => (
          <Slide class_Name={slideIndex === index ? `${classes.slide} ${classes.activeSlide}` : classes.slide} key={_id} link={link} />
        ))}
        <div className={classes.containerDots}>
          {Array.from({ length: banners.length }).map((item, index) => (
            <div key={index} onClick={() => moveDot(index)} className={slideIndex === index ? `${classes.dot} ${classes.activeDot}` : classes.dot} ></div>
          ))}
      </div>
    </div >
  );
}

export default slider;