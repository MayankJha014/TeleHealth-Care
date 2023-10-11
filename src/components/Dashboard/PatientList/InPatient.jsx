import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import "../Dash.css";
import AppointedPatient from "./AppointedPatient";
import {
  getAppointedPatient,
  clearErrors,
} from "../../../actions/appointedPatientAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const InPatient = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { appointedPatients, appointedPatientCount, loading } =
    useSelector((state) => state.appointedPatients);
  const { isAuthenticated, user, error } = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
    // dispatch(getAppointedPatient());
  }, [dispatch,  error]);
  return (
    <>
      <div className="projects">
                  <div className="card">
                    <div className="card-header">
                      <h3>Patients in qeue</h3>
                      <button>
                        <NavLink to="/dash/patientList">
                          See all <span className="las la-arrow-right"></span>
                        </NavLink>
                      </button>
                    </div>
                    <div className="card-body status">
                      <table width="100%">
                        <thead>
                          <tr>
                            <td>Patient's Name</td>
                            <td>Department</td>
                            <td>Age</td>
                          </tr>
                        </thead>
                        <tbody>
                          {appointedPatients &&
                            appointedPatients.map((product) => (
                              <AppointedPatient
                                key={product._id}
                                product={product}
                              />
                            ))}

                          {/* <tr>
                            <td>vanshita sharma</td>
                            <td>neurologist</td>
                            <td>19</td>
                          </tr>
                          <tr>
                            <td>vanshita sharma</td>
                            <td>neurologist</td>
                            <td>19</td>
                          </tr>
                          <tr>
                            <td>vanshita sharma</td>
                            <td>neurologist</td>
                            <td>19</td>
                          </tr>
                          <tr>
                            <td>vanshita sharma</td>
                            <td>neurologist</td>
                            <td>19</td>
                          </tr>
                          <tr>
                            <td>vanshita sharma</td>
                            <td>neurologist</td>
                            <td>19</td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default InPatient
