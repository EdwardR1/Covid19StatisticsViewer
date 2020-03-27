import React from "react";

const Heading = ({ title, data, icon, color = "#f8f8f8" }) => (
  <div className="flex-row align-items-center justify-content-around"
  style={{color: color}}>
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        verticalAlign: "middle"
      }}
    >
      {icon}

      <h3>{title}</h3>
    </div>
    <h2>{data}</h2>
  </div>
);

export { Heading };
