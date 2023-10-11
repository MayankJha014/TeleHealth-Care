import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  clearErrors,
  newPrescription,
} from "../../../actions/appointedPatientAction";
import { NEW_REVIEW_RESET } from "../../../constants/appointedPatientConstant";

const VideoPresc = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { error, loading, success } = useSelector(
    (state) => state.newPrescription
  );
  const alert = useAlert();

  const [prescription, setPrescription] = useState({
    doctorName: "",
    phone: "",
    name: "",
    diagnosis: "",
    labTests: "",
    medicine: "",
    remarks: "",
    caseHistory: "",
  });

  const {
    doctorName,
    phone,
    name,
    diagnosis,
    labTests,
    medicine,
    remarks,
    caseHistory,
  } = prescription;

  const prescriptionSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("doctorName", doctorName);
    myForm.set("phone", phone);
    myForm.set("name", name);
    myForm.set("diagnosis", diagnosis);
    myForm.set("labTests", labTests);
    myForm.set("medicine", medicine);
    myForm.set("remarks", remarks);
    myForm.set("caseHistory", caseHistory);

    dispatch(newPrescription(myForm));
    console.log("Form Prescription  submitted");

    // if(error){
    //   alert.error(error);
    // }
 
  };

  const prescriptionDataChange = (e) => {
    setPrescription({ ...prescription, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      // dispatch(clearErrors());
    } else {
      if (!loading) {
        if (success) {
          alert.success("Prescption Submitted Successfully");
          dispatch({ type: NEW_REVIEW_RESET });
        }
      }
      setPrescription({
        ...prescription,
        doctorName: " ",
        phone: " ",
        name: " ",
        diagnosis: " ",
        labTests: " ",
        medicine: " ",
        remarks: " ",
        caseHistory: " ",

        
      });
      
    }

  }, [dispatch, alert, error,success, history]);

  return (
    <>
      <div>
        <div className="testbox">
          <form method="POST" onSubmit={prescriptionSubmit}>
            <div className="banner">
              <h1>Apiero-Medica</h1>
            </div>
            <br />
            <h2>Prescription:</h2>
            <br />
            <div className="colums">
              <div className="item">
                <label for="name">
                  Doctor's Name: <span>*</span>
                </label>
                <input
                required
                  id="name"
                  type="text"
                  name="doctorName"
                  value={doctorName}
                  onChange={prescriptionDataChange}
                  
                />
              </div>

              <div className="item">
                <label for="name">
                  Patient Name:<span>*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  name="name"
                  onChange={prescriptionDataChange}
                  required
                />
              </div>
              <div className="item">
                <label for="phone">
                  Mobile No.:<span>*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  name="phone"
                  onChange={prescriptionDataChange}
                  required
                />
              </div>
            </div>

            <div>
              <br />
              <div className="colums">
                <div className="item">
                  <label for="diagnosis">
                    Diagnosis: <span>*</span>
                  </label>
                  <input
                    id="diagnosis"
                    type="text"
                    value={diagnosis}
                    name="diagnosis"
                    onChange={prescriptionDataChange}
                    required
                  />
                </div>

                <div className="item">
                  <label for="labTests">
                    lab Test<span>*</span>
                  </label>
                  <input
                    id="labTests"
                    type="text"
                    value={labTests}
                    name="labTests"
                    onChange={prescriptionDataChange}
                    required
                  />
                </div>
              </div>
              <div className="colums">
                <div className="item">
                  <label for="medicine">
                    Medicine: <span>*</span>
                  </label>
                  <input
                    id="medicine"
                    type="text"
                    value={medicine}
                    name="medicine"
                    onChange={prescriptionDataChange}
                    required
                  />
                </div>

                <div className="item">
                  <label for="remarks">
                    Remarks<span>*</span>
                  </label>
                  <input
                    id="remarks"
                    type="text"
                    value={remarks}
                    name="remarks"
                    onChange={prescriptionDataChange}
                    required
                  />
                </div>
              </div>
              <div className="item">
                <label for="visit">
                  Case History :<span></span>
                </label>
                <textarea
                  id="visit"
                  rows="3"
                  name="caseHistory"
                  value={caseHistory}
                  onChange={prescriptionDataChange}
                ></textarea>
              </div>
              <div className="btn-block">
                <button type="submit" value="Appointment">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default VideoPresc;
