//NPM package for reading and writing files
require("dotenv").config();

// Code required to import the `keys.js` file 
// and store it in a variable
var keys = require("./keys.js");

// NPM package for reading and writing files
var fs = require("fs");

//NPM package for making ajax-like calls
var request = require("request");				

// Access your keys information
// var spotify = new Spotify(keys.spotify);


// My-tweets This will show your last 20 tweets w
// and when they were created at in your terminal/bash windo
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);


function fetchTwitter(){
    var tweetsLength;
    var params = { screen_name: 'dev62437207' };
    client.get('statuses/user_timeline', function (error, tweets, response) {
        if (error) throw error;

        tweetsLength = 0;

        for(var i=0; i<tweets.length; i++){
			tweetsLength ++;
		}
		if (tweetsLength > 20){
			tweetsLength = 20;
		}
		for (var i=0; i< tweetsLength; i++){
			console.log("Tweet " + (i+1) + " created on: " + tweets[i].created_at);
			console.log("Tweet " + (i+1) + " text: " + tweets[i].text);
			console.log("--------------------------------------------------------------");

			// appendFile("Tweet " + (i+1) + " created on: " + tweets[i].created_at);
			// appendFile("Tweet " + (i+1) + " text: " + tweets[i].text);
			// appendFile("--------------------------------------------------------------");
		}

    });
}








// request("http://www.omdbapi.com/?i=tt3896198&apikey=e49dacd7", function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//         console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//     }
// });