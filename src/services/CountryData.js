const countries = require("countries-list");

const getAllCountryCodes = () => {
  return Object.keys(countries.countries);
};

const getAllCountryNames = () => {
  let codes = getAllCountryCodes();
  let names = [];
  codes.forEach(code => names.push(countries.countries[code]["name"]));
  return names.sort();
};

const getContinents = () => {
  let codes = Object.keys(countries.continents);
  return codes;
};

const getContinentCountryMap = () => {
  let countryValues = countries.countries;
  let codes = getAllCountryCodes();
  let map = {};
  codes.forEach(code => {
    let country = countryValues[code];
    map[country["name"]] = country["continent"];
  });
  return map;
};

const getCountriesInContinent = (countryNames, map, continentCode) => {
  let countriesInside = [];
  countryNames.forEach(name => {
    if (map[name] === continentCode) {
      countriesInside.push(name);
    }
  });
  let Name = countries.continents[continentCode];
  return { [Name]: countriesInside };
};


module.exports = {
  getAllCountryCodes,
  getAllCountryNames,
  getContinents,
  getContinentCountryMap,
  getCountriesInContinent
};
