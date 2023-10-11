import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

// import { UserContext } from "../App"
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, logout } from "../actions/userAction";
import { useAlert } from "react-alert";
import { LOAD_USER_RESET } from "../constants/userConstant";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const alert = useAlert();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(logout());
    if (!loading) {
      // alert.success("Logout Successfully");
      dispatch({ type: LOAD_USER_RESET });
      history("/login");
    }
  }, [dispatch, isAuthenticated, error, alert]);

  return <>Logout ka page</>;
};

export default Logout;
