import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearErrors, getAllPrescPatient } from "../../../actions/appointedPatientAction";

const Prescription = () => {

    const dispatch = useDispatch();

    const alert = useAlert();
    const history = useNavigate();
  
    const { error, loading, isAuthenticated } = useSelector(
      (state) => state.user
    );
  
    const [loginName, setLoginName] = useState("");
    const [loginPhone, setLoginPhone] = useState("");
  
    const prescSubmit = (e) => {
      e.preventDefault();
      console.log("Form SUbmitted Login");
      dispatch(getAllPrescPatient(loginName, loginPhone));
    };
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      }
    
    }, [dispatch]);

    
  return (
    <>
      <form onSubmit={prescSubmit}>
        <input
      
          name="name"
          type="text"
          required
          value={loginName}
          onChange={(e) => setLoginName(e.target.value)}
        />
        <input
      
          name="phone"
          type="text"
          required
          value={loginPhone}
          onChange={(e) => setLoginPhone(e.target.value)}
        />
         <input
                    name="Log In"
                    type="submit"
                  />
      </form>
    </>
  );
};

export default Prescription;
