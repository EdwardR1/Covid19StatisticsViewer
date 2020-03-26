import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase/app";
import covid from "novelcovid";
import { Heading, Country, Continent } from "./Data";
import { Container } from "./Wrappers";
import * as countryData from "./services/CountryData";

function App() {
  const [generalStatistics, setGeneralCovidStats] = useState({});
  const [countryNames, setNames] = useState([]);
  const [countryCodes, setCodes] = useState([]);
  const [continentCodes, setContinentCodes] = useState([]);
  const [continentCountryMap, setMap] = useState({});
  const [associated, setAssociated] = useState([]);
  const [sortedCountryStats, setCountryStats] = useState({});

  const setAssociatedObject = () => {
    let continentsWithCountries = {};
    countryData.getContinents().forEach(code => {
      Object.assign(
        continentsWithCountries,
        countryData.getCountriesInContinent(
          countryData.getAllCountryNames(),
          countryData.getContinentCountryMap(),
          code
        )
      );
    });
    return continentsWithCountries;
  };
  const getData = () => {
    setNames(countryData.getAllCountryNames());
    setCodes(countryData.getAllCountryCodes());
    setContinentCodes(countryData.getContinents());
    setMap(countryData.getContinentCountryMap());
    setAssociated(setAssociatedObject());

    covid.getAll().then(res => {
      setGeneralCovidStats(res);
    });
    covid.getCountry({ sort: "cases" }).then(res => {
      setCountryStats(res);
    });
  };
  useEffect(() => getData(), []);

  const renderData = (
    <div style={{ borderBottom: "0.5px solid black" }}>
      {Object.keys(sortedCountryStats).map(keys => (
        <Country data={sortedCountryStats[keys]} />
      ))}
    </div>
  );

  const renderContinents = () => {
    return(
    <div>
      {Object.keys(associated).map(cont => {
        if(cont === "Antarctica"){
          return;
        }
       return <Continent
          continent={cont}
          associated={associated}
          allData={sortedCountryStats}
        />;
      })}
    </div>
  ) }

  return (
    <div className="App">
      <div style={{ padding: 20 }}>
        <div className="d-flex justify-content-around">
          <div className="btn btn-info">
            <Heading title="Total Cases" data={generalStatistics["cases"]} />
          </div>
          <div className="btn btn-danger">
            <Heading title="Total Deaths" data={generalStatistics["deaths"]} />
          </div>
          <div className="btn btn-success">
            <Heading
              title="Total Recovered"
              data={generalStatistics["recovered"]}
            />
          </div>
        </div>
        <div className="text-center container">
          <h1>Global:</h1>
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
          <Container>{renderData}</Container>
        </div>
        {// <Continent
        //   continent="Asia"
        //   associated={setAssociatedObject()}
        //   allData={sortedCountryStats}
        // />
        }
        {renderContinents()}
        
      </div>
    </div>
  );
}

export default App;
