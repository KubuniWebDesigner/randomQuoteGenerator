$( document ).ready(function() {
	// a bunch of quotes stored in an array inside objects (quote and author argument)
	var myQuotes = [
		{quote: "They may take our lives, but they'll never take our freedom!", author: "Bravehearth"},
		{quote: "You complete me!", author: "Jerry Maguire"},
		{quote: "I will have my vengeance, in this life or the next", author: "Gladiator"},
		{quote: "You make me want to be a better man", author: "As Soon As It Gets"},
		{quote: "Chewie, we are home", author: "Star Wars 7"},
		{quote: "May The Force Be With You", author: "Star Wars"},
		{quote: "Luke, I'm Your Father", author: "Star Wars"},
		{quote: "Wax on, wax off", author: "Karate Kid"},
		{quote: "Good Morning, Vietnam!", author: "Good Morning, Vietnam"},
		{quote: "Go ahead, make my day", author: "Sudden Impact"},
		{quote: "The Dude abides", author: "The Big Lebovski"},
		{quote: "Hasta La Vista, Baby", author: "Terminator 2"},
		{quote: "I'm having an old friend for dinner", author: "The Silence of the Lambs"},
		{quote: "If you build it he will come", author: "Field of Dreams"},
		{quote: "Mama says, -Stupid is as stupid does-", author: "Forrest Gump"},
		{quote: "Keep your friends close, but your enemies closer.", author: "The Godfather"},
		{quote: "Roads? Where we're going we don't need roads.", author: "Back to the Future"},
		{quote: "Say hello to my little friend!", author: "Scarface"},
		{quote: "You can't handle the truth!", author: "A few good men"},
		{quote: "I'll be back", author: "Terminator"},
		{quote: "I'm going to make him an offer he can't refuse.", author: "The Godfather"},
		{quote: "Frankly, my dear, I don't give a damn.", author: "Gone with the Wind"},
	];
    //clicking the quotesGenerator button...
    $("#quotesGenerator").on("click", function() {
    //it generates a random number between 0 and myQuotes.length...
	    var randomNumber = Math.floor(Math.random() * myQuotes.length);
	    //it prints out the quote from the myQuotes array in the position of the random number generated before...	
		$("#quotesDisplay").text(" " + myQuotes[randomNumber].quote + " ");
		$("#authorDisplay").text(" " + myQuotes[randomNumber].author);
	});
    //twitter share button, event on click...
    $("#twitterButton").on("click", function(){
    	//create a var with quote + author content to be shared
    	var quoteToTweet = $("#quotesDisplay").html() + " - " + $("#authorDisplay").html();
		//the function call the window.open method and open the url ..
    	window.open("https://twitter.com/intent/tweet?via=UpTheIrons1978&hashtags=freeCodeCamp&text=" + quoteToTweet)    	
    });
});
