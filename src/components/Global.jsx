import React, {Fragment, useState} from "react";
import { Country, CountryHeading, RecoveryBar } from ".";
import { Container, Outer } from "./Wrappers";
import {FaAngleDown, FaAngleUp} from 'react-icons/fa'

const Global = ({ data }) => {
  const [show, setShow] = useState(true);
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
      <div
        className="d-flex flex-row justify-content-between"
        style={{ color: "#f8f8f8" }}
      >
        <h1 className="text-left" style={{fontWeight: 'bold'}}>Global</h1>
        {toggleView()}
      </div>
      <RecoveryBar rate={_calculateRecoveryRate(data)} />
      {show ? (
        <Fragment>
          <CountryHeading />
          <Container>{renderData}</Container>
        </Fragment>
      ) : (
        <Fragment />
      )}
    </Outer>
  );
};

export { Global };

