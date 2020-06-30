const initState = {
  ingredients: null,
  totalPrice: 60,
  error: false,
  building: false,
};

const INGREDIENT_PRICES = {
  lettuce: 40,
  cheese: 25,
  meat: 80,
  bacon: 70,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };

    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
        building: true,
      };

    case "SET_INGREDIENTS":
      return {
        ...state,
        ingredients: action.ingredients,
        totalPrice: 60,
        error: false,
        building: false,
      };

    case "FETCH_FAILED":
      return {
        ...state,
        error: true,
      };

    default:
      return state;
  }
};

export default reducer;
