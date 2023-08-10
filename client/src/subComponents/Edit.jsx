import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../Redux/slice/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import ImageUploader from "./ImageUploade";

function Edit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const existingUser = users.find((user) => user.patient_id === parseInt(id));
  const { full_name, email, age } = existingUser;

  // const [userDetails, setuserDetails] = useState({
  //   img: "",
  // });

  const nameRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const imgRef = useRef();
  // const handleChangeFile = (e) => {
  //   setuserDetails({
  //     ...userDetails,
  //     [e.target.name]: URL.createObjectURL(e.target.files[0]),
  //   });
  // };

  function onSubmit(e) {
    e.preventDefault();

    const updatedUser = {
      patient_id: existingUser.patient_id,
      full_name: nameRef.current.value,
      email: emailRef.current.value,
      age: ageRef.current.value,
    };

    dispatch(updateUser(updatedUser));
  }

  return (
    <>
      <div className="form-container">
        <Sidebar />
        <form onSubmit={onSubmit} className="edit-form">
          <h1>Edit Patient Details</h1>
          <ImageUploader />

          {/* First task For Image Uploading */}

          {/* <div className="img-upload">
            <img for="imge" className="image" src={userDetails.file} alt="" />
            <br />
            <input
              ref={imgRef}
              accept="image/*"
              type="file"
              placeholder="upload an image"
              name="file"
              onChange={handleChangeFile}
              id="imge"
            />
          </div> */}
          <div className="form-input">
            <label>Name</label>
            <input
              ref={nameRef}
              type="text"
              placeholder="Name"
              name="name"
              defaultValue={full_name}
            />
          </div>
          <div className="form-input">
            <label>Age</label>
            <input
              ref={ageRef}
              type="text"
              placeholder="Age"
              name="age"
              defaultValue={age}
            />
          </div>

          <div className="form-input">
            <label>Email</label>
            <input
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              name="email"
              id="email"
              defaultValue={email}
            />
          </div>
          <button
            type="submit"
            className="sub-button"
            onClick={navigate("/d/patientDetails")}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Edit;
