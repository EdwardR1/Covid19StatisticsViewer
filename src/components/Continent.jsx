import React, { Fragment, useState } from "react";
import { Country, CountryHeading, RecoveryBar } from ".";
import { changeContinentName, renderName } from "../services/textFormatter";
import { Container, Outer } from "./Wrappers";
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

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

  const toggleView = () => {
    return (
      <Fragment>
        {show ? (
          <button onClick={() => setShow(!show)} className="btn">
            <FaAngleDown color="#f8f8f8" />
          </button>
        ) : (
          <button
            onClick={() => setShow(!show)}
            className="btn"
          >
            <FaAngleUp color="#f8f8f8" />
          </button>
        )}
      </Fragment>
    );
  };
  return (
    <Outer>
      <div style={{ color: "#f8f8f8" }}>
        <div className="d-flex flex-row justify-content-between">
          <h1 className="text-left" style={{ fontWeight: "bold" }}>
            {getContinentName()}
          </h1>
          {toggleView()}
        </div>

        <RecoveryBar rate={_calculateRecoveryRate(data)} />
      </div>
      {show ? (
        <Fragment>
          <CountryHeading />
          <Container>{renderData(data)}</Container>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </Outer>
  );
};

export { Continent };
