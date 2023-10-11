import React from 'react'
import Achievment from '../achievments/achievments'
import Copyright from '../copyright/copyright'
import Footer from '../footer/footer'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import "../../App.css";
import Service from '../services/Service'
import Abouts from '../about/Abouts'
import Contacts from '../contact/Contacts'

const Home = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <Service/>
      <Abouts/>
      <Achievment/>
      <Contacts/>
      <Footer/>
      <Copyright/>
    </>
  )
}
export default Home
