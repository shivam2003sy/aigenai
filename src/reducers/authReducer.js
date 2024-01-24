// ./reducers/aaaReducer.js
import { useNavigate } from "react-router-dom";

const initialState = {
  token: null,
  isAuthenticated: false,
  user: null,
  loading: true,
};

  const authReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case "USER_LOADED":
        console.log ("initial state", initialState);
        console.log ("payload", payload);
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload,
        };
      case "REGISTER_SUCCESS":
        return {
          ...state,
          ...payload,
          isAuthenticated: false,
          loading: false,
        };
        
      case "LOGIN_SUCCESS":
        return {
          ...state,
          isAuthenticated: true,
          token : payload.accessToken,
          loading: false,
        };
      case "REGISTER_FAIL":
      case "AUTH_ERROR":
      case "LOGIN_FAIL":
      case "LOGOUT":
        localStorage.removeItem("token");
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
      default:
        return state;
    }
  };

export default authReducer;