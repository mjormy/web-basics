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
	for (questionIndex = 1; questionIndex <= questions.length; questionIndex ++ ) {
		setQuestion(questionIndex);

		setRightAnswer(questionIndex);
	}

	// Gets the question questionNumber-1 and sets the text in the question div
	function setQuestion(questionNumber) {
		var question = questions[questionNumber - 1].question;

		$( "#question-" + questionNumber ).text( question );
	}

	// Gets the answer at position questionNumber-1 and calls the respective function
	function setRightAnswer(questionNumber){
		var answer = questions[questionNumber - 1].answer;

		if(answer == "Yes"){
			setYesAsRightAnswer(questionNumber);
		} else {
			setNoAsRightAnswer(questionNumber);
		}
	}

	/*
		The bind function is used to dinamically set the behaviour of the Yes / No buttons.
	*/

	// Sets the click behaviour on the yes and no buttons when "Yes" is the right answer
	function setYesAsRightAnswer(questionNumber){
		$("#yes-button-" + questionNumber).bind( "click", function() {
			show_answer(questionNumber, "correcta");
		});

		$("#no-button-" + questionNumber).bind( "click", function() {
			show_answer(questionNumber, "incorrecta");
		});		
	}

	// Sets the click behaviour on the yes and no buttons when "No" is the right answer
	function setNoAsRightAnswer(questionNumber){
		$("#yes-button-" + questionNumber).bind( "click", function() {
			show_answer(questionNumber, "incorrecta");
		});

		$("#no-button-" + questionNumber).bind( "click", function() {
			show_answer(questionNumber, "correcta");
		});		
	}

	// Shows answer text in the correspondent answer div
	function show_answer(questionNumber, answer) {
		$( "#answer-" + questionNumber ).text( "Tu respuesta es " + answer );
	}
};