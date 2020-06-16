import React from "react";
import classes from "./NavItems.module.css";
import SingleItem from "./SingleItem/SingleNavItem";

const NavItems = () => (
  <ul className={classes.NavItems}>
    <SingleItem link="/" exact>
      Burger Builder
    </SingleItem>
    <SingleItem link="/orders">Orders</SingleItem>
  </ul>
);

export default NavItems;
