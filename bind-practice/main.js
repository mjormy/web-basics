window.onload = function(){

	var questions = 
	[
	// Array with all the questions and answers
	// If I need to change / add / delete them, I'll do it in this array
		{
			question:"Do I like hawaian pizza?",
			answer:"Yes"
		},
		{
			question:"Do I like to get up very early in the morning?",
			answer:"No"
		},
		{
			question:"Do I like video games?",
			answer:"No"
		},
		{
			question:"Am I in love with the best partner ever?",
			answer:"Yes"
		}
	];


	// Iterates over the questions array to set the questions and behaviour for the buttons
	for (question_index = 1; question_index <= questions.length; question_index ++) {
		set_question(question_index);

		set_right_answer(question_index);
	}

	// Gets the question question_number-1 and sets the text in the question div
	function set_question(question_number) {
		var question = questions[question_number - 1].question;

		$( "#question-" + question_number ).text( question );
	}

	// Gets the answer at position question_number-1 and calls the respective function
	function set_right_answer(question_number){
		var answer = questions[question_number - 1].answer;

		if(answer == "Yes"){
			set_yes_as_right_answer(question_number);
		} else {
			set_no_as_right_answer(question_number);
		}
	}

	/*
		The bind function is used to dinamically set the behaviour of the Yes / No buttons.
	*/

	// Sets the click behaviour on the yes and no buttons when "Yes" is the right answer
	function set_yes_as_right_answer(question_number){
		$("#yes-question-" + question_number).bind( "click", function() {
			show_answer(question_number, "correcta");
		});

		$("#no-question-" + question_number).bind( "click", function() {
			show_answer(question_number, "incorrecta");
		});		
	}

	// Sets the click behaviour on the yes and no buttons when "No" is the right answer
	function set_no_as_right_answer(question_number){
		$("#yes-question-" + question_number).bind( "click", function() {
			show_answer(question_number, "incorrecta");
		});

		$("#no-question-" + question_number).bind( "click", function() {
			show_answer(question_number, "correcta");
		});		
	}

	// Shows answer text in the correspondent answer div
	function show_answer(question_number, answer) {
		$( "#answer-" + question_number ).text( "Tu respuesta es " + answer );
	}
};