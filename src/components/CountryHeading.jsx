import React from "react";
import { Country } from '.';

const CountryHeading = () => (
  <Country
    heading
    data={{
      country: "Country:",
      cases: "Cases:",
      todayCases: "Cases Today:",
      deaths: "Deaths:",
      todayDeaths: "Deaths Today:",
      recovered: "Recovered:",
      active: "Active Cases:",
      critical: "Critical:",
      casesPerOneMillion: "Cases per Million:",
      deathsPerOneMillion: "Deaths per Million:",
      countryInfo: { iso3: "ISO3:", iso2: "ISO2:" }
    }}
  />
);

export { CountryHeading };
