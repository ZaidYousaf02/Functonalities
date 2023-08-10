import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../Redux/slice/UserReducer";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function CreatePatient() {
  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();

    dispatch(
      addUser({
        full_name: nameRef.current.value,
        email: emailRef.current.value,
        age: ageRef.current.value,
      })
    );

    navigate("/d/patientDetails");
  }

  //   console.log({
  //     name: nameRef.current.value,
  //     email: emailRef.current.value,
  //     age: ageRef.current.value,
  //   });
  return (
    <>
      <Sidebar />
      <form onSubmit={onSubmit} className="form">
        <h1>Add Patient</h1>
        <div className="form-input">
          <label>Name</label>
          <input ref={nameRef} type="text" placeholder="Name" name="name" />
        </div>
        <div className="form-input">
          <label>Age</label>
          <input ref={ageRef} type="text" placeholder="Age" name="age" />
        </div>

        <div className="form-input">
          <label>Email</label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
          />
        </div>
        <button type="submit" className="sub-button">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePatient;
