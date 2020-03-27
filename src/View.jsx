import covid from "novelcovid";
import React, { useEffect, useState, Fragment } from "react";
import "./App.css";
import { Continent, Global, LeftMenu } from "./components";
import {
  getAllCountryNames,
  getContinentCountryMap,
  getContinents,
  getCountriesInContinent
} from "./services/countryData";

function View() {
  const [generalStatistics, setGeneralCovidStats] = useState({
    cases: 0,
    deaths: 0,
    recovered: 0
  });
  const [associated, setAssociated] = useState([]);
  const [sortedCountryStats, setCountryStats] = useState({});

  const setAssociatedObject = () => {
    let continentsWithCountries = {};
    getContinents().forEach(code => {
      Object.assign(
        continentsWithCountries,
        getCountriesInContinent(
          getAllCountryNames(),
          getContinentCountryMap(),
          code
        )
      );
    });
    return continentsWithCountries;
  };
  const getData = () => {
    setAssociated(setAssociatedObject());
    covid.getAll().then(res => {
      setGeneralCovidStats(res);
    });
    covid.getCountry({ sort: "cases" }).then(res => {
      setCountryStats(res);
    });
  };
  useEffect(getData, []);

  const getSeriousCases = () => {
    let count = 0;
    Object.keys(sortedCountryStats).map(key => {
      return (count += sortedCountryStats[key]["critical"]);
    });
    return count;
  };

  const getTodayCases = () => {
    let count = 0;
    Object.keys(sortedCountryStats).map(key => {
      return (count += sortedCountryStats[key]["todayCases"]);
    })
    return count;
  }

  const renderContinents = () => {
    return (
      <div>
        {Object.keys(associated).map(cont => {
          if (cont === "Antarctica") {
            return <Fragment />;
          }
          return (
            <Continent
              continent={cont}
              associated={associated}
              allData={sortedCountryStats}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="App" style={{ backgroundColor: "#3c6074" }}>
      <div className="d-flex justify-content-around" style={{ padding: 20 }}>
        <div
          style={{
            backgroundColor: "#547c92",
            padding: 20,
            margin: 20,
            borderRadius: "10px",
            height: "60%",
            // maxHeight: "50em"
          }}
        >
          <div
            className="d-flex p-2"
            style={{
              flexDirection: "column"
            }}
          >
            <LeftMenu
              generalStatistics={generalStatistics}
              serious={getSeriousCases()}
              casesToday={getTodayCases()}
            />
          </div>
        </div>
        <div className="d-flex p-2">
          <div>
            <Global data={sortedCountryStats} />
            {renderContinents()}
          </div>
        </div>
      </div>
      <div className="container" style={{textAlign: 'left', overflow: 'auto', height: "50%", color: "#f8f8f8", padding: 10, paddingBottom: 30}}>
        <span>*Disclaimer: All the data used is retrieved from open source locations. There may be some discrepancies and inconsistencies between the data found here and other sites online due to inconsistencies of reporting at nation wide levels.</span>
      </div>
    </div>
  );
}

export default View;
