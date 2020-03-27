import React, { Fragment } from "react";
import { formatPercentage } from "../services/textFormatter";

const RecoveryBar = ({ rate }) => (
  <div
    className="d-flex p-1 flex-row align-items-center"
    style={{
      width: document.innerWidth * 0.9
    }}
  >
    <span style={{ color: "#f8f8f8", marginRight: 10 }}>Recovered:</span>
    <div className="progress w-100">
      <div
        className="progress-bar progress-bar-striped bg-success"
        role="progressbar"
        style={{ width: `${formatPercentage(rate)}% ` }}
      >
        {formatPercentage(rate)}%
      </div>
    </div>
  </div>
);

export { RecoveryBar };
