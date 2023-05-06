import React from "react";
import classes from "./MyButton.module.css"
const Button = (props) => {
  return (<button  className={classes.mainButton} {...props}>{props.children}</button>)
};

export default Button;
