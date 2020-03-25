import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import * as firebase from "firebase/app";
import covid from "novelcovid";
import { Heading } from "./Data";

function App() {
  const [generalStatistics, setGeneralCovidStats] = useState({});
  const [countryNames, setNames] = useState([]);
  const [countryCodes, setCodes] = useState([]);
  const [continentCodes, setContinentCodes] = useState([]);
  const [continentCountryMap, setMap] = useState({});
  const [associated, setAssociated] = useState({});
  const [sortedCountryStats, setCountryStats] = useState({})
  useEffect(
    () => {
      fetch(
        "https://cors-anywhere.herokuapp.com/https://us-central1-covid19-statistics-viewer.cloudfunctions.net/getCountries"
      ).then(res => {
        let innerRes = res.json();
        innerRes.then(data => {
          setNames(data["Country Names"]);
          setCodes(data["Country Codes"]);
          setContinentCodes(data["Continents"]);
          setMap(data["Continents Country Map"]);
          setAssociated(data["Associated"]);
        });
      });
      covid.getAll().then(res => {
        setGeneralCovidStats(res);
      });
      covid.getCountry({sort: "cases"}).then(res => {
        setGeneralCovidStats(res);
        // console.log(res)
      })
    },
    setTimeout(() => {}, 10000),
  );

  const renderData = (
    <div>
      {countryNames.map(name => (
        <li>{name}</li>
      ))}
    </div>
  );
  return (
    <div className="App">
      <div style={{padding: 20}}>
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
      </div>
    </div>
  );
}

export default App;
