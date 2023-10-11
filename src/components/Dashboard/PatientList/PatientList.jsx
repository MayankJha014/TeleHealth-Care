import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import DoctorSidebar from "../Sidebar/DoctorSidebar";
import AppointedPatient from "./AppointedPatient";
import Pagination from "react-js-pagination";
import {
  getAppointedPatient,
  clearErrors,
} from "../../../actions/appointedPatientAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { NavLink } from "react-router-dom";

const PatientList = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { appointedPatients, appointedPatientCount, loading, resultPerPage } =
    useSelector(
      (state) => state.appointedPatients
      );
  const { isAuthenticated, user, error } = useSelector((state) => state.user);

  const { keyword } = useParams();
  

  const [currentPage, setCurrentPage] = useState(1);

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error)
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
    
    dispatch(getAppointedPatient(appointedPatientCount, currentPage, keyword,loading))
    // },
  }, [dispatch,currentPage, error]);

  return (
    <>
      {user && user.type === "doctor" ? <DoctorSidebar /> : <Sidebar />}
      <div className="page">
      <div className="main-content">
        <Header />
        <div className="recent-grid">
          <div className="projects">
            <div className="card">
              <div className="card-header">
                <h3>
                  <br />
                  <br />
                  Patients List:
                </h3>
              </div>
              <div className="card-body">
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
                        <AppointedPatient key={product._id} product={product} />
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
         
          {/* {resultPerPage < count &&  */}
          <div className="pagi">
            <Pagination
              activePage={currentPage}
              itemsCountPerPage={resultPerPage}
              totalItemsCount={appointedPatientCount}
              onChange={setCurrentPageNo}
              nextPageText="Next"
              prevPageText="Prev"
              className="pagination"
              itemClass="page-item"
              linkClass="page-link"
              activeClass="pageItemActive"
              activeLinkClass="pageLinkActive"
            />
          </div>
          </div>
          {/* } */}
        </div>
      </div>
      </div>
    </>
  );
};

export default PatientList;
