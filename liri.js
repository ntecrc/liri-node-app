require("dotenv").config();

// NPM package for reading and writing files
var fs = require("fs");         

// code required to import the `keys.js` file and store it in a variable
var keys = require("./keys.js");

request("http://www.omdbapi.com/?i=tt3896198&apikey=e49dacd7", function(error, response, body) {
    if (!error && response.statusCode === 200) {
        console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
    }
});