import {
    CONTACT_REQUEST,
    CONTACT_SUCCESS,
    CONTACT_FAIL,
    CONTACT_RESET,
    CLEAR_ERRORS,
  } from "../constants/contactConstant";


  import axios from "axios";


///COntact US SEction

export const contactUs = (userData) => async (dispatch) => {
    try {
      dispatch({ type: CONTACT_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*"
        },withCredentials: true
      };  
      const { data } = await axios.post(`http://localhost:3000/api/contact`, userData, config);
  
      dispatch({ type: CONTACT_SUCCESS, payload: data.contact });
    } catch (error) {
      dispatch({
        type: CONTACT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const video = (userData) => async (dispatch) => {
    try {
      dispatch({ type: CONTACT_REQUEST });
  
      const config = {
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*"
        },withCredentials: true
      };  
      const { data } = await axios.post(`http://localhost:3000/api/contact`, userData, config);
  
      dispatch({ type: CONTACT_SUCCESS, payload: data.contact });
    } catch (error) {
      dispatch({
        type: CONTACT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


   // Clearing Errors
   export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  