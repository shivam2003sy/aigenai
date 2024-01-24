// ./actions/authActions.js
import setAuthToken from '../utils/setAuthToken'; // Assuming you have a utility function to set the token in the headers
import { axiosClient } from '../utils/axiosClient';

// Load User
export const loadUser = (callback) => async (dispatch) => {
  const token = localStorage.getItem('token');
  console.log("token in load user", token);
  // beere auth 
 const  config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }
  try {
    const res = await axiosClient.get('/users/current', config); 
    console.log("load USER", res.data);
    dispatch({
      type: 'USER_LOADED',
      payload: res.data,
    });

    if (callback) {
      callback();
    }
  } catch (err) {
    dispatch({
      type: 'AUTH_ERROR',
    });
  }
};


// Register User
export const register = ({ username, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axiosClient.post('/users/register', body, config); 
    
    dispatch({
      type: 'REGISTER_SUCCESS',
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'REGISTER_FAIL',
    });
  }
};

// Login User
export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const body = JSON.stringify({ email, password });
  console.log("body in login action", body);
  try {
    const res = await axiosClient.post('/users/login', body, config);
    const token = res.data.accessToken;
    console.log(token);
    localStorage.setItem('token', token);

    await dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data,
    });
    await dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
    });
  }
};

export const googleLogin = (googleUser) => async (dispatch) => {
  try {
    const res = await axiosClient.post('/users/googlelogin', googleUser);
    console.log(res.data.accessToken);
    const token = res.data.accessToken;
    console.log(token);
    localStorage.setItem('token', token);
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: 'LOGIN_FAIL',
    });
  }
}

// Logout
export const logout = () => (dispatch) => {
  dispatch({ type: 'LOGOUT' });
};
