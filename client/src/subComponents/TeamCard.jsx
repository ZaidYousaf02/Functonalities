import React from "react";

function TeamCard(props) {
  return (
    <>
      <div className="team-Card">
        <div className="team-card-img">
          <img src={props.img} alt="" />
        </div>
        <div className="team-detail">
          <h5>{props.name}</h5>
          <text>{props.text}</text>
        </div>
        <p style={{ lineHeight: "20px" }}>{props.para}</p>
      </div>
    </>
  );
}

export default TeamCard;
