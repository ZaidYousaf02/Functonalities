import React from "react";
import Accordion from "./Accordion";
import DownArrow from "../Assets/Icons/arrow-down.png";
import Platform from "../Assets/Icons/information-technology.png";
import Registeration from "../Assets/Icons/registration.png";
import Appointment from "../Assets/Icons/medical-appointment.png";
import Communicate from "../Assets/Icons/dialog.png";
import Nurse from "../Assets/Images/nurse.png";

function Objective() {
  return (
    <>
      <div className="feature-box">
        <h1 className="obj-head">Features</h1>
        <h1 className="obj-head2">
          Connecting with a best Doctor has never been{" "}
          <span style={{ color: "rgb(0, 103, 163)" }}>so easy!</span>
        </h1>
        <p className="obj-para">
          MedSight is a one-stop telemedicine solution for various health care
          primary health issues from diagnosis to treatment.
        </p>
        <div className="objective">
          <h2 className="keyFeatures">Key Features</h2>
          <div className="obj-box">
            <div className="obj-card">
              <Accordion
                img={Platform}
                title="Centralized Platform"
                postIcon={DownArrow}
                content="A digital platform or application can be created to serve as a central hub for doctors and patients to connect. This platform can be accessible through mobile devices or computers."
              />
              <Accordion
                img={Registeration}
                title="Patient Registration"
                postIcon={DownArrow}
                content="Patients would register on the platform by providing their personal information, medical history, and any relevant documents or records. This information can be securely stored in the centralized system"
              />
              <Accordion
                img={Appointment}
                title="Appointment Scheduling"
                postIcon={DownArrow}
                content="Patients can request appointments with doctors through the platform. The system would allow them to view the availability of doctors, select a suitable time slot, and receive confirmation of the appointment"
              />
              <Accordion
                img={Communicate}
                title="Communication"
                postIcon={DownArrow}
                content="The platform would provide secure messaging features that enable patients to communicate directly with their doctors. Patients can ask questions, seek medical advice, or discuss their concerns. Doctors can respond to messages, provide information, or prescribe medications if necessary."
              />
            </div>
            <div className="Nurse-img">
              <img src={Nurse} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Objective;
