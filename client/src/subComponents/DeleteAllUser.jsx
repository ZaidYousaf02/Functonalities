import React from "react";
import { useDispatch } from "react-redux";
import { clearAllUser } from "../Redux/slice/UserReducer";
import X from "../Assets/Icons/x-mark.png";
const DeleteAllUser = () => {
  const dispatch = useDispatch();
  const deleteUsers = () => {
    dispatch(clearAllUser());
  };
  return (
    <>
      <button className="removeAll-btn" onClick={deleteUsers}>
        Clear All Users
        <img src={X} alt="" />
      </button>
    </>
  );
};
export default DeleteAllUser;
