import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearErrors } from '../../../actions/userAction';
import "../Dash.css";

const Badge = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { isAuthenticated, user, error } = useSelector((state) => state.user);

  const { appointedPatientCount } = useSelector((state) => state.appointedPatients);

  const { registeredPatientCount } = useSelector((state) => state.registeredPatients);

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      history("/login");
    }
  }, [dispatch]);
  return (
    <>
      <div className="cards">
            <div className="card-single">
              <div>
                {/* <h1 className="numtext">54</h1> */}
                <h1 className="numtext">{appointedPatientCount}</h1>
                <span>Appointed Patients</span>
              </div>
              <div>
                <span className="las la-users"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                {/* <h1 className="numtext">79</h1> */}
                <h1 className="numtext">{registeredPatientCount}</h1>
                <span>Registered Patients</span>
              </div>
              <div>
                <span className="las la-clipboard-list"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1 className="numtext">16</h1>
                <span>Doctor's Available</span>
              </div>
              <div>
                <span className="las la-shopping-bag"></span>
              </div>
            </div>
            <div className="card-single">
              <div>
                <h1>-</h1>
                <span>OPD Timing</span>
              </div>
              <div>
                <span className="las la-google-wallet"></span>
              </div>
            </div>
          </div>
    </>
  )
}

export default Badge
