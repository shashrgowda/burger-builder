import React from "react";
import classes from "./Toggle.module.css";

const Toggle = (props) => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Toggle;
