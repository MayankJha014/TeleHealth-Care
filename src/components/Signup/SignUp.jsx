import React, { useState, useContext, useEffect } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userAction";

const SignUp = () => {
  const dispatch = useDispatch();

  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const alert = useAlert();
  const history = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    gender: "",
    dob: "",
    qualification: "",
    occupation: "",
    type:""
  });

  const {
    name,
    email,
    phone,
    address,
    dob,
    gender,
    qualification,
    occupation,
    password,
    type,
  } = user;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.jpg");

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("phone", phone);
    myForm.set("address", address);
    myForm.set("gender", gender);
    myForm.set("dob", dob);
    myForm.set("qualification", qualification);
    myForm.set("occupation", occupation);
    myForm.set("password", password);
    myForm.set("type", type);
    myForm.set("avatar", avatar);
    dispatch(register(myForm));
    console.log("Form SUbmitted Signup");
  };

  const registerDataChange = (e) => {
    // setUser({ ...user, [e.target.name]: e.target.value }); Before Cloudinary
    if (e.target.name === "avatar") {
      const reader = new FileReader(); // because i have to read

      reader.onload = () => {
        //load hote hi
        if (reader.readyState === 2) {
          //it has 3 sate 0means initial 1 processign 2done
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    //     if(isAuthenticated){
    //       console.log("SHi hai be")
    //         history("/account")
    //     }
  }, [dispatch, history, isAuthenticated, error, alert]);
  return (
    <>
      <form
        className="signUpForm"
        encType="multipart/form-data" // it is becouse we are not passing here text only but also images so
        onSubmit={registerSubmit}
      >
        <div className="signUpName">
          <input
            type="text"
            placeholder="Name"
            required
            name="name"
            value={name}
            onChange={registerDataChange}
          />
        </div>
        <div className="signUpEmail">
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={email}
            onChange={registerDataChange}
          />
          <input
            type="Number"
            placeholder="phone"
            required
            name="phone"
            value={phone}
            onChange={registerDataChange}
          />
          <input
            type="text"
            placeholder="address"
            required
            name="address"
            value={address}
            onChange={registerDataChange}
          />
          <input
            type="text"
            placeholder="gender"
            required
            name="gender"
            value={gender}
            onChange={registerDataChange}
          />
          <input
            type="text"
            placeholder="Type"
            required
            name="type"
            value={type}
            onChange={registerDataChange}
          />
          <input
            type="dob"
            placeholder="dob"
            required
            name="dob"
            value={dob}
            onChange={registerDataChange}
          />
          <input
            type="text"
            placeholder="qualification"
            required
            name="qualification"
            value={qualification}
            onChange={registerDataChange}
          />
          <input
            type="text"
            placeholder="occupation"
            required
            name="occupation"
            value={occupation}
            onChange={registerDataChange}
          />
        </div>
        <div className="signUpPassword">
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={registerDataChange}
          />
        </div>
        <div id="registerImage">
          <img src={avatarPreview} alt="Avatar Preview" />
          <input
            type="file"
            name="avatar"
            accept="image/*" //all trype of image
            onChange={registerDataChange}
          />
        </div>

        <input type="submit" value="Register" className="signUpBtn" />
      </form>
    </>
  );
};

export default SignUp;
