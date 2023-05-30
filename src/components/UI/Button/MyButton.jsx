import React from "react";
import classes from "./MyButton.module.css"
import '@fontsource/roboto/300.css';
const MyButton = (props) => {
  return (<button  className={classes.mainButton} {...props}>{props.children}</button>)
};

export default MyButton;
