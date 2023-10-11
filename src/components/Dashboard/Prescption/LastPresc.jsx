import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  clearErrors,
  getAllPrescPatient,
  getLastPrescPatient,
} from "../../../actions/appointedPatientAction";
import { useReactToPrint } from "react-to-print";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import "./LastPresc.css";

const LastPresc = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const dispatch = useDispatch();

  const alert = useAlert();
  const history = useNavigate();

  const { lastPresc, success ,error, loading} = useSelector((state) => state.lastPrescPatient);

  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");


  const prescSubmit = (e) => {
    e.preventDefault();
    console.log("Form SUbmitted ");
    dispatch(getLastPrescPatient(Name, Phone));
    
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
   
  }, [dispatch,success,error, lastPresc]);

  return (
    <>
      <Sidebar />
      <Header />
      
      <form className="form" onSubmit={prescSubmit}>
        <h2 className="hi">Get Your Prescption</h2>
        <input
          placeholder="Enter Your Name Here"
          name="name"
          type="text"
          required
          value={Name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter Your Phone No."
          name="phone"
          type="text"
          required
          value={Phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input name="Log In" type="submit" />
      </form>
      {success && (
        <>
        <form ref={componentRef} className="presc">
          
            <div> Doctor Name: <span/>
            <input
            className="box"
              //  name="name"
              type="text"
              //  required
              value={lastPresc.doctorName}
              readOnly
            />
            </div>
            <div>
            Patient Name:<span/>
            <input
             className="box"
              //  name="text"
              type="text"
              //  required
              value={lastPresc.name}
              readOnly
            />
          
          
          </div><div>
          Diagnosis: <span/>
            <input
             className="box"
              //  name="name"
              type="text"
              //  required
              value={lastPresc.diagnosis}
              readOnly
            />
            </div><div>
            Lab Test: <span/>
            <input
             className="box"
              //  name="name"
              type="text"
              //  required
              value={lastPresc.labTests}
              readOnly
            />
          </div>
          
          <div>
          Medicine: <span/>
            <input
             className="box"
              //  name="name"
              type="text"
              //  required
              value={lastPresc.medicine}
              readOnly
            />
            </div><div>
            Checked On: <span/>
            <input
             className="box"
              //  name="name"
              type="text"
              //  required
              value={lastPresc.createdAt.substring(0,10)}
              readOnly
            /></div>
          
        </form>
        <button onClick={handlePrint} className="print">
        Print
      </button>
      </>
      )}
    </>
  );
};

export default LastPresc;
