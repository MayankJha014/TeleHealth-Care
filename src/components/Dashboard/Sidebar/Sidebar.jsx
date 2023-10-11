import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Dash.css";

const Sidebar = () => {
  return (
    <>
     <div className="sidebar">
        <div className="sidebar-brand">
          <h2>
            <span className="lab la-accusoft"></span>Apiero-Medica
          </h2>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              
              <NavLink to="/dash" >
                <span className="las la-igloo"></span>
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dash/appointment">
                <span className="las la-users"></span>
                <span>Appointment</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dash/register">
                <span className="las la-clipboard-list"></span>
                <span>Register Pateint</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dash/doctorList">
                <span className="las la-users"></span>
                <span>Doctors List</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dash/patientList">
                <span className="las la-users"></span>
                <span>Patients List</span>
              </NavLink>
            </li>
            <li>
              
              <NavLink to="/dash/presc/patient"  >
                <span className="las la-igloo"></span>
                <span>Prescption</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dash/videoCall">
                <span className="las la-users"></span>
                <span>video call</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout">
                <span className="las la-shipping-bag"></span>
                <span>Log-Out</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar