import Axios from "../../axios-order";

export const addIngredient = (name) => {
  return {
    type: "ADD_INGREDIENT",
    ingredientName: name,
  };
};

export const removeIngredient = (name) => {
  return {
    type: "REMOVE_INGREDIENT",
    ingredientName: name,
  };
};

export const setIngredients = (ingredients) => {
  return {
    type: "SET_INGREDIENTS",
    ingredients,
  };
};

export const fetchFailed = () => {
  return {
    type: "FETCH_FAILED",
  };
};

export const initIngredients = () => {
  return (dispatch) => {
    Axios.get(
      "https://burger-builder-react-f935f.firebaseio.com/ingredients.json"
    )
      .then((response) => {
        dispatch(setIngredients(response.data));
      })
      .catch((error) => {
        dispatch(fetchFailed());
      });
  };
};
