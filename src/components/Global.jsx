import React from "react";
import { Country, CountryHeading } from '.';
import { Container, Outer } from './Wrappers';

const Global = ({ data }) => {
  const renderData = (
    <div style={{ borderBottom: "0.5px solid black" }}>
      {Object.keys(data).map(keys => (
        <Country data={data[keys]} />
      ))}
    </div>
  );
  return (
    <Outer>
      <h1 className="text-left" style={{color: "#f8f8f8"}}>Global</h1>
      <CountryHeading />
      <Container>{renderData}</Container>
    </Outer>
  );
};

export { Global };
