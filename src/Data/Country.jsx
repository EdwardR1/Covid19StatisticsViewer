import React, { Fragment } from "react";
import { renderName } from '../services/textFormatter'

const Country = ({ data, heading }) => {
  const {
    country,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
    casesPerOneMillion,
    deathsPerOneMillion,
    countryInfo
  } = data;

  const ShowData = ({ style = {alignItems: "center", borderTop: "0.5px solid black", paddingTop: 10, paddingBottom: 10} }) => (
    <div className="row" style={style}>
      <div className="col">{renderName(country)}</div>
      <div className="col">{cases}</div>
      <div className="col">{todayCases}</div>
      <div className="col">{deaths}</div>
      <div className="col">{todayDeaths}</div>
      <div className="col">{recovered}</div>
      <div className="col">{active}</div>
      <div className="col">{critical}</div>
    </div>
  );
  const { iso3, iso2 } = countryInfo;
  if (heading) {
    return (
      <Fragment>
        <ShowData
          style={{
            borderBottom: "1px solid black",
            textAlign: "center",
            paddingTop: 20,
            alignItems: "center"
          }}
        />
        <br />
      </Fragment>
    );
  }
  return <ShowData />;
};

export { Country };
