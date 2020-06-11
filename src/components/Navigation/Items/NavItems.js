import React from "react";
import classes from "./NavItems.module.css";
import SingleItem from "./SingleItem/SingleNavItem";

const NavItems = () => (
  <ul className={classes.NavItems}>
    <SingleItem link="/" active>
      Burger Builder
    </SingleItem>
    <SingleItem link="/">Checkout</SingleItem>
  </ul>
);

export default NavItems;
