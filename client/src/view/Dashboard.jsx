import React from "react";
// import Button from "../subComponents/Button";
import CountUpAnimation from "../components/CounterNumber";
import ReactChat from "../components/ReactChat";
import NivoChart from "../components/NivoChart";

function Dashboard() {
  return (
    <>
      <div className="Dashboard">
        <h1 className="heading1 bold white">Admin Dashboard</h1>
        <CountUpAnimation />

        <div className="chart">
          <div className="chart-1" style={{ width: "50%" }}>
            <h1>ChartJS</h1>
            <ReactChat />
          </div>
          <div className="chart-1" style={{ width: "50%" }}>
            <h1>Nivo Chart</h1>
            <NivoChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
