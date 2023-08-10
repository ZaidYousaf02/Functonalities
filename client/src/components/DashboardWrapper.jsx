import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../view/Dashboard";
import BlogList from "../view/Blogs";
import Animation from "../view/Animation";
import Slider from "../view/Slider";
import Sidebar from "../components/Sidebar";
import PatientList from "../view/PatientList";
import CustomBarChart from "./CustomBarChart";
import ChatApp from "../view/ChatApp";

function DashboardWrapper() {
  return (
    <div style={{ width: "100vw", height: "100vh", display: "flex" }}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/patientDetails" element={<PatientList />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/slider" element={<Slider />} />
        <Route path="/chat" element={<ChatApp />} />
        <Route path="/graph" element={<CustomBarChart />} />
      </Routes>
    </div>
  );
}

export default DashboardWrapper;
