import React, { Component } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./Contact/ContactData";

class Checkout extends Component {
  CheckoutCancel = () => {
    this.props.history.goBack();
  };

  CheckoutContinue = () => {
    this.props.history.replace("/checkout/user-info");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ings}
          onCheckoutCancel={this.CheckoutCancel}
          onCheckoutContinue={this.CheckoutContinue}
        />
        <Route
          path={this.props.match.path + "/user-info"}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
