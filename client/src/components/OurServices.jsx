import React from "react";
import ServiceCard from "./ServiceCard";
import Ser from "../Assets/Images/24-7.png";
import Care from "../Assets/Images/healthcare.png";
import Consult from "../Assets/Images/consultation.png";

function OurServices() {
  return (
    <>
      <div className="ourServices">
        <ServiceCard
          img={Ser}
          heading="24 Hours Service"
          text="We provide round-the-clock service, ensuring assistance and support 24 hours a day, seven days a week. Our dedicated team is available around the clock to meet your needs at any time of the day or night."
        />
        <ServiceCard
          img={Care}
          heading="Outdoors Checkup"
          text="Patient care is our top priority, and we strive to provide compassionate, personalized attention to every individual we serve. Our dedicated team is committed to delivering high-quality care and healing environment."
        />
        <ServiceCard
          img={Consult}
          heading="Expert Consultation"
          text="Our expert consultation services offer patients the opportunity to receive specialized medical advice and guidance from experienced doctors in their respective fields. "
        />
      </div>
    </>
  );
}

export default OurServices;
