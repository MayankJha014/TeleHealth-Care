import {
  GET_ALL_APPOINT_PATIENT_REQUEST,
  GET_ALL_APPOINT_PATIENT_SUCCESS,
  GET_ALL_APPOINT_PATIENT_FAIL,
  APPOINT_PATIENT_REQUEST,
  APPOINT_PATIENT_SUCCESS,
  APPOINT_PATIENT_FAIL,
  APPOINT_PATIENT_RESET,
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

export const appointedPatientReducer = (
  state = { appointedPatients: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_APPOINT_PATIENT_REQUEST:
      return {
        loading: true,
        appointedPatients: [],
        todayAppointedPatients: [],
      };

    case GET_ALL_APPOINT_PATIENT_SUCCESS:
      return {
        loading: false,
        appointedPatients: action.payload.appointedPatients,
        appointedPatientCount: action.payload.appointedPatientCount,
        resultPerPage: action.payload.resultPerPage,
        todayAppointedPatients: action.payload.todayAppointedPatients,
      };

    case GET_ALL_APPOINT_PATIENT_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const appointReducer = (state = { patient: {} }, action) => {
  switch (action.type) {
    case APPOINT_PATIENT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case APPOINT_PATIENT_SUCCESS:
      return {
        loading: false,
        success: true,
        patient: action.payload,
      };
    case APPOINT_PATIENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case APPOINT_PATIENT_RESET:
      return {
        ...state,
        success: false,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const newPrescriptionReducer = (state = { presc: {} }, action) => {
  switch (action.type) {
    case NEW_REVIEW_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_REVIEW_SUCCESS:
      return {
        loading: false,
        success: action.payload,
      };
    case NEW_REVIEW_FAIL:
      return {
        ...state,
        loading: false,

        error: action.payload,
      };
    case NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};

export const getAllPrescPatientReducer = (
  state = { allPrescPatients: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_PRESC_REQUEST:
      return {
        loading: true,
        allPrescPatients: [],
      };

    case GET_ALL_PRESC_SUCCESS:
      return {
        loading: false,
        success: true,
        presc: action.payload.presc,
      };

    case GET_ALL_PRESC_FAIL:
      return {
        loading: true,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export const getLastPrescPatientReducer = (
  state = { lastPrescPatient: {} },
  action
) => {
  switch (action.type) {
    case GET_last_PRESC_REQUEST:
      return {
        loading: true,
      };

    case GET_last_PRESC_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.success,
        lastPresc: action.payload,
      };

    case GET_last_PRESC_FAIL:
      return {
        ...state,
        loading: false,
        lastPresc: null,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
