import Axios from "../../axios-order";

export const purchaseSuccess = (id, orderData) => {
  return {
    type: "PURCHASE_SUCCESS",
    orderId: id,
    orderData,
  };
};

export const purchaseFail = (err) => {
  return {
    type: "PURCHASE_FAIL",
    err,
  };
};

export const purchaseStart = () => {
  return {
    type: "PURCHASE_START",
  };
};

export const purchaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purchaseStart());
    Axios.post(`/orders.json?auth=${token}`, orderData)
      .then((res) => {
        dispatch(purchaseSuccess(res.data.name, orderData));
      })
      .catch((err) => {
        dispatch(purchaseFail(err));
      });
  };
};

export const purchaseNext = () => {
  return {
    type: "PURCHASE_NEXT",
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: "FETCH_ORDERS_SUCCESS",
    orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: "FETCH_ORDERS_FAIL",
    error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: "FETCH_ORDERS_START",
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryParams = `?auth=${token}&orderBy="userId"&equalTo="${userId}"`;
    Axios.get(`/orders.json${queryParams}`)
      .then((res) => {
        const fetched = [];
        for (let key in res.data) {
          fetched.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetched));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
