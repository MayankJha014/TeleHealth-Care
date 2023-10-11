import React, { useEffect } from 'react'
import Sidebar from './Sidebar/Sidebar'
import Header from './Header/Header'
import Badge from './Header/Badge'
import InPatient from './PatientList/InPatient'
import InDoctor from './DoctorList/InDoctor'
import DoctorSidebar from './Sidebar/DoctorSidebar'
import './Dash.css'

import AppointPatient from "./Appointment/Appointment";
import {
  getAppointedPatient,
  // clearErrors,
} from "../../actions/appointedPatientAction";
import { clearErrors, getRegisteredPatient } from '../../actions/registerPatientAction'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { loadUser } from '../../actions/userAction'



const NewDash = () => {

  const dispatch = useDispatch();
  // dispatch(loadUser())
  const history = useNavigate();

  const { appointedPatients, appointedPatientCount,resultPerPage ,  loading } =
    useSelector((state) => state.appointedPatients);
  const {registeredPatients}= useSelector((state)=>state.registeredPatients)
  const { isAuthenticated, user , error} = useSelector((state) => state.user);
  
  // console.log(user)

 

  // if (!isAuthenticated) {
  //   history("/login");
  // }
  
  useEffect(() => {
    dispatch(getRegisteredPatient())
    if (error) {
      // alert.error(error)
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
    dispatch(getAppointedPatient( ));
    // dispatch(loadUser())
  }, [dispatch,getAppointedPatient,getRegisteredPatient, isAuthenticated,  error]);

  return (
    <>
    { user && user.type ==="doctor"?
    (
      <>
       <DoctorSidebar/>
     <div className="main-content">
     <Header/>
     <main>
     <Badge/>
     <div className="recent-grid">
     <InPatient/>
     <InDoctor/>
     </div>
     </main>
     </div>
      </>
    ):
    (
      <>
       <Sidebar/>
     <div className="main-content">
     <Header/>
     <main>
     <Badge/>
     <div className="recent-grid">
     <InPatient/>
     <InDoctor/>
     </div>
     </main>
     </div>
      </>

    )}
     
    </>
  )
}

export default NewDash