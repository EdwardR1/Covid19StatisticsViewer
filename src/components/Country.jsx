import React, { Fragment } from "react";
import { renderName, formatNumber as format } from '../services/textFormatter'

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
    // casesPerOneMillion,
    // deathsPerOneMillion,
    // countryInfo
  } = data;

  const ShowData = ({ style = {alignItems: "center", borderTop: "0.5px solid #f8f8f8", paddingTop: 10, paddingBottom: 10, color: "#f8f8f8"} }) => (
    <div className="row" style={style}>
      <div className="col">{renderName(country)}</div>
      <div className="col">{format(cases)}</div>
      <div className="col">{format(todayCases)}</div>
      <div className="col">{format(deaths)}</div>
      <div className="col">{format(todayDeaths)}</div>
      <div className="col">{format(recovered)}</div>
      <div className="col">{format(active)}</div>
      <div className="col">{format(critical)}</div>
    </div>
  );
  // const { iso3, iso2 } = countryInfo;
  if (heading) {
    return (
      <Fragment>
        <ShowData
          style={{
            borderBottom: "1px solid #f8f8f8",
            textAlign: "center",
            paddingTop: 20,
            alignItems: "center",
            color: "#f8f8f8"
          }}
        />
        <br />
      </Fragment>
    );
  }
  return <ShowData />;
};

export { Country };
