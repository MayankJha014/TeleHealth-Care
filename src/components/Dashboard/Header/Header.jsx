import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { clearErrors } from '../../../actions/userAction';
import "../Dash.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const { isAuthenticated, user, error } = useSelector((state) => state.user);
  const{}=useSelector((state)=> state.user)

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
      <header>
              <h2>
                {/* <lable for=""> */}
                <span className="las la-bars"></span>
                {/* </lable> */}
                Dashboard
              </h2>

              <div className="search-wrapper">
                <span className="las la-search"></span>
                <input type="search" placeholder="Search Here" />
                {/* <Search/> */}
              </div>

              <div className="user-wrapper">
                {/* <img src="image" width="30px" height="30px" alt="" /> */}
               {/* { user ? <img src={user && user.avatar.url} width="30px" height="30px" alt="" /> : <img src="image" width="30px" height="30px" alt="" /> } */}
                <div>
                  <h4>{user ?<> {user.name}</> : " "}</h4>
                  {/* <h4>AKash</h4> */}
                  <small>Super admin</small>
                </div>
              </div>
            </header>
    </>
  )
}

export default Header