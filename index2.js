// index2.js

const { nextISSTimesForMyLocation } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })