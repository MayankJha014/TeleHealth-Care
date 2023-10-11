import {
    LOGIN_REQUEST,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    CLEAR_ERRORS,
  } from "../constants/userConstant";
  
  import axios from "axios";
  
  export const login = (email, password) => async (dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*"
        },
        // 'withCredentials':true
        withCredentials: true,
      };  
      const { data } = await axios.post(
        `http://localhost:3000/api/login`,
        // `/api/login`,
        { email, password } ,
        config
      );
  
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
  };
  
  
  // Register
  export const register = (userData) => async (dispatch) => {
      try {
        dispatch({ type: REGISTER_USER_REQUEST });
    
        const config = { headers: { "Content-Type": "multipart/form-data" },withCredentials: true };
    
        const { data } = await axios.post(`http://localhost:3000/api/register`, userData, config);
        // const { data } = await axios.post(`/api/register`, userData, config);
    
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
      } catch (error) {
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: error.response.data.message,
        });
      }
    };
  

    // Load User
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: LOAD_USER_REQUEST });
    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };

    const { data } = await axios.get(`http://localhost:3000/api/me`, config);
    // const { data } = await axios.get(`/api/me`);

    dispatch({ type: LOAD_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
  }
};
  


  
  // Logout User
  export const logout = () => async (dispatch) => {
    try {
      const config = { headers: { "Content-Type": "application/json" },withCredentials: true };
      await axios.get(`http://localhost:3000/api/logout`, config);  // as here we dont need any data so
      // await axios.get(`/api/logout`);  // as here we dont need any data so
  
      dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
      dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
  };
  
  
  // Clearing Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  