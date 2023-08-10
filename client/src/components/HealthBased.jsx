import React from "react";
import HealthBasedillness from "./HealthBasedillness";

function HealthBased() {
  return (
    <>
      <div className="healthbased-section">
        <h1 className="healthbase-head">
          <span
            style={{
              color: "rgb(0, 103, 163)",
              fontSize: "29px",
              fontWeight: "bolder",
            }}
          >
            What We Treat
          </span>
          <br />
          Find a best doctor based on your health issue now!
        </h1>
        <div className="health-box">
          <div className="health-based-button-section">
            <HealthBasedillness title="Anxiety" />
            <HealthBasedillness title="Cough" />
            <HealthBasedillness title="Bad Breath" />
            <HealthBasedillness title="Dizsiness" />
            <HealthBasedillness title="Fever" />
          </div>
          <div className="health-based-button-section">
            <HealthBasedillness title="Headaches" />
            <HealthBasedillness title="Sour Throat" />
            <HealthBasedillness title="Weakness" />
            <HealthBasedillness title="Nausea" />
            <HealthBasedillness title="Chest Pain" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HealthBased;
