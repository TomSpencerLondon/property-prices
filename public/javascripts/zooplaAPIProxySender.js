function propertySearch(postcode, resultCallback){
  fetch("/zooplaAPIProxy/propertySearch?postcode=" + encodeURIComponent(postcode))
  .then(response => response.json())
  .then(result => resultCallback(result));
}
