import React, { Component } from "react";
import Axios from "../../../axios-order";
import { connect } from "react-redux";
import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Forms/Input";

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
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    // console.log(this.props.ingredients);
    this.setState({ loading: true });
    const formData = {};
    for (let eleType in this.state.orderForm) {
      formData[eleType] = this.state.orderForm[eleType].value;
    }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      userData: formData,
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
    console.log(formElements);

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

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ContactData);
