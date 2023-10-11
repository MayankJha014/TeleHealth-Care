
import "./contact.css";
import map from "../../assets/map.png";
import React, { useState, useContext, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, contactUs } from "../../actions/contactAction";
import { CONTACT_RESET } from "../../constants/contactConstant";

const Contacts = () => {
    const dispatch = useDispatch();

    const { error, success, loading } = useSelector((state) => state.contact);
    const alert = useAlert();
  
    const history = useNavigate();
  
    const [contact, setContact] = useState({
      name: "",
      email: "",
      phone:"",
      department: "",
      message: "",
    });
  
    const { name, phone, email, department, message } = contact;
  
    const contactSubmit = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("phone", phone);
      myForm.set("department", department);
      myForm.set("message", message);
      dispatch(contactUs(myForm));
    };
  
    const registerDataChange = (e) => {
      setContact({ ...contact, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      if (error) {
        alert.error(error);
        dispatch(clearErrors());
      } else {
        if (!loading) {
          if (success) {
            alert.success("sent");
            dispatch({ type: CONTACT_RESET });
          }
        }
        setContact({
          ...contact,
          name: "",
          email: "",
          phone:"",
          department: "",
          message: "",
        });
       
      }
    }, [dispatch, loading,success, error, alert]);
  return (
    <>
      <div className="contact1">
        <div className="container5">
          <div className="row5">
            <div className="contact-left contact-size">
              <div className="contact-heading">Contact Us</div>
              <div className="contact-subheading">Get in Touch</div>
              <div className="contact-map">
                <img src={map} alt="" />
              </div>
            </div>
            <div className="contact-right contact-size">
              <div className="contact-box">
                <form method="POST"  onSubmit={contactSubmit}>
                  <label>Name</label>
                  <input
                  required
                  onChange={registerDataChange}
                  value={name}
                    type="text"
                    name="name"
                    id="full_name"
                    className="require"
                  />
                  <label>Email</label>
                  <input
                  required
                  onChange={registerDataChange}
                  value={email}
                    type="email"
                    name="email"
                    id="email"
                    className="require"
                  />
                  <label>Contact Number</label>
                  <input
                  required
                  onChange={registerDataChange}
                  value={phone}
                    type="number"
                    name="phone"
                    id="number"
                    className="number"
                  />
                  <label>Department</label>
                  <select
                  value={department}
                  onChange={registerDataChange}
                    id="department"
                    name="department"
                    className="contact-department"
                  >
                    <option name="department" onChange={registerDataChange}>select Department</option>
                    <option value="Doctor" onChange={registerDataChange}>Doctor</option>
                    <option value="Manager" onChange={registerDataChange}>Manager</option>
                    <option value="Patient" onChange={registerDataChange}>Patient</option>
                  </select>
                  <label>Your Message</label>
                  <textarea
                  required
                  onChange={registerDataChange}
                  value={message}
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                  ></textarea>
                  <button className="n-button">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contacts
