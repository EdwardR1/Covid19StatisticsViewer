import React, { useEffect, useState } from "react";
import { renderName, changeContinentName } from "../services/textFormatter";
import { Country } from ".";
import { Container } from "../Wrappers";

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
        })}
      </div>
    );
  };

  return (
    <div className="text-center container">
      <h1>{getContinentName()}</h1>
      <Country
        heading
        data={{
          country: "Country:",
          cases: "Total Cases:",
          todayCases: "Cases Today:",
          deaths: "Total Deaths:",
          todayDeaths: "Deaths Today:",
          recovered: "Total Recovered:",
          active: "Total Active Cases:",
          critical: "Total Critical:",
          casesPerOneMillion: "Cases per Million:",
          deathsPerOneMillion: "Deaths per Million:",
          countryInfo: { iso3: "ISO3:", iso2: "ISO2:" }
        }}
      />
      <Container>{renderData()}</Container>
    </div>
  );
};

export { Continent };
