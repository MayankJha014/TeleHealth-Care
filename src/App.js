import "./App.css";
import React from "react"
import { BrowserRouter as Router,Route,Routes,HashRouter } from 'react-router-dom';

import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Services from "./components/services/services";
import About from "./components/about/about";
import Achievment from "./components/achievments/achievments";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Copyright from "./components/copyright/copyright";
import { useSelector } from 'react-redux';
import { loadUser } from './actions/userAction';
import store from './store'
import Login from "./components/Login/Login"
import NewDash from "./components/Dashboard/NewDash"
import DoctorList from "./components/Dashboard/DoctorList/DoctorList"
import VideoPresc from "./components/Dashboard/Prescption/VideoPresc"
import PatientList from './components/Dashboard/PatientList/PatientList';
import Prescription from "./components/Dashboard/Prescption/Prescription"
import LastPresc from "./components/Dashboard/Prescption/LastPresc"
import Appointment from "./components/Dashboard/Appointment/Appointment"
import Register from "./components/Dashboard/Registeration/Register"
import Logout from "./components/Logout"
import Home from "./components/Home/Home";
import SignUp from "./components/Signup/SignUp";
import VideoCall from "./components/videoCall";


function App() {
  const {isAuthenticated} = useSelector(state=>state.user)

  React.useEffect(()=>{
    
  
    store.dispatch(loadUser())
  },[])
  return (
    <HashRouter>
   
       <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/about' element={<About/>}/>
   <Route exact path='/register' element={<SignUp/>}/>
   <Route exact path="/contact" element={<Contact/>}/>
    <Route exact path="/login" element={<Login/>}/>
    <Route exact path='/logout' element={<Logout/>}/>
    <Route exact path="/dash" element={<NewDash/>}/>
    <Route exact path='/dash/doctorList' element={<DoctorList/>} />
    <Route exact path="/dash/presc" element={<VideoPresc/>}/>
   <Route exact path='/dash/patientList' element={<PatientList/>} />
   <Route exact path='/presc' element={<Prescription/>} />
   <Route exact path='/dash/presc/patient' element={<LastPresc/>} />
   <Route exact path="/dash/appointment" element={<Appointment/>}/>
   <Route exact path="/dash/videocall" element={<VideoCall/>}/>
   <Route exact path="/dash/register" element={<Register/>}/>
      
      </Routes>
      </HashRouter>
   
  );
}

export default App;
