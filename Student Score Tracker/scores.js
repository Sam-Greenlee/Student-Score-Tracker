"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

//array declarations
var strings = [];
var scores = [];

window.onload = function() {

    //Display the scores as a function
    var displayScores = function() {

        //var out = "test";
        //var average = -1; What is this supposed to be?

        //Input the firstname in the first name variable
        var firstName = $("first_name").value;

        //Input the lastname in the last name variable
        var lastName = $("last_name").value;
        
        //Input the score in the scoreInput variable
	    var scoreInput = $("score").value;
	    
	    //Input the first name, last name, and score in the strings array
	    strings.push(lastName + ", " + firstName + ": " + scoreInput + "\n");
    
        //last name, first name, scores for in loop variable declaration
        var lastFirstNameScore = "";

        //Run for in loop to output first name, last name, and score in the text box
        for(var i in strings) {
        	lastFirstNameScore += strings[i];

		    //Output the scores on the text box
            $("scores").value = lastFirstNameScore;
        }                         

        //Input the score in the scores array
	    scores.push(scoreInput);

        //Total and count for in loop variable declarations
	    var total = 0;
	    var count = 0;

        //Run for in loop to calculate total and count
        for(var i in scores) {

		    total = total + parseInt(scores[i]);

            count++;
        } 

        //Output the average scores
        $("average_score").value = parseInt(total/count);
    };

    //Add student score button event
    $("add_button").onclick = function() {
    	//Data validation to determine if to display the scores or not
    	if($("first_name").value == "" || $("last_name").value == "" ||
    	    isNaN($("score").value)) {
    	    	alert("Please enter a valid input into either one of the inputs");
    	    }
    	    else {
    	    	displayScores();
    	    }

        //get the add form ready for next entry
        $("first_name").value = "";
        $("last_name").value = "";
        $("score").value = "";
        $("first_name").focus();
    }
    ;
    // end onclick

    //Clear student scores button event
    $("clear_button").onclick = function() {

        // remove the score data from the web page
        $("average_score").value = "";
        $("scores").value = "";

        //Clear the strings array
        for(var i in strings) {
        	delete strings[i];
        }

        //Clear the scores array
        for(var i in scores) {
        	delete scores[i];
        }

        //Focus on the first name
        $("first_name").focus();
    }
    ;
    // end onclick

    //Sort by last name button event
    $("sort_button").onclick = function() {
    	//Used to find out how to delete default comma useing join()
    	//https://www.quora.com/How-do-I-remove-commas-while-displaying-an-array-in-JavaScript                                    
    	$("scores").value = strings.sort().join("");
    }
    ;
    // end onclick

    //Focus on the first name text area at the start of the program
    $("first_name").focus();
};
