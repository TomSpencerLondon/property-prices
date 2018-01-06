const fetch = require('node-fetch');
const fs = require('fs');
const axios = require('axios');

const apiKeyParameter = "api_key=xpxtkfqdy4z78pqfqz33ta88"

module.exports = {

  callZooplaAPI (response){
    console.log("Received request")
    axios
      .get("https://api.zoopla.co.uk/api/v1/property_listings.js?" + apiKeyParameter + "&postcode=sw1")
      .then(res => res.data)
      .then(result =>
      {
        console.log("Sending response")
        response.set("Access-Control-Allow-Origin", "*")
        response.send(JSON.stringify(result));
      })
      .catch(error => console.log(error));
  },

  callFakeZooplaAPI(response){
    fs.readFile('propertyListingResult.json', 'utf8', function(err, data) {
      if (err) throw err;
      response.set("Access-Control-Allow-Origin", "*")
      response.send(data);
    });

  }

}
