import React, { useState } from "react";
import classes from './FormBanner.css';

const form = (props) => {
  const [url, setUrl] = useState();

  const onChangeHandler = (event) =>{
    setUrl(event.target.value)
  }

  return (
    <form onSubmit={()=>props.clicked(url)}>
      <p className={classes.p}>ENTER IMAGE URL</p>
      <input onChange={onChangeHandler} required className={classes.input} type='url' placeholder='Write here...' /><br />
      <button className={classes.Button}>Save</button>
    </form>
  )
}
export default form;