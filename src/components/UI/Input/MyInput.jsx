import React from "react";
import classes from "./MyInput.modules.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
const MyInput = (props) => {
  // console.log(props);
  return (<input className={classes.mainInput} type="text"   {...props}></input>)
};

export default MyInput;
