import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SingleItem.module.css";

const SingleItem = (props) => {
  return (
    <li className={classes.SingleItem}>
      <NavLink
        to={props.link}
        exact={props.exact}
        activeClassName={classes.active}
      >
        {props.children}
      </NavLink>
    </li>
  );
};

export default SingleItem;
