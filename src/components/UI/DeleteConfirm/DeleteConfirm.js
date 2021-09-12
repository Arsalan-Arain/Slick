import React from "react";
import classes from './DeleteConfirm.css';

const deleteConfirm = (props) => {
  return (
    <div className={classes.deleteBox}>
      <h2 className={classes.heading}>Are You Sure?</h2>
      <div className={classes.text}>Do you really want to delete this {props.item}? This process cannot be undone.</div>
      <button className={classes.Button} onClick={()=>{props.clicked(props.itemItem)}}>Delete</button>
    </div>
  )
}

export default deleteConfirm;