import React from "react";
import Aux from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}: </span>
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>ORDER DETAILS</h3>
      <p>Your order contains:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Amount to pay: </strong>
        &#8377;{props.price}
      </p>
      <p style={{ fontWeight: "bold" }}>Proceed to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        CONFIRM
      </Button>
    </Aux>
  );
};

export default OrderSummary;
