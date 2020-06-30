const initState = {
  token: null,
  userId: null,
  error: null,
  loading: false,
  redirectPath: "/",
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "AUTH_START":
      return {
        ...state,
        error: null,
        loading: true,
      };

    case "AUTH_SUCCESS":
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      };

    case "AUTH_FAIL":
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case "AUTH_LOGOUT":
      return {
        ...state,
        token: null,
        userId: null,
      };

    case "AUTH_REDIRECT":
      return {
        ...state,
        redirectPath: action.path,
      };

    default:
      return state;
  }
};

export default reducer;
