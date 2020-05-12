//  illustrating ALAX
const API_URL = "https://swapi.dev/api/people/1/";

var promise = fetch(API_URL); // fetch is the new way to do AJAX and returns a promise
// var someAPIData = document.querySelector(".someAPIData");

promise
  .then(function (response) {
    var processingPromise = response.json(); // parsing into the object
    return processingPromise; // returns that into another promise = promise chaining
  })
  .then(function (processedResponse) {
    // var img = document.createElement("img");
    // img.src = processedResponse.message;
    // img.alt = "Description Here";
    // someAPIData.appendChild(img);

    console.log(processedResponse);
  });

console.log("this will log first");
