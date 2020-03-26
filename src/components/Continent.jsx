import React, {Fragment} from "react";
import { Country, CountryHeading } from ".";
import { changeContinentName, renderName } from "../services/textFormatter";
import { Container, Outer } from "./Wrappers";

const Continent = ({ continent, allData, associated }) => {
  const getContinentName = () => changeContinentName(continent);

  const renderData = () => {
    return (
      <div style={{ borderBottom: "0.5px solid black" }}>
        {Object.keys(allData).map(key => {
          if (
            associated[continent].includes(renderName(allData[key]["country"]))
          ) {
            return <Country data={allData[key]} />;
          }
          else {
            return <Fragment></Fragment>
          }
 
        })}
      </div>
    );
  };

  return (
    <Outer>
      <h1 className="text-left" style={{color: "#f8f8f8"}}>{getContinentName()}</h1>
      <CountryHeading />
      <Container>{renderData()}</Container>
    </Outer>
  );
};

export { Continent };

