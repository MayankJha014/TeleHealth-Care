import React from 'react'
// import "./Dashboard.css";

const AppointPatient = ({product}) => {
  return (
    <>
<tr>
              
              <td data-label="Name">{product.name}</td>
              
              <td data-label="Disease">{product.problemcat}</td>
              <td data-label="Age">{product.age}</td>
              </tr>
    </>
  )
}

export default AppointPatient