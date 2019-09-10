//create variables for correct and incorrect answers

var ansCorrect = 0;

var ansWrong = 0;


//create a questions object
var questions = [{
    question: "Recycling is _______?",
    answer: ["Cool", "Stupid", "Bad", "Awful"],
    name: "question1",
    correct: "Cool",
    divClass: ".question1"
},
{
    question: "Recycling is _______?",
    answer: ["Bad", "Cool", "Awful", "Stupid"],
    name: "question2",
    correct: "Cool",
    divClass: ".question2"
},

{
    question: "Recycling is _______?",
    answer: ["Stupid", "Awful", "Cool", "Bad"],
    name: "question3",
    correct: "Cool",
    divClass: ".question3"
},

{
    question: "Recycling is _______?",
    answer: ["Awful", "Bad", "Stupid", "Cool"],
    name: "question4",
    correct: "Cool",
    divClass: ".question4"
},

{
    question: "Recycling is _______?",
    answer: ["Cool", "Stupid", "Bad", "Awful"],
    name: "question5",
    correct: "Cool",
    divClass: ".question5"
}

]

$('#home').click(function () {
    $('html,body').animate({
        scrollTop: $("html").offset().top
    },
        'slow');
});

$('#learn').click(function () {
    $('html,body').animate({
        scrollTop: $(".learn-more").offset().top -100
    },
        'slow');
});

$('#test').click(function () {
    $('html,body').animate({
        scrollTop: $(".knowledge-test").offset().top -100
    },
        'slow');
});

$('#help').click(function () {
    $('html,body').animate({
        scrollTop: $(".help-now").offset().top
    },
        'slow');
});

$('#yes').click(function () {
    alert("Click on the text to select your answer. Good luck!")

    //hide the buttons
    $("#yes").toggle();
    $("#no").toggle();

    //start the timer function
    // startTimer();

    //create a variable for thisQuestion
    var thisQuestion = 0;
    console.log("step 1 complete");

    //fill the html with the first question
    $("#question").html(questions[thisQuestion].question);
    console.log("step 2 complete");

    //fill the html with the answers
    for (i = 0; i < 4; i++) {
        $("#answer" + i).html(questions[thisQuestion].answer[i]);
        console.log("answer" + i + " populated");
    }

    $(".answer").toggle();
    //startTimer function
    // function startTimer() {
    //     $("#countDown").html("<h2>30</h2>");
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);
    // }

    //time variable
    // var timer = 31;

    //interval variable
    // var intervalId;

    //decrement function
    // function decrement() {
    // timer--;

    //set the countDown div to timer
    //     $("#countDown").html("<h2>" + timer + "</h2>");

    //     if ((timer === 0) && (thisQuestion === 9)) {
    //         ansWrong = ansWrong + 1;

    //         alert("Time ran out.");

    //         $("#countDown").toggle(); //hide the countdown
    //         clearInterval(intervalId); //stop the countdown
    //         $(".answer").toggle(); //hide the answers
    //         $("#question").toggle(); //hide the question
    //         $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
    //         $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
    //         $(".results").css('visibility', 'visible'); //show the results class
    //     } else if (timer === 0) {
    //         //call the checkAnswer function
    //         checkAnswer("timed out");

    //         //alert that time expired
    //         alert("Time ran out.");

    //         //go to the next question
    //         nextQuestion();
    //     }

    // }


    //move to next question function
    function nextQuestion() {

        //set question id to question
        $("#question").html(questions[thisQuestion].question);

        //loop to set answer ids to answers
        for (i = 0; i < 4; i++) {
            $("#answer" + i).html(questions[thisQuestion].answer[i]);
            console.log("answer" + i + " logged");
        }

        //start the timer
        // timer = 30;
        // startTimer();


    }

    //if statement comparing selected answer and correct answer, add wrong/right, reset timer, increment thisQuestion by 1
    function checkAnswer(x) {

        //if x equals the correct answer for this question, do good stuff
        if (x === questions[thisQuestion].correct) {
            console.log("if statement working");

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);

            //add 1 to ansCorrect
            ansCorrect = ansCorrect + 1;
            console.log("Correct Answers: " + ansCorrect);

            //move to next question function call
            nextQuestion();
        } else {
            //if it doesnt, do bad stuff

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);

            //add 1 to ansWrong
            ansWrong = ansWrong + 1;
            console.log("Wrong Answers: " + ansWrong);
            console.log("this is the issue");

            //move to next question function call
            nextQuestion();
        }
    }

    //on click event for all answer class divs
    $(".answer").click(function () {
        //if thisQuestion > 9 then show quiz results, a button to play again

        var checkIt = $(this).html();

        if (thisQuestion === 4) {

            if (checkIt === questions[thisQuestion].correct) {
                console.log("if statement working");

                //add 1 to ansCorrect
                ansCorrect = ansCorrect + 1;
                console.log("Correct Answers: " + ansCorrect);

                //reset timer function call
            } else {
                //increment thisQuestion by 1
                thisQuestion = thisQuestion + 1;
                console.log("We are on Question " + thisQuestion);

                //add 1 to ansWrong
                ansWrong = ansWrong + 1;
                console.log("Wrong Answers: " + ansWrong);

            }


            // $("#countDown").toggle(); //hide the countdown
            // clearInterval(intervalId); //stop the countdown
            $(".answer").toggle(); //hide the answers
            $("#question").toggle(); //hide the question
            $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
            $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
            $(".results").css('visibility', 'visible'); //show the results class

        } else {

            checkAnswer(checkIt);
        }

    });




});


$('#no').click(function () {

    alert("You have chosen Expert Mode. Congratulations! Answer all questions in 30 seconds or be ridiculed by a computer!")

    //hide the buttons
    $("#yes").toggle();
    $("#no").toggle();

    //start the timer function
    // startTimer();

    //create a variable for thisQuestion
    var thisQuestion = 0;
    console.log("step 1 complete");

    //fill the html with the first question
    $("#question").html(questions[thisQuestion].question);
    console.log("step 2 complete");

    //fill the html with the answers
    for (i = 0; i < 4; i++) {
        $("#answer" + i).html(questions[thisQuestion].answer[i]);
        console.log("answer" + i + " populated");
    }

    // //startTimer function
    // function startTimer() {
    //     $("#countDown").html("<h2>30</h2>");
    //     clearInterval(intervalId);
    //     intervalId = setInterval(decrement, 1000);
    // }

    // //time variable
    // var timer = 31;

    // //interval variable
    // var intervalId;

    //decrement function
    // function decrement() {
    //     timer--;

    //     //set the countDown div to timer
    //     $("#countDown").html("<h2>" + timer + "</h2>");

    //     if (timer === 0) {
    //         alert("That was pretty pathetic. Please try again!");

    //         // $("#countDown").toggle(); //hide the countdown
    //         // clearInterval(intervalId); //stop the countdown
    //         $(".answer").toggle(); //hide the answers
    //         $("#question").toggle(); //hide the question
    //         $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
    //         $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
    //         $(".results").css('visibility', 'visible'); //show the results class
    //     }

    // }


    //move to next question function
    function nextQuestion() {

        //set question id to question
        $("#question").html(questions[thisQuestion].question);

        //loop to set answer ids to answers
        for (i = 0; i < 4; i++) {
            $("#answer" + i).html(questions[thisQuestion].answer[i]);
            console.log("answer" + i + " logged");
        }
    }

    //if statement comparing selected answer and correct answer, add wrong/right, reset timer, increment thisQuestion by 1
    function checkAnswer(x) {

        //if x equals the correct answer for this question, do good stuff
        if (x === questions[thisQuestion].correct) {
            console.log("if statement working");

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);

            //add 1 to ansCorrect
            ansCorrect = ansCorrect + 1;
            console.log("Correct Answers: " + ansCorrect);

            //move to next question function call
            nextQuestion();
        } else {
            //if it doesnt, do bad stuff

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);

            //add 1 to ansWrong
            ansWrong = ansWrong + 1;
            console.log("Wrong Answers: " + ansWrong);
            console.log("this is the issue");

            //move to next question function call
            nextQuestion();
        }
    }

    //on click event for all answer class divs
    $(".answer").click(function () {
        //if thisQuestion > 9 then show quiz results, a button to play again

        var checkIt = $(this).html();

        if (thisQuestion === 4) {

            if (checkIt === questions[thisQuestion].correct) {
                console.log("if statement working");

                //add 1 to ansCorrect
                ansCorrect = ansCorrect + 1;
                console.log("Correct Answers: " + ansCorrect);

                //reset timer function call
            } else {
                //increment thisQuestion by 1
                thisQuestion = thisQuestion + 1;
                console.log("We are on Question " + thisQuestion);

                //add 1 to ansWrong
                ansWrong = ansWrong + 1;
                console.log("Wrong Answers: " + ansWrong);

            }


            // $("#countDown").toggle(); //hide the countdown
            // clearInterval(intervalId); //stop the countdown
            $(".answer").toggle(); //hide the answers
            $("#question").toggle(); //hide the question
            $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
            $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
            $(".results").css('visibility', 'visible'); //show the results class

        } else {

            checkAnswer(checkIt);
        }

    });

});

$('#restart').click(function () {

    location.reload();

})