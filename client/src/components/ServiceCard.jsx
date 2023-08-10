import React from "react";

function ServiceCard(props) {
  return (
    <>
      <div className="serv-card">
        <img src={props.img} alt="" />
        <h4>{props.heading}</h4>
        <text style={{ lineHeight: "25px" }}>{props.text}</text>
      </div>
    </>
  );
}

export default ServiceCard;
