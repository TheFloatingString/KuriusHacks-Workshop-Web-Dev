// the JavaScript file performs actions

// please note, for JavaScript functions to work, the referenced IDs 
// that are preceded with a # in JavaScript must exactly match
// their counterparts in the HTML file


// this function is used to process the Star Wars information, 
// and insert it into the HTML webpage
function displayInfo(starWarsObject){

	// only executes the code if there is at least 1 true result
	if (starWarsObject.results.length > 0) {

		// extracting information from the Star Wars object
		var name = starWarsObject.results[0].properties.name;
		var eyeColor = starWarsObject.results[0].properties.eye_color;
		console.log(name);
		console.log(eyeColor);

		// processing the sentence
		var sentence = name + " has " + eyeColor + " eyes.";

		// insert the sentence into the div with the id called textReceiver
		$("#textReceiver").html(sentence);
	}	
}

// this block of code, when button with id called submit-id is clicked, 
// fetches the external Star Wars API and calls our displayInfo() function
$("#submit-button").on("click", function() {

	// get search name from input field with the id name
	var searchName = $("#name").val();

	// call external API
	$.get("https://www.swapi.tech/api/people/?name="+searchName, function(data){
		
		// display returned Star Wars Object
		console.log(data);

		// call displayInfo() function
		displayInfo(data);
	})
})

