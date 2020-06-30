import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../Items/NavItems";
import Toggle from "../SideDrawer/Toggle/Toggle";

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <Toggle clicked={props.toggleClicked} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes.DesktopOnly}>
      <NavItems isAuth={props.isAuth} />
    </nav>
  </header>
);

export default Toolbar;
