const functions = require("firebase-functions");

const countryData = require("./CountryData");
const covidData = require("./CovidData");

exports.getCovidData = functions.https.onRequest((req, res) => {
  // exports.getCovidData = functions.https.onCall(data => {
  let allData = {};
  let allSorted = {};
  allData = covidData.getAllData();
  allSorted = covidData.getSortedByCases();
  res.send({ General: allData, "Country Data": allSorted });
  // covidData
  //   .getAllData()
  //   .then(result => {
  //     allData = result;
  //     return;
  //   })
  //   .catch(err => {
  //     error = err;
  //     return;
  // })
  // .then(() => {
  //   covidData
  //     .getSortedByCases()
  //     .then(sorted => {
  //       allSorted = sorted;
  //       return;
  //     })
  //     .catch(err => {
  //       error = err;
  //       return;
  //     })
  //     .finally(() => {
  //       // res.send({
  //       return {
  //         General: allData,
  //         "Country Data": allSorted,
  //         Error: error
  //         // });
  //       };
  //     });
  //   return;
  // })
  // .catch(() => {});

  // covidData
  //   .getSortedByCases()
  //   .then(res => {
  //     allSorted = res;
  //   })
  //   .catch(() => {
  //     error = "Cannot retrieve sorted information now, please try again later.";
  //   });
  // information = { General: allData, "Country Data": allSorted, Error: error };
  // return information;
  // res.send(information);
});

// exports.getCountries = functions.https.onCall((data, context) => {
exports.getCountries = functions.https.onRequest((req, res) => {
  let countryCodes = countryData.getAllCountryCodes();
  let countryNames = countryData.getAllCountryNames();
  let continents = countryData.getContinents();
  let map = countryData.getContinentCountryMap();
  let continentsWithCountries = {};
  continents.forEach(code => {
    Object.assign(
      continentsWithCountries,
      countryData.getCountriesInContinent(countryNames, map, code)
    );
  });
  res.send({
    // return {
    "Country Codes": countryCodes,
    "Country Names": countryNames,
    Continents: continents,
    "Continents Country Map": map,
    Associated: continentsWithCountries
    // };
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
