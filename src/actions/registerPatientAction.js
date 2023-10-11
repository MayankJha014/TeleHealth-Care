import axios from "axios";

import {
  GET_ALL_REGISTER_PATIENT_REQUEST,
  GET_ALL_REGISTER_PATIENT_SUCCESS,
  GET_ALL_REGISTER_PATIENT_FAIL,
  REGISTER_PATIENT_REQUEST,
  REGISTER_PATIENT_SUCCESS,
  REGISTER_PATIENT_FAIL,
  CLEAR_ERRORS,
} from "../constants/registerPatientConstant";

export const getRegisteredPatient = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_REGISTER_PATIENT_REQUEST,
    });
    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };

    let link = `http://localhost:3000/api/dash/register`;

    
    const { data } = await axios.get(link,config);

    dispatch({
      type: GET_ALL_REGISTER_PATIENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_REGISTER_PATIENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// New REgistartion
export const registration = (userData) => async (dispatch) => {
  try {
    dispatch({ type: REGISTER_PATIENT_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
        "Allow-Control-Allow-Origin": "*"
      },
      withCredentials: true
    };
    const { data } = await axios.post(
      `http://localhost:3000/api/dash/register`,
      userData,
      config
    );

    dispatch({ type: REGISTER_PATIENT_SUCCESS, payload: data.newPatient });
  } catch (error) {
    dispatch({
      type: REGISTER_PATIENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// CLearing Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
