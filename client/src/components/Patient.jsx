import React, { useState, useEffect } from "react";
import { ListData } from "../utils/ListData";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../logo.svg";
import Sidebar from "./Sidebar";

function Patient() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        const patientData = ListData.find(
          (patient) => patient.patient_id === parseInt(id, 10)
        );
        setUserData(patientData ? [patientData] : []);
      }, 1000);
    };

    fetchData();
  }, [id]);

  return (
    <>
      {userData.length === 0 ? (
        <div className="loading">
          <img className="rotate" src={Logo} />
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="information-container">
            <h2 className="heading2 bold">Patient Details</h2>
            <div className="patient-container">
              {userData.map((patient) => (
                <div key={patient.patient_id} className="list">
                  <h1>{patient.full_name}</h1>
                  <h3>{patient.email}</h3>
                  <h4>Age : {patient.age}</h4>
                </div>
              ))}
              <div className="summary">
                <h3>Summary</h3>
                <div className="bar"></div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Tenetur sunt vel amet consectetur maxime natus iste
                  praesentium cupiditate, sequi tempora. Ipsum amet tempore
                  itaque dolores culpa sint aperiam quos alias facere. Laborum,
                  hic eius commodi laboriosam magnam dolorem optio! Eveniet ut
                  nihil numquam quia accusantium natus tempore, dignissimos
                  velit veniam esse cupiditate assumenda alias necessitatibus
                  harum maxime quod libero. Inventore cum alias recusandae
                  tenetur, nihil vitae quod libero, nesciunt assumenda quae
                  perspiciatis debitis beatae reiciendis maxime blanditiis
                  facilis asperiores quia placeat vero illum ex.
                </p>
              </div>
              <div className="diseases">
                <h3>Diseases</h3>
                <div className="bar"></div>
                <ul>
                  <li>Fever</li>
                  <li>Covid</li>
                  <li>Urinary tract infections</li>
                  <li>Common cold</li>
                  <li>Bronchitis</li>
                  <li>Mental Health conditions</li>
                  <li>Heart disease</li>
                  <li>Alzheimer's Disease</li>
                </ul>
              </div>
              <button
                type="submit"
                className="btn "
                onClick={() => navigate("/d/patientDetails")}
              >
                Go Back
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Patient;
