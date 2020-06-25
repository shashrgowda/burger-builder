const initState = {
  ingredients: {
    lettuce: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 60,
  purchasable: false,
};

const INGREDIENT_PRICES = {
  lettuce: 40,
  cheese: 25,
  meat: 80,
  bacon: 70,
};

const reducer = (state = initState, action) => {
  // eslint-disable-next-line
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      };

    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      };

    default:
      return state;
  }
};

export default reducer;
