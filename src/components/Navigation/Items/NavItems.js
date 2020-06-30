import React from "react";
import classes from "./NavItems.module.css";
import SingleItem from "./SingleItem/SingleNavItem";

const NavItems = (props) => (
  <ul className={classes.NavItems}>
    <SingleItem link="/" exact>
      Burger Builder
    </SingleItem>
    {props.isAuth ? <SingleItem link="/orders">Orders</SingleItem> : null}
    {props.isAuth ? (
      <SingleItem link="/logout">Logout</SingleItem>
    ) : (
      <SingleItem link="/auth">Login</SingleItem>
    )}
  </ul>
);

export default NavItems;
