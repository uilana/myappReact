import React from "react";
import classes from "./Input.modules.css";
const MyInput = (props) => {
  console.log(props);
  return <input type="text"  className={classes.mainInput} {...props}></input>;
};

export default MyInput;
