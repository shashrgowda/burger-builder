import React from "react";
import classes from "./Input.module.css";

const input = (props) => {
  let inputEle = null;
  switch (props.elementType) {
    case "input":
      inputEle = (
        <input
          className={classes.InputEle}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      inputEle = (
        <textarea
          className={classes.InputEle}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      inputEle = (
        <select
          className={classes.InputEle}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map((opt) => {
            return (
              <option key={opt.value} value={opt.value}>
                {opt.display}
              </option>
            );
          })}
        </select>
      );
      break;

    default:
      inputEle = (
        <input
          className={classes.InputEle}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputEle}
    </div>
  );
};

export default input;
