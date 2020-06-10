import React from "react";
import classes from "../Burger/Burger.module.css";
import BurgerIngredient from "./Ingredients/Ingredients";

const Burger = (props) => {
  let ingredientTypes = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, ele) => {
      return arr.concat(ele);
    }, []);

  if (ingredientTypes.length === 0) {
    ingredientTypes = <p>Please add ingredients!</p>;
  }
  console.log(ingredientTypes);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredientTypes}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
