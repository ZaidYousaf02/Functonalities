import React from "react";
import OurServices from "../components/OurServices";
import Objective from "../components/Objective";
import Abstract from "../components/Abstract";
import TeamMembers from "../components/TeamMembers";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container1">
        <div className="home">
          <div className="overlay">
            <div className="navbar">
              <ul>
                {/* Anchor links */}
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#ourservices">Our Services</a>
                </li>
                <li>
                  <a href="#abstract">Abstract</a>
                </li>
                <li>
                  <a href="#Objective">Objective</a>
                </li>
                <li>
                  <a href="#teammembers">Team Members</a>
                </li>
              </ul>
              <div className="butns">
                <button onClick={() => navigate("/login")}>Sign In</button>
                <button onClick={() => navigate("/signup")}>Sign Up</button>
              </div>
            </div>
            <h1 className="head">
              <span className="head-span">One of The Greate</span>
              <br />
              Centralized Healthcare <br /> System
            </h1>
            <div className="home-body">
              <div className="home-des" style={{ lineHeight: "35px" }}>
                A centralized healthcare system refers to a system where
                healthcare services are coordinated and managed through a
                central authority or organization. In the context of a
                centralized system between doctors and patients, it typically
                involves a centralized platform or network that facilitates
                communication, information sharing, and coordination between
                healthcare providers and patients.
              </div>
              <div className="btns">
                <button className="btn1">See Abstract</button>
                <button className="btn2">See Objectives</button>
              </div>
            </div>
          </div>
        </div>
        <div className="ourservices" id="ourservices" style={{ zIndex: "9" }}>
          <OurServices />
        </div>
        <div className="abstract" id="abstract">
          <Abstract />
        </div>
        <div className="Objective" id="Objective">
          <Objective />
        </div>
        <div className="teammembers" id="teammembers">
          <TeamMembers />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
