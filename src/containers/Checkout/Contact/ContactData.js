import React, { Component } from "react";
import Axios from "../../../axios-order";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    mobile: "",
    zipCode: "",
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Shash",
        address: {
          street: "Bengaluru",
          zipCode: "560010",
          country: "India",
        },
        email: "shashankr6@gmail.com",
      },
      deliveryMethod: "prime",
    };
    Axios.post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <input type="text" name="name" placeholder="Your Name" />
        <input type="email" name="email" placeholder="Your Email" />
        <input type="number" name="mobile" placeholder="Your Mobile No." />
        <input type="text" name="zip-code" placeholder="Your ZIP code" />
        <Button btnType="Success" clicked={this.orderHandler}>
          CONFIRM ORDER
        </Button>
      </form>
    );

    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Help us get to know each other!</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
