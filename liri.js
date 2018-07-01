//NPM package for reading and writing files
require("dotenv").config();

// NPM package for reading and writing files
var fs = require("fs");

// Code required to import the `keys.js` file 
// and store it in a variable
var keys = require("./keys.js");

//NPM package for making ajax-like calls
var request = require("request");				

// Access your keys information
// var spotify = new Spotify(keys.spotify);


// My-tweets This will show your last 20 tweets 
// and when they were created at in your terminal/bash windo
var Twitter = require('twitter');
var client = new Twitter(keys.twitter);

var input = process.argv[2];

switch (input) {
	case 'myTweet':
		myTweets();
	break;
}
	function myTweets(){
			var params = { screen_name: 'dev62437207' };
			client.get('statuses/user_timeline', params, function (error, tweets, response) {
				if (!error) {
					console.log(tweets.created_at);
					console.log(tweets.text);
				}
			});
	
		}

// request("http://www.omdbapi.com/?i=tt3896198&apikey=e49dacd7", function(error, response, body) {
//     if (!error && response.statusCode === 200) {
//         console.log("The movie's rating is: " + JSON.parse(body).imdbRating);
//     }
// });