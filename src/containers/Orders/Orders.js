import React, { Component } from "react";
import axios from "../../axios-order";
import errorHandler from "../../hoc/errorHandler/errorHandler";

import PlacedOrder from "../../components/Order/PlacedOrders";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetched = [];
        for (let key in res.data) {
          fetched.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetched });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <PlacedOrder
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default errorHandler(Orders, axios);
