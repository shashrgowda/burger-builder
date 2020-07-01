import React, { Component } from "react";
import Axios from "../../../axios-order";
import { connect } from "react-redux";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Forms/Input";
import errorHandler from "../../../hoc/errorHandler/errorHandler";
import * as actions from "../../../store/actions/index";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      address: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Delivery Address",
        },
        value: "",
      },
      zipCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Zip Code",
        },
        value: "",
      },
      city: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Delivery City",
        },
        value: "",
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
      },
      mobile: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Your Contact No.",
        },
        value: "",
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "30 mins or free", display: "30 Mins or Free" },
            { value: "asap", display: "ASAP" },
          ],
        },
        value: "30 mins or free",
      },
    },
  };

  orderHandler = (e) => {
    e.preventDefault();

    const formData = {};
    for (let eleType in this.state.orderForm) {
      formData[eleType] = this.state.orderForm[eleType].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      userData: formData,
      userId: this.props.userId,
    };

    this.props.onOrder(order, this.props.token);
  };

  inputEntered = (e, eleType) => {
    const enteredForm = {
      ...this.state.orderForm,
    };

    const updatedForm = { ...enteredForm[eleType] };

    updatedForm.value = e.target.value;
    enteredForm[eleType] = updatedForm;
    this.setState({ orderForm: enteredForm });
  };

  render() {
    const formElements = [];
    for (let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    // console.log(formElements);

    let form = (
      <form onSubmit={this.orderHandler}>
        {formElements.map((ele) => {
          return (
            <Input
              key={ele.id}
              elementType={ele.config.elementType}
              elementConfig={ele.config.elementConfig}
              value={ele.config.value}
              changed={(event) => this.inputEntered(event, ele.id)}
            />
          );
        })}
        <Button btnType="Success">CONFIRM ORDER</Button>
      </form>
    );

    if (this.props.loading) {
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

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    userId: state.auth.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrder: (orderData, token) =>
      dispatch(actions.purchaseBurger(orderData, token)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(errorHandler(ContactData, Axios));
