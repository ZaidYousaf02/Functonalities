import React from "react";
import cloud2 from "../Assets/Icons/cloud-2.png";
import cloud3 from "../Assets/Icons/cloud-3.png";
import cloud4 from "../Assets/Icons/cloud-4.png";
import cloud5 from "../Assets/Icons/cloud-5.png";
import cloud6 from "../Assets/Icons/cloud-6.png";
import cloud7 from "../Assets/Icons/cloud-7.png";

function ContactUs() {
  return (
    <>
      <div className="cloud-page">
        <h1 className="heading1 bold" style={{ textAlign: "center" }}>
          Animations
        </h1>
        <div className="clouds">
          <img className="cloud cloud1" src={cloud2} alt="" />
          <img className="cloud cloud2" src={cloud4} alt="" />
          <img className="cloud cloud3" src={cloud3} alt="" />
          <img className="cloud cloud4" src={cloud5} alt="" />
          <img className="cloud cloud5" src={cloud6} alt="" />
          <img className="cloud cloud6" src={cloud7} alt="" />
          <img className="cloud cloud7" src={cloud3} alt="" />
          <img className="cloud cloud8" src={cloud2} alt="" />
        </div>
      </div>
      {/*  */}
    </>
  );
}

export default ContactUs;
