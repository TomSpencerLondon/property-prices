function zooplaAPIRequest(){
  fetch("https://api.zoopla.co.uk/api/v1/property_listings" + "?api_key=xpxtkfqdy4z78pqfqz33ta88&postcode=SW183DN")
  .then(function(result){
    console.log(result)
  })

}
