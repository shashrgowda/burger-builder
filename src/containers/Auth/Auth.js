import React, { Component } from "react";

import Input from "../../components/UI/Forms/Input";
import Button from "../../components/UI/Button/Button";
import classes from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import { Redirect } from "react-router";

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your mail address",
        },
        value: "",
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Your password",
        },
        value: "",
      },
    },
    isSignUp: true,
  };

  componentDidMount() {
    if (!this.props.building && this.props.redirectPath !== "/") {
      this.props.onRedirectPath();
    }
  }

  inputEntered = (e, controlName) => {
    const newControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
      },
    };
    this.setState({ controls: newControls });
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };

  switchAuthMode = () => {
    this.setState((prevState) => {
      return { isSignUp: !prevState.isSignUp };
    });
  };

  render() {
    const formElements = [];
    for (let key in this.state.controls) {
      formElements.push({
        id: key,
        config: this.state.controls[key],
      });
    }

    let form = formElements.map((ele) => (
      <Input
        key={ele.id}
        elementType={ele.config.elementType}
        elementConfig={ele.config.elementConfig}
        value={ele.config.value}
        changed={(event) => this.inputEntered(event, ele.id)}
      />
    ));

    if (this.props.loading) {
      form = <Spinner />;
    }

    let errorMessage = null;

    if (this.props.error) {
      errorMessage = <p>{this.props.error}</p>;
    }

    let redirect = null;

    if (this.props.isAuth) {
      redirect = <Redirect to={this.props.redirectPath} />;
    }

    return (
      <div className={classes.Auth}>
        {redirect}
        {errorMessage}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthMode}>
          SWITCH TO
          {this.state.isSignUp ? " SIGN IN" : " SIGN UP"}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuth: state.auth.token !== null,
    building: state.burgerBuilder.building,
    redirectPath: state.auth.redirectPath,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
    onRedirectPath: () => dispatch(actions.authRedirect("/")),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
