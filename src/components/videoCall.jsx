import React, { useEffect } from 'react'
import Sidebar from './Dashboard/Sidebar/Sidebar'
import Header from './Dashboard/Header/Header'
import DoctorSidebar from '../components/Dashboard/Sidebar/DoctorSidebar'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearErrors } from '../actions/userAction';
import Pagination from 'react-js-pagination';
import logo from '../assets/logo-white.png'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const VideoCall = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { isAuthenticated,user ,loading, error} = useSelector((state) => state.user);
  const [code,setCode] = useState("")
  // console.log(user)

  const registerDataChange = (e) => {
    // setCode({ ...code, [e.target.name]: e.target.value });
    // console.log(code)
    setCode(e.target.value);
    console.log(code)
  };


  const videoCall =async(req,res)=>{
    // const config = { headers: { "Content-Type": "application/json" },withCredentials: true };

  //  const call =  await axios.get(`https://meet.jit.si/${code}`, config);
  // axios.get(`https://meet.jit.si/${code}`)
    
  res.redirect(`https://meet.jit.si/${code}`)
  //  return fetch(`https://meet.jit.si/${code}` ,config)
  // return call;
  }

  console.log(code)
  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
  }, [dispatch,loading,  error]);


  return ( <>
   {loading ? (
        <Loader />
      ) : (
        <>
         { user.type ==="doctor"?
    (
      <DoctorSidebar />
    ):(
      <Sidebar/>
    )
}
      <div className="main-content">
      <Header/>
      <div className="flex h-screen bg-gray-100">
            <div className="w-full max-w-lg m-auto bg-indigo-100 rounded-2xl p-5">
              <header className="mx-auto bg-transparent static shadow-none min-w-max">
                <img
                  className="w-60 mx-auto mb-5"
                  src={logo}
                />
              </header>
              <form   onSubmit={videoCall}>
                <div>
                  <label className="block mb-2 text-indigo-500" for="username">
                    VideoCall Code
                  </label>
                  <input
                    className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded-xl"
                    value={code}
                      name="code"
                      // type="text"
                      onChange={registerDataChange}
                   
                  />
                </div>          
                <div>
                 
                  <input
                    name="Join VideoCall"
                    className="w-full bg-indigo-700 hover:bg-orange-600 text-white font-bold py-2 px-4 mb-6 rounded-xl shadow-lg shadow-indigo-300"
                    type="submit"
                    target="_self"
                  />
             
                </div>
              </form>
              
            </div>
          </div>

      </div> 
      </>
      )
}
      
  
     
    </>
  )
}

export default VideoCall