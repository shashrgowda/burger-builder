import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./Contact/ContactData";

class Checkout extends Component {
  componentWillMount() {
    // this.props.onPurchaseOver();
  }

  CheckoutCancel = () => {
    this.props.history.goBack();
  };

  CheckoutContinue = () => {
    this.props.history.replace("/checkout/user-info");
  };

  render() {
    let summary = <Redirect to="/" />;

    if (this.props.ings) {
      const afterPurchase = this.props.purchased ? <Redirect to="/" /> : null;
      summary = (
        <div>
          {afterPurchase}
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
    return summary;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default connect(mapStateToProps)(Checkout);
