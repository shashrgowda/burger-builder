const initState = {
  orders: [],
  loading: false,
  purchased: false,
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "PURCHASE_NEXT":
      return {
        ...state,
        purchased: false,
      };

    case "PURCHASE_START":
      return {
        ...state,
        loading: true,
      };

    case "PURCHASE_SUCCESS":
      const newOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        loading: false,
        purchased: true,
        orders: state.orders.concat(newOrder),
      };
    case "PURCHASE_FAIL":
      return {
        ...state,
        loading: false,
      };

    case "FETCH_ORDERS_START":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_ORDERS_SUCCESS":
      return {
        ...state,
        orders: action.orders,
        loading: false,
      };

    case "FETCH_ORDERS_FAIL":
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
