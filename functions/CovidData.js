const covid = require("novelcovid");

// const { getAllCountryNames } = require("./CountryData");

const retrieveAllData = async () => {
  let all = await covid.getAll();
  data = { Global: all.cases, Deaths: all.deaths, Recovered: all.recovered };
  return all;
};

const setSortedByCases = async () => {
  let sorted = await covid.getCountry({ sort: "cases" });
  return sorted;
};

const getCountryData = async countryName => {
  let data = await covid.getCountry({ country: countryName });
  return data;
};

const getAllData = () => {
  let data = (async () => {
    return await retrieveAllData();
  })()
  return data;
};

const getSortedByCases = () => {
  setSortedByCases()
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

module.exports = {
  getAllData,
  getSortedByCases
};
