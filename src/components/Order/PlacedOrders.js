import React from "react";
import classes from "./PlacedOrders.module.css";

const PlacedOrder = (props) => {
  const ingredients = [];

  for (let ingName in props.ingredients) {
    ingredients.push({ name: ingName, amount: props.ingredients[ingName] });
  }

  const contents = ingredients.map((ig) => {
    return (
      <span
        style={{
          textTransform: "capitalize",
          display: "inline-block",
          margin: "0 8px",
          border: "1px solid #ccc",
          padding: "5px",
        }}
        key={ig.name}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });

  return (
    <div className={classes.PlacedOrder}>
      <p>Ingredients: {contents}</p>
      <p>
        Price: <strong>&#8377; {props.price} </strong>
      </p>
    </div>
  );
};

export default PlacedOrder;
