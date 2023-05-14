import React from "react";
import classes from "./Input.modules.css";
const Input = (props) => {
  return <input type="text" className={classes.mainInput} {...props}></input>;
};

export default Input;
