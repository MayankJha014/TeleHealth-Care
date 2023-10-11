import axios from "axios";

import {
  GET_ALL_APPOINT_PATIENT_REQUEST,
  GET_ALL_APPOINT_PATIENT_SUCCESS,
  GET_ALL_APPOINT_PATIENT_FAIL,
  APPOINT_PATIENT_REQUEST,
  APPOINT_PATIENT_SUCCESS,
  APPOINT_PATIENT_FAIL,
  NEW_REVIEW_REQUEST,
  NEW_REVIEW_SUCCESS,
  NEW_REVIEW_FAIL,
  NEW_REVIEW_RESET,
  GET_ALL_PRESC_REQUEST,
  GET_ALL_PRESC_SUCCESS,
  GET_ALL_PRESC_FAIL,
  GET_last_PRESC_REQUEST,
  GET_last_PRESC_SUCCESS,
  GET_last_PRESC_FAIL,
  CLEAR_ERRORS,
} from "../constants/appointedPatientConstant";

export const getAppointedPatient =
  (keywork = "", currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({
        type: GET_ALL_APPOINT_PATIENT_REQUEST,
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
          "Allow-Control-Allow-Origin": "*"
        },
        withCredentials: true
      };

      let link = `http://localhost:3000/api/dash/appointment?page=${currentPage}`;

      const { data } = await axios.get(link, config);

      dispatch({
        type: GET_ALL_APPOINT_PATIENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_APPOINT_PATIENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// New Appointment
export const appointment = (userData) => async (dispatch) => {
  try {
    dispatch({ type: APPOINT_PATIENT_REQUEST });

    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };

    const { data } = await axios.post(
      `http://localhost:3000/api/dash/appointment`,
      userData,
      config
    );

    dispatch({ type: APPOINT_PATIENT_SUCCESS, payload: data.patient });
  } catch (error) {
    dispatch({
      type: APPOINT_PATIENT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const newPrescription = (reviewData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_REVIEW_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },withCredentials: true
    };

    const { data } = await axios.put(`http://localhost:3000/api/dash/presc`, reviewData, config);

    dispatch({
      type: NEW_REVIEW_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: NEW_REVIEW_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getLastPrescPatient = (name, phone) => async (dispatch) => {
  try {
    dispatch({
      type: GET_last_PRESC_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" } ,withCredentials: true};

    let link = `http://localhost:3000/api/dash/prescption`;

    const { data } = await axios.post(link, { name, phone }, config);

    dispatch({
      type: GET_last_PRESC_SUCCESS,
      payload: data.lastPresc,
      success: data.success,
    });
  } catch (error) {
    dispatch({
      type: GET_last_PRESC_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllPrescPatient = (name, phone) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_PRESC_REQUEST,
    });

    const config = { headers: { "Content-Type": "application/json" },withCredentials: true };

    let link = `http://localhost:3000/api/dash/prescptions`;

    const { data } = await axios.post(link, { name, phone }, config);

    dispatch({
      type: GET_ALL_PRESC_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_PRESC_FAIL,
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
