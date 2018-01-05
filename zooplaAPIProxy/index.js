const express = require('express')
const app = express()
const fetch = require('node-fetch')


app.get('/', function (req, res) {
  //res.send('Hello World!')

  fetch("https://api.zoopla.co.uk/api/v1/property_listings.js?api_key=xpxtkfqdy4z78pqfqz33ta88&postcode=sw1")
    .then((response2) => response2.json())
    .then((result) =>
    {
      console.log("Received response from zoopla, sending to original client")
      //console.log(JSON.stringify(result));
      res.set("Access-Control-Allow-Origin", "*")
      res.send(JSON.stringify(result));
    });

    console.log("The fetch has been sent");
})

 app.listen(3000, function () {
   console.log('Example app listening on port 3000!')    //   http://localhost:3000/
})


