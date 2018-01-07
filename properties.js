function propertySearch(postcode, resultCallback){
  fetch("http://localhost:3000/propertySearch?postcode=" + encodeURIComponent(postcode))
  .then(response => response.json())
  .then(result => resultCallback(result));
  // .then(result => document.getElementById("map").insertAdjacentText("afterend", JSON.stringify(result)));
}
