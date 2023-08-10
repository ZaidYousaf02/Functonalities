import React, { useState } from "react";
import Icon from "../Assets/Images/logo.png";
import Home from "../Assets/Icons/add.png";
import Table from "../Assets/Icons/table.png";
import About from "../Assets/Icons/information.png";
import SignIn from "../Assets/Icons/import.png";
import Dashboard from "../Assets/Icons/dashboard.png";
import Animation from "../Assets/Icons/animate.png";
import Slider from "../Assets/Icons/slider.png";
import Chat from "../Assets/Icons/bubble-chat.png";
import Graph from "../Assets/Icons/bar-chart.png";
import { Link, useLocation } from "react-router-dom";
import Sun from "../Assets/Icons/sun.png";
import Moon from "../Assets/Icons/dark-mode.png";

const Sidebar = () => {
  const location = useLocation();

  const [closeMenu, setCloseMenu] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };
  const handleNightModeToggle = () => {
    setNightMode(!nightMode);
  };

  return (
    <div
      className={`${closeMenu === false ? "sidebar" : "sidebar active"} ${
        nightMode ? "nightMode" : ""
      }`}>
      <div
        className={
          closeMenu === false ? "logoContainer" : "logoContainer active"
        }>
        <img src={Icon} alt="icon" className="logo" />
        <h2 className="title">Assesment </h2>
      </div>
      <div
        className={closeMenu === false ? "b-Container" : "b-Container active"}>
        <div
          className="b-Trigger"
          onClick={() => {
            handleCloseMenu();
          }}></div>
        <div className="b-Menu"></div>
      </div>

      <div
        className={
          closeMenu === false ? "contentsContainer" : "contentsContainer active"
        }>
        <ul>
          <li className={location.pathname === "/d" ? "active" : ""}>
            <img src={Dashboard} alt="blog" />
            <Link to="/d">DashBoard</Link>
          </li>
          <li className={location.pathname === "/d/blog" ? "active" : ""}>
            <img src={About} alt="blog" />
            <Link to="/d/blog">Blogs</Link>
          </li>
          <li
            className={
              location.pathname === "/d/patientDetails" ? "active" : ""
            }>
            <img src={Table} alt="table" />
            <Link to="/d/patientDetails">List</Link>
          </li>
          <li className={location.pathname === "/d/animation" ? "active" : ""}>
            <img src={Animation} alt="table" />
            <Link to="/d/animation">Animation</Link>
          </li>
          <li className={location.pathname === "/d/slider" ? "active" : ""}>
            <img src={Slider} alt="table" />
            <Link to="/d/slider">Slider</Link>
          </li>

          <li className={location.pathname === "/d/chat" ? "active" : ""}>
            <img src={Chat} alt="table" />
            <Link to="/d/chat">Chat</Link>
          </li>
          <li className={location.pathname === "/d/graph" ? "active" : ""}>
            <img src={Graph} alt="table" />
            <Link to="/d/graph">Graph</Link>
          </li>
          <li className={location.pathname === "/login" ? "active" : ""}>
            <img src={SignIn} alt="table" />
            <Link to="/login">Log Out</Link>
          </li>
        </ul>
        <button
          className="nightModeButton"
          onClick={handleNightModeToggle}
          style={{
            width: "80px",
            height: "80px",
            color: "white",
            display: "flex",
            alignItems: "center",
            background: "transparent",
            borderRadius: "50%",
            border: "1px solid White",
            marginLeft: "-10px",
            marginTop: "50px",
          }}>
          {nightMode ? (
            <img src={Sun} alt="" style={{ marginLeft: "20px" }} />
          ) : (
            <img src={Moon} alt="" style={{ marginLeft: "20px" }} />
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
