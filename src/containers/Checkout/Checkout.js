import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactData from "./Contact/ContactData";

class Checkout extends Component {
  state = {
    ingredients: null,
  };

  componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
      ingredients[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredients, totalPrice: price });
  }

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
          ingredients={this.state.ingredients}
          onCheckoutCancel={this.CheckoutCancel}
          onCheckoutContinue={this.CheckoutContinue}
        />
        <Route
          path={this.props.match.path + "/user-info"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
