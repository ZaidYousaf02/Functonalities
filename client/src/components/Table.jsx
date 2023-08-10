import React, { useEffect } from "react";
import { ListData } from "../utils/ListData";
import { useState } from "react";
import Search from "../subComponents/Search";
import FilterBtn from "../subComponents/FilterBtn";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../Redux/slice/UserReducer";
import Edit from "../Assets/Icons/edit.png";
import Delete from "../Assets/Icons/trash.png";
import AddUser from "../Assets/Icons/plus.png";
import DeleteAllUser from "../subComponents/DeleteAllUser";

function Table() {
  const [search, setSearch] = useState("");
  const [personAge, setPersonAge] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);
  const deleteUser = (index) => {
    dispatch(removeUser(index));
  };

  return (
    <>
      <Search setSearch={setSearch} />
      <FilterBtn setPersonAge={setPersonAge} />

      <Link to="/create" className="Create">
        Create User <img src={AddUser} alt="" />
      </Link>

      <div className="table-data">
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ height: "5vh" }}>
              <th className="heading6 semi-bold white">User Id</th>
              <th className="heading6 semi-bold white">Full Name</th>
              <th className="heading6 semi-bold white">Age</th>
              <th className="heading6 semi-bold white">Email</th>
              <th className="heading6 semi-bold white">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users
              ?.slice()
              ?.filter((patient) => {
                if (personAge === "") {
                  return patient;
                } else {
                  if (
                    personAge === "child" &&
                    +patient.age >= 0 &&
                    +patient.age <= 8
                  ) {
                    return patient;
                  }
                  if (
                    personAge === "teen" &&
                    +patient.age >= 9 &&
                    +patient.age <= 19
                  ) {
                    return patient;
                  }
                  if (
                    personAge === "adult" &&
                    +patient.age >= 20 &&
                    +patient.age <= 100
                  ) {
                    return patient;
                  }
                }
              })
              ?.filter((patient) => {
                return search.toLowerCase() === ""
                  ? patient
                  : patient.full_name.toLowerCase().includes(search) ||
                      patient.email.toLocaleLowerCase().includes(search);
              })
              // .filter((patient) => {
              //   return gender === "" ? patient : patient.gender === gender;
              // })
              ?.map((patient) => (
                <tr style={{ height: "6vh" }} key={patient.patient_id}>
                  <td
                    className="heading6 white"
                    onClick={() => navigate(`/patient/${patient.patient_id}`)}
                  >
                    {patient.patient_id}
                  </td>
                  <td
                    className="heading6 white"
                    onClick={() => navigate(`/patient/${patient.patient_id}`)}
                  >
                    {patient.full_name}
                  </td>
                  <td
                    className="heading6 white "
                    onClick={() => navigate(`/patient/${patient.patient_id}`)}
                  >
                    {patient.age}
                  </td>
                  <td
                    className="heading6 white"
                    onClick={() => navigate(`/patient/${patient.patient_id}`)}
                  >
                    {patient.email}
                  </td>

                  <div className="actions">
                    <Link to={`/edit/${patient.patient_id}`}>
                      <img src={Edit} alt="" />
                    </Link>
                    <button
                      style={{
                        marginLeft: "5px",
                        backgroundColor: "transparent",
                        border: "none",
                      }}
                      onClick={() => deleteUser(patient.patient_id)}
                    >
                      <img src={Delete} alt="" />
                    </button>
                  </div>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <DeleteAllUser />
    </>
  );
}

export default Table;
