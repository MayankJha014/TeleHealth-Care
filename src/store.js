import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { registeredPatientReducer, registerReducer } from "./reducers/registerPatientReducer";
import { appointedPatientReducer, appointReducer, getAllPrescPatientReducer, getLastPrescPatientReducer, newPrescriptionReducer } from "./reducers/appointedPatientReducer";
import { userReducer } from "./reducers/userReducer";
import { contactReducer } from "./reducers/contactReducer";




const reducer = combineReducers({
    registeredPatients:registeredPatientReducer,
    appointedPatients:appointedPatientReducer,
    user:userReducer,
    contact:contactReducer,
    patient:appointReducer,
    newPatient:registerReducer,
    newPrescription:newPrescriptionReducer,
    allPrescPatients:getAllPrescPatientReducer,
    lastPrescPatient:getLastPrescPatientReducer
})


let initialState = {};

const middleWare = [thunk];

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWare)))


export default store