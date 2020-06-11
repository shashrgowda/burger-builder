import React from "react";
import classes from "./SingleItem.module.css";

const SingleItem = (props) => {
  return (
    <li className={classes.SingleItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default SingleItem;
