import React from "react";

import classes from "./Controls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controlBtns = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const ingredientControls = (props) => (
  <div className={classes.Controls}>
    <p>
      Current Price: <strong>&#8377;{props.price.toFixed(2)}</strong>
    </p>
    {controlBtns.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordering}
    >
      PLACE ORDER
    </button>
  </div>
);

export default ingredientControls;
