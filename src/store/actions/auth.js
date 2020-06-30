import Axios from "axios";

export const authStart = () => {
  return {
    type: "AUTH_START",
  };
};

export const authSuccess = (idToken, userId) => {
  return {
    type: "AUTH_SUCCESS",
    idToken,
    userId,
  };
};

export const authFail = (error) => {
  return {
    type: "AUTH_FAIL",
    error,
  };
};

export const authRedirect = (path) => {
  return {
    type: "AUTH_REDIRECT",
    path,
  };
};

export const logout = () => {
  return {
    type: "AUTH_LOGOUT",
  };
};

export const checkAuthTimeout = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };
    let url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAQrUlpzRsoQKB7rvzyzymvP9FIkZASbJ8";

    if (!isSignUp) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAQrUlpzRsoQKB7rvzyzymvP9FIkZASbJ8";
    }
    Axios.post(url, authData)
      .then((res) => {
        console.log(res);
        dispatch(authSuccess(res.data.idToken, res.data.localId));
        dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err.response.data.error.message);
        dispatch(authFail(err.response.data.error.message));
      });
  };
};
