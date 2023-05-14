import React from "react";
import classes from "./MyInput.modules.css";
const MyInput = (props) => {
  console.log(props);
  return <input type="text"  className={classes.mainInput} {...props}></input>;
};

export default MyInput;
