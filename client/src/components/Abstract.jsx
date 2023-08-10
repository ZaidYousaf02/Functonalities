import React from "react";
import Laptop from "../Assets/Images/laptop.png";

function Abstract() {
  return (
    <>
      <div className="abstract">
        <div className="ab-head">
          <h1 className="abstract-heading">Absract</h1>
          <text className="abstract-text" style={{ lineHeight: "30px" }}>
            Basically, this telemedicine platform serves as a vital link between
            doctors and patients, connecting them seamlessly across all hospital
            labs and diagnostic centers in Pakistan. With this system in place,
            any doctor can conveniently access a patients complete medical
            history and review prescriptions previously administered by other
            healthcare providers. By simply providing their ID, patients can
            enable doctors to make well-informed decisions regarding their care.
            Additionally, doctors can prescribe new medications to patients
            based on the comprehensive insights gained from their medical
            records, ensuring personalized and effective treatment plans.
          </text>
        </div>
        <div className="ab-img">
          <img src={Laptop} alt="" />
        </div>
      </div>
    </>
  );
}

export default Abstract;
