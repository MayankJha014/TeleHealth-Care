import React, { useEffect, useState, useContext } from "react";
import "./Appointment.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  appointment,
} from "../../../actions/appointedPatientAction";
import Loader from "../../Loader";
import Sidebar from "../Sidebar/Sidebar";
import { APPOINT_PATIENT_RESET } from "../../../constants/appointedPatientConstant";


const Appointment = () => {
  const dispatch = useDispatch();

  const { error, success, loading } = useSelector((state) => state.patient);
  const alert = useAlert();

  const navigate = useNavigate();

  const [appoint, setAppoint] = useState({
    name: "",
    phone: "",
    age: "",
    problemcat: "",
    gender: "",
    dhst: "",
    allrg: "",
    history: "",
  });

  const { name, phone, age, problemcat, gender, dhst, allrg, history } =
    appoint;

  const appointmentSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("phone", phone);
    myForm.set("age", age);
    myForm.set("problemcat", problemcat);
    myForm.set("gender", gender);
    myForm.set("dhst", dhst);
    myForm.set("allrg", allrg);
    myForm.set("history", history);
    dispatch(appointment(myForm));
    console.log("Form APpointment  submitted");
  };

  const registerDataChange = (e) => {
    setAppoint({ ...appoint, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    } else {
      if (!loading) {
        if (success) {
          alert.success("SuccessFully Appointed");
          dispatch({ type: APPOINT_PATIENT_RESET });
        }
      }
      setAppoint({
        ...appoint,
        ...gender,
        name: "",
        phone: "",
        age: "",
        problemcat: "",
        dhst:"",
        allrg:"",
        history:""
      });
    }

   
  }, [dispatch, error,success, loading, alert]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Sidebar />
          <div>
            <div className="testbox">
              <form
                method="POST"
                onSubmit={appointmentSubmit}
                className="appointment-form"
              >
                <div className="banner">
                  <h1>Apiero-Medica</h1>
                </div>
                <br />
                <h2 className="animate-charcter">Booking Appointment:</h2>
                <br />
                <div className="colums">
                  <div className="item">
                    <label for="name">
                      Patient Name: <span>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                      required
                    />
                  </div>

                  <div className="item">
                    <label for="phone">
                      Phone<span>*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      name="phone"
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                  <div className="item">
                    <label for="age">
                      Patient Age :<span>*</span>
                    </label>
                    <input
                      id="age"
                      type="number"
                      value={age}
                      name="age"
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                  <div className="item">
                    <label for="problems"> Problem category:</label>

                    <select
                      name="problemcat"
                      type="text"
                      value={problemcat}
                      onChange={registerDataChange}
                      id="problems"
                      className="options"
                    >
                      <option
                        type="text"
                        name="problemcat"
                        onChange={registerDataChange}
                      >
                        Problem Category
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="General Physician"
                        onChange={registerDataChange}
                      >
                        Genral Physician
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="ENT"
                        onChange={registerDataChange}
                      >
                        ENT
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Dental/Oral"
                        onChange={registerDataChange}
                      >
                        Dental/Oral
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Orthopedic"
                        onChange={registerDataChange}
                      >
                        Orthopedic
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Dermatalogist"
                        onChange={registerDataChange}
                      >
                        Dermatalogist
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Opthalmalogist"
                        onChange={registerDataChange}
                      >
                        Opthalmalogist
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Cardiologist"
                        onChange={registerDataChange}
                      >
                        Cardiologist
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Pediologist"
                        onChange={registerDataChange}
                      >
                        Pediologist
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Endocrinologist"
                        onChange={registerDataChange}
                      >
                        Endocrinologist
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Gastrologist"
                        onChange={registerDataChange}
                      >
                        Gastrologist
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Dibaetalogist"
                        onChange={registerDataChange}
                      >
                        Dibaetalogist
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Homeopathy"
                        onChange={registerDataChange}
                      >
                        Homeopathy
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Ayurveda"
                        onChange={registerDataChange}
                      >
                        Ayurveda
                      </option>
                      <option
                        type="text"
                        name="problemcat"
                        value="Others"
                        onChange={registerDataChange}
                      >
                        Others
                      </option>
                    </select>
                  </div>
                </div>

                <div className="question">
                  <label>Gender:</label>
                  <div className="question-answer">
                    <div>
                      <input
                        type="radio"
                        value="male"
                        id="radio_1"
                        name="gender"
                        onChange={registerDataChange}
                      />
                      <label for="radio_1" className="radio">
                        <span>Male</span>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="Female"
                        id="radio_2"
                        name="gender"
                        onChange={registerDataChange}
                      />
                      <label for="radio_2" className="radio">
                        <span>Female</span>
                      </label>
                    </div>
                    <div>
                      <input
                        type="radio"
                        value="Prefer not to say"
                        id="radio_3"
                        name="gender"
                        onChange={registerDataChange}
                      />
                      <label for="radio_3" className="radio">
                        <span>Prefer not to say</span>
                      </label>
                    </div>
                  </div>
                  <br />
                  <div className="colums">
                    <div className="item">
                      <label for="dhst">
                        Chief Complaint: <span>*</span>
                      </label>
                      <input
                        id="dhst"
                        type="text"
                        value={dhst}
                        name="dhst"
                        onChange={registerDataChange}
                        required
                      />
                    </div>

                    <div className="item">
                      <label for="allrg">
                        {" "}
                        Duration of problem<span>*</span>
                      </label>
                      <input
                        id="allrg"
                        type="text"
                        value={allrg}
                        name="allrg"
                        onChange={registerDataChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="item">
                    <label for="visit">
                      Chief Complanit History :<span>*</span>
                    </label>
                    <textarea
                      id="visit"
                      rows="3"
                      name="history"
                      value={history}
                      onChange={registerDataChange}
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
      )}
    </>
  );
};

export default Appointment;
