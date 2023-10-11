import React, { useEffect } from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'
import DoctorSidebar from '../Sidebar/DoctorSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearErrors } from '../../../actions/userAction';
import Pagination from 'react-js-pagination';

const DoctorList = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { isAuthenticated, user , error} = useSelector((state) => state.user);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
  }, [dispatch,  error]);


  return ( <>
     { user.type ==="doctor"?
    (
      <DoctorSidebar />
    ):(
      <Sidebar/>
    )
}
      <div className="main-content">
      <Header/>
      <div className="recent-grid">
          <div className="projects">
            <div className="card">
              <div className="card-header">
                <h3>
                  <br />
                  <br />
                  Doctors List:
                </h3>
              </div>
              <div className="card-body">
                <table width="100%">
                  <thead>
                    <tr>
                      <td>Doctor Name</td>
                      <td>Department</td>
                      {/* <td>Age</td> */}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dr. Sufi Alemin</td>
                      <td>Tutor</td>
                      {/* <td>19</td> */}
                    </tr>
                    <tr>
                      <td>Dr. Sonali Saluja</td>
                      <td>Tutor</td>
                      {/* <td>19</td> */}
                    </tr>
                    <tr>
                      <td>Dr. Mrinal Tiwari</td>
                      <td>Tutor</td>
                      {/* <td>19</td> */}
                    </tr>
                    <tr>
                      <td>Dr. Amir Usmani</td>
                      <td>Tutor</td>
                      {/* <td>19</td> */}
                    </tr>
                    <tr>
                      <td>Dr. Nikhil Sonone</td>
                      <td>Tutor</td>
                      {/* <td>19</td> */}
                    </tr>
                    <tr>
                      <td>Dr. Shipra Gurha</td>
                      <td>Tutor</td>
                      {/* <td>19</td> */}
                    </tr>
                    <tr>
                      <td>Dr. Priyanka Sharma</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Jyoti Sisodia</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Aniket Prachand</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Almas Siddiqui</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Sudev C. S.</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Ritika Bhardwaj </td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Deepika Sironiya</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Tariq Ansari</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Aiswarya Suresh</td>
                      <td>Tutor</td>
                    </tr>
                    <tr>
                      <td>Dr. Shradha Gajbhiye</td>
                      <td>Tutor</td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default DoctorList