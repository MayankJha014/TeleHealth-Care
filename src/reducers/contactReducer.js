import {
  CONTACT_REQUEST,
  CONTACT_SUCCESS,
  CONTACT_FAIL,
  CONTACT_RESET,
  CLEAR_ERRORS,
} from "../constants/contactConstant";

export const contactReducer = (state = { contact: {} }, action) => {
  switch (action.type) {
    case CONTACT_REQUEST:
      return {
        loading: true,
        
      };
    case CONTACT_SUCCESS:
      return {
        ...state,
        loading: false,
        contact: action.payload,
        success:true,
      };

    case CONTACT_FAIL:
      return {
        ...state,
        loading: false,
        contact: null,
        error: action.payload,
      };
      case CONTACT_RESET:
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
