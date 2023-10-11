import React from 'react'
import { NavLink } from 'react-router-dom';
import "../Dash.css";

const InDoctor = () => {
  return (
    <>
     <div className="customers">
                  <div className="card">
                    <div className="card-header" style={{ padding: "10px" }}>
                      <h3>Doctors in Line </h3>
                      <button>
                        <NavLink to="/dash/doctorList">
                          See all<span className="las la-arrow-right"></span>
                        </NavLink>
                      </button>
                    </div>
                    <div className="card-body">
                      <div className="customer">
                        <div>
                          <div>
                            <h4>Dr. Amir Usmani</h4>
                            <small>Tutor</small>
                          </div>
                        </div>
                        <div>
                          <span className="las la-user-circle"></span>
                          <span className="las la-comment"></span>
                          <span className="las la-phone"></span>
                        </div>
                      </div>
                      <div className="customer">
                        <div>
                          <div>
                            <h4>Dr. Priyanka Sharma</h4>
                            <small>Tutor</small>
                          </div>
                        </div>
                        <div>
                          <span className="las la-user-circle"></span>
                          <span className="las la-comment"></span>
                          <span className="las la-phone"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
    </>
  )
}

export default InDoctor
