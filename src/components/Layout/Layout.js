import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showDrawer: true,
  };

  closeSideDrawer = () => {
    this.setState({ showDrawer: false });
  };

  sideDrawerToggle = () => {
    this.setState({ showDrawer: !this.state.showDrawer });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggleClicked={this.sideDrawerToggle} />
        <SideDrawer
          open={this.state.showDrawer}
          closed={this.closeSideDrawer}
        />
        <div className={classes.Content}></div>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
