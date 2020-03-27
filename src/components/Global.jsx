import React from "react";
import { Country, CountryHeading } from ".";
import { Container, Outer } from "./Wrappers";
import { formatPercentage } from "../services/textFormatter";

const Global = ({ data }) => {
  const _calculateTotalRecovered = data => {
    let total = 0;
    Object.keys(data).map(country => {
      return (total += data[country]["recovered"]);
    });
    return total;
  };

  const _calculateTotalCases = data => {
    let total = 0;
    Object.keys(data).map(country => {
      return (total += data[country]["cases"]);
    });
    return total;
  };

  const _calculateRecoveryRate = data => {
    let totalRecovered = _calculateTotalRecovered(data);
    let totalCases = _calculateTotalCases(data);
    return totalRecovered / totalCases;
  };

  const renderData = (
    <div style={{ borderBottom: "0.5px solid black" }}>
      {Object.keys(data).map(keys => (
        <Country data={data[keys]} />
      ))}
    </div>
  );

  // console.log(data[0]);
  return (
    <Outer>
      <div
        className="d-flex flex-row justify-content-between"
        style={{ color: "#f8f8f8" }}
      >
        <h1 className="text-left" style={{fontWeight: 'bold'}}>Global</h1>
        <h3>Recovered: {formatPercentage(_calculateRecoveryRate(data))}%</h3>
      </div>
      <CountryHeading />
      <Container>{renderData}</Container>
    </Outer>
  );
};

export { Global };
