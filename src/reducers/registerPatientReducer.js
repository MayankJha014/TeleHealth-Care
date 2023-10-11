import {
  GET_ALL_REGISTER_PATIENT_REQUEST,
  GET_ALL_REGISTER_PATIENT_SUCCESS,
  GET_ALL_REGISTER_PATIENT_FAIL,
  REGISTER_PATIENT_REQUEST,
  REGISTER_PATIENT_SUCCESS,
  REGISTER_PATIENT_FAIL,
  REGISTER_PATIENT_RESET,
  CLEAR_ERRORS,
} from "../constants/registerPatientConstant";

export const registeredPatientReducer = (
  state = { registeredPatients: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_REGISTER_PATIENT_REQUEST:
      return {
        loading: true,
        registeredPatients: [],
      };

    case GET_ALL_REGISTER_PATIENT_SUCCESS:
      return {
        loading: false,
        registeredPatients: action.payload.alreadyRegistered,
        registeredPatientCount: action.payload.registeredPatientCount,
        // registeredPatients: action.payload.registeredPatients,
        // productsCount: action.payload.productsCount,
        // resultPerPage: action.payload.resultPerPage,
        // filterProductsCount: action.payload.filterProductsCount
      };

    case GET_ALL_REGISTER_PATIENT_FAIL:
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

export const registerReducer = (state = { newPatient: {} }, action) => {
  switch (action.type) {
    case REGISTER_PATIENT_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case REGISTER_PATIENT_SUCCESS:
      return {
        loading: false,
        success: true,
        patient: action.payload,
      };
    case REGISTER_PATIENT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case REGISTER_PATIENT_RESET:
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
