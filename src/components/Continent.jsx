import React, {Fragment, useState} from "react";
import { Country, CountryHeading } from ".";
import {
  changeContinentName,
  renderName,
  formatPercentage
} from "../services/textFormatter";
import { Container, Outer } from "./Wrappers";

const Continent = ({ continent, allData, associated }) => {
  const getContinentName = () => changeContinentName(continent);

  const [show, setShow] = useState(true);

  const getData = () => {
    let info = [];
    Object.keys(allData).map(key => {
      if (associated[continent].includes(renderName(allData[key]["country"]))) {
        return info.push(allData[key]);
      } else {
        return info;
      }
    });
    return info;
  };

  const _calculateTotalRecovered = data => {
    let total = 0;
    Object.keys(
      data.map(country => {
        return (total += country["recovered"]);
      })
    );
    return total;
  };

  const _calculateTotalCases = data => {
    let total = 0;
    Object.keys(
      data.map(country => {
        return (total += country["cases"]);
      })
    );
    return total;
  };

  const _calculateRecoveryRate = data => {
    let totalRecovered = _calculateTotalRecovered(data);
    let totalCases = _calculateTotalCases(data);
    return totalRecovered / totalCases;
  };

  const renderData = data => {
    return (
      <div style={{ borderBottom: "0.5px solid black" }}>
        {Object.keys(data).map(key => {
          return <Country data={data[key]} />;
        })}
      </div>
    );
  };

  let data = getData();

  return (
    <Outer>
      <div
        className="d-flex flex-row justify-content-between"
        style={{ color: "#f8f8f8" }}
      >
        <h1 className="text-left" style={{fontWeight: 'bold'}}>{getContinentName()}</h1>
        <h3>Recovered: {formatPercentage(_calculateRecoveryRate(data))}%</h3>
      </div>
      {show ? 
      (<Fragment>
      <CountryHeading />
      <Container>{renderData(data)}</Container> : 
      </Fragment>)
      : <Fragment />
      }
    </Outer>
  );
};

export { Continent };
