import React from "react";

function CustomTooltip({ data }) {
  return (
    <>
      <div
        style={{
          background: "white",
          padding: "10px",
          border: "1px solid black",
        }}
      >
        <div>{data.id}</div>
        <div>{data.value}</div>
      </div>
    </>
  );
}

export default CustomTooltip;
