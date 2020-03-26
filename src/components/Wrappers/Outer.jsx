import React from "react";

const Outer = ({ children }) => (
  <div
    className="text-center container"
    style={{
      padding: 20,
      borderRadius: "10px",
      backgroundColor: "#547c92",
      margin: 20
    }}
  >
    {children}
  </div>
);

export { Outer };
