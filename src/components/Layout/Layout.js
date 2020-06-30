import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import { connect } from "react-redux";

class Layout extends Component {
  state = {
    showDrawer: false,
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
        <Toolbar
          isAuth={this.props.isAuth}
          toggleClicked={this.sideDrawerToggle}
        />
        <SideDrawer
          open={this.state.showDrawer}
          closed={this.closeSideDrawer}
          isAuth={this.props.isAuth}
        />
        <div className={classes.Content}></div>
        <main>{this.props.children}</main>
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.token !== null,
  };
};

export default connect(mapStateToProps)(Layout);
