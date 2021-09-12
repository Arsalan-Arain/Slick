import React from "react";
import classes from './Loader.css';

const loader = () => (
  <div className={classes.Loader}>Loading...</div>
)

export default loader;

// add loader using <Suspense>  ---> module 11     lecture 30