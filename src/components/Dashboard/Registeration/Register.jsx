import React, { useEffect, useState, useContext } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../App";
import {
  registration,
  clearErrors,
} from "../../../actions/registerPatientAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import Loader from "../../Loader";
import { REGISTER_PATIENT_RESET } from "../../../constants/registerPatientConstant";


const Register = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { error, success, loading } = useSelector((state) => state.newPatient);
  const alert = useAlert();

  //   const history = useNavigate();

  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    address: "",
    city: "",
    state: "",
    gender: "",
    occupation: "",
    medicalHistory: "",
    drugHistory: "",
    anydrugHistory: "",
    allergy: "",
    familyHistory: "",
  });

  const {
    name,
    email,
    phone,
    age,
    address,
    city,
    state,
    gender,
    occupation,
    medicalHistory,
    drugHistory,
    anydrugHistory,
    allergy,
    familyHistory,
  } = register;

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("phone", phone);
    myForm.set("age", age);
    myForm.set("address", address);
    myForm.set("city", city);
    myForm.set("state", state);
    myForm.set("gender", gender);
    myForm.set("occupation", occupation);
    myForm.set("medicalHistory", medicalHistory);
    myForm.set("drugHistory", drugHistory);
    myForm.set("anydrugHistory", anydrugHistory);
    myForm.set("allergy", allergy);
    myForm.set("familyHistory", familyHistory);
    dispatch(registration(myForm));
    console.log("Form Register  submitted");
  };

  const registerDataChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }else{
      if (!loading) {
        if (success) {
          alert.success("SuccessFully Registered");
          dispatch({type:REGISTER_PATIENT_RESET})
        }
      }
      setRegister({
      ...register,
      ...gender,
      name: "",
      email: "",
      phone: "",
      age: "",
      address: "",
      city: "",
      state: "",
      occupation: "",
      medicalHistory: "",
      drugHistory: "",
      anydrugHistory: "",
      allergy: "",
      familyHistory: "",

    })}
    
  }, [dispatch, error,success, loading, alert]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            <div className="testbox">
              <form onSubmit={registerSubmit} className="register-form">
                <div className="banner">
                  <h1>Apiero-Medica</h1>
                </div>
                <br />
                <h2>Patient Record:</h2>
                <br />
                <div className="colums">
                  <div className="item">
                    <label for="name">
                      Patient Name <span>*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      name="name"
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                  <div className="item">
                    <label for="eaddress">
                      Email Address<span>*</span>
                    </label>
                    <input
                      id="eaddress"
                      type="text"
                      value={email}
                      name="email"
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
                    <label for="Address">
                      Patient Address :<span>*</span>
                    </label>
                    <input
                      id="Address"
                      type="text"
                      value={address}
                      name="address"
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                  <div className="item">
                    <label for="dstr">
                      City/District<span>*</span>
                    </label>
                    <input
                      id="dstr"
                      type="text"
                      value={city}
                      name="city"
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                  <div className="item">
                    <label for="sts">
                      State<span>*</span>
                    </label>
                    <input
                      id="sts"
                      type="text"
                      value={state}
                      name="state"
                      onChange={registerDataChange}
                      required
                    />
                  </div>
                </div>
                <div className="question">
                  <label>Gender:</label>
                  <div className="question-answer">
                    <div>
                      <input
                        type="radio"
                        value="Male"
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
                  <div className="question">
                    <label>Patient Occupation:</label>
                    <div className="question-answer">
                      <div>
                        <input
                          type="radio"
                          value="Government Service"
                          id="radio_4"
                          name="occupation"
                          onChange={registerDataChange}
                        />
                        <label for="radio_4" className="radio">
                          <span>Government Service</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="Private Service"
                          id="radio_5"
                          name="occupation"
                          onChange={registerDataChange}
                        />
                        <label for="radio_5" className="radio">
                          <span>Private Service</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="Business"
                          id="radio_6"
                          name="occupation"
                          onChange={registerDataChange}
                        />
                        <label for="radio_6" className="radio">
                          <span>Business</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="Self-Employed"
                          id="radio_7"
                          name="occupation"
                          onChange={registerDataChange}
                        />
                        <label for="radio_7" className="radio">
                          <span>Self-Employed</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="Farmer"
                          id="radio_8"
                          name="occupation"
                          onChange={registerDataChange}
                        />
                        <label for="radio_8" className="radio">
                          <span>Farmer</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="Daily Wage Occupationer"
                          id="radio_9"
                          name="occupation"
                          onChange={registerDataChange}
                        />
                        <label for="radio_9" className="radio">
                          <span>Daily Wage Occupationer</span>
                        </label>
                      </div>
                      <div>
                        <input
                          type="radio"
                          value="Other"
                          id="radio_10"
                          name="occupation"
                          onChange={registerDataChange}
                        />
                        <label for="radio_10" className="radio">
                          <span>Other</span>
                        </label>
                      </div>
                    </div>

                    <div className="item">
                      <label for="visit">
                        Past Medical History :<span>*</span>
                      </label>
                      <textarea
                        id="visit"
                        rows="3"
                        value={medicalHistory}
                        name="medicalHistory"
                        onChange={registerDataChange}
                      ></textarea>
                    </div>

                    <div className="question">
                      <label>Any drug history:</label>
                      <div className="question-answer">
                        <div>
                          <input
                            type="radio"
                            value="YES"
                            id="radio_11"
                            name="drugHistory"
                            onChange={registerDataChange}
                          />
                          <label for="radio_11" className="radio">
                            <span>YES</span>
                          </label>
                        </div>
                        <div>
                          <input
                            type="radio"
                            value="NO"
                            id="radio_12"
                            name="drugHistory"
                            onChange={registerDataChange}
                          />
                          <label for="radio_12" className="radio">
                            <span>NO</span>
                          </label>
                        </div>
                      </div>
                      <div className="colums">
                        <div className="item">
                          <label for="dhst">Drug History :(if yes)</label>
                          <input
                            id="dhst"
                            type="text"
                            value={anydrugHistory}
                            name="anydrugHistory"
                            onChange={registerDataChange}
                          />
                        </div>

                        <div className="item">
                          <label for="allrg">
                            {" "}
                            If any Hypersensitivity/Allergy :<span>*</span>
                          </label>
                          <input
                            id="allrg"
                            type="text"
                            value={allergy}
                            name="allergy"
                            onChange={registerDataChange}
                            required
                          />
                        </div>
                        <div className="item">
                          <label for="fhst">
                            {" "}
                            If any Family History :<span>*</span>
                          </label>
                          <input
                            id="fhst"
                            type="text"
                            value={familyHistory}
                            name="familyHistory"
                            onChange={registerDataChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="btn-block">
                        <button type="submit" value="Registeration">
                          Submit
                        </button>
                      </div>
                    </div>
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

export default Register;
