// const countries = require("countries-list");

import countries from "countries-list";

export const getAllCountryCodes = () => {
  return Object.keys(countries.countries);
};

export const getAllCountryNames = () => {
  let codes = getAllCountryCodes();
  let names = [];
  codes.forEach(code => names.push(countries.countries[code]["name"]));
  return names.sort();
};

export const getContinents = () => {
  let codes = Object.keys(countries.continents);
  return codes;
};

export const getContinentCountryMap = () => {
  let countryValues = countries.countries;
  let codes = getAllCountryCodes();
  let map = {};
  codes.forEach(code => {
    let country = countryValues[code];
    map[country["name"]] = country["continent"];
  });
  return map;
};

export const getCountriesInContinent = (countryNames, map, continentCode) => {
  let countriesInside = [];
  countryNames.forEach(name => {
    if (map[name] === continentCode) {
      countriesInside.push(name);
    }
  });
  let Name = countries.continents[continentCode];
  return { [Name]: countriesInside };
};
