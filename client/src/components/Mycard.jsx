import React from "react";

const Mycard = (props) => {
  return (
    <div className="mycard">
      <h5 className="heading5 semi-bold">{props.title}</h5>
      <p className="body1">{props.desc}</p>
    </div>
  );
};

export default Mycard;
