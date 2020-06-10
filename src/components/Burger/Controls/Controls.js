import React from "react";

import classes from "./Controls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controlBtns = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const ingredientControls = (props) => (
  <div className={classes.Controls}>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
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
  </div>
);

export default ingredientControls;
