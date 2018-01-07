const fs = require('fs');
const axios = require('axios');
const queryString = require('query-string');

const apiKey = "xpxtkfqdy4z78pqfqz33ta88"

module.exports = {

  propertySearch(params, response){
    console.log("Received request")
    const combinedParams = Object.assign({api_key: apiKey }, params);
    const paramString = queryString.stringify(combinedParams);

    axios
      .get("https://api.zoopla.co.uk/api/v1/property_listings.js?" + paramString)
      .then(res => res.data)
      .then(result =>
      {
        console.log("Sending response")
        response.set("Access-Control-Allow-Origin", "*")
        response.send(JSON.stringify(result));
      })
      .catch(error => console.log(error));
  },

  propertySearchFake(params, response){
    fs.readFile('propertyListingResult.json', 'utf8', function(err, data) {
      if (err) throw err;
      response.set("Access-Control-Allow-Origin", "*")
      response.send(data);
    });

  }

}
