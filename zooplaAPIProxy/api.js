const fetch = require('node-fetch');
const fs = require('fs');


module.exports = {

  callZooplaAPI (response){
    fetch("https://api.zoopla.co.uk/api/v1/property_listings.js?api_key=xpxtkfqdy4z78pqfqz33ta88&postcode=sw1")
      .then((response2) => response2.json())
      .then((result) =>
      {
        console.log("Received response from zoopla, sending to original client")
        //console.log(JSON.stringify(result));
        response.set("Access-Control-Allow-Origin", "*")
        response.send(JSON.stringify(result));
      });

    console.log("The fetch has been sent");
  },

  callFakeZooplaAPI(response){
    fs.readFile('propertyListingResult.json', 'utf8', function(err, data) {
      if (err) throw err;
      response.set("Access-Control-Allow-Origin", "*")
      response.send(data);
    });

  }

}
