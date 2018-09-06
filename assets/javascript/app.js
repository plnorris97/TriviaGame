
// When the player visits the site, they see the game title, directions and a start button. DOM MANIPULATION
// The player must press the start button to start the game & timer. DOM MANIPULATION

window.onload = function() {

    $("#questions").hide();
    $("#game-over").hide();
    $("#start").on("click",trivia.start);
}

var trivia = {
    
    start: function() {
        timer();
        $("#questions").show();
        $("#start").hide();  
    }
}

function tally() {

    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var answered = 0;

    for (var i = 1; i <= 10; i++) {
        
        var radios = document.getElementsByName("question" + i);
        for (var j = 0; j < radios.length; j++) {

            var radio = radios[j];

            if (radio.value == "correct" && radio.checked) {
                correct++;
                $("#correct").html("You answered correctly: " + correct);
                console.log(correct);
            }
            else if (radio.value == "incorrect" && radio.checked) {
                incorrect++;
                $("#incorrect").html("You answered incorrectly: " + incorrect);
                console.log(incorrect);
            }
            // else (radio.unchecked) 
            //     unanswered++;
            //     $("#unanswered").html("You did not answer: " + unanswered);
            //     console.log(unanswered);

            else answered = correct + incorrect;
            unanswered = 10 - answered;
            $("#unanswered").html("You did not answer: " + unanswered);
            
        }
        }
    }

function timer() {

    // create the variable for the timer/counter
    var number = 45;

    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  that runs the decrement function once a second.

    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);

    function decrement() {

        //  Decrease number by one.
        number--;
        console.log(number);

        //  Show the number in the #display tag.
        $("#display").html("Time Remaining: " + number);

        if (number === 0) {

            //  ...run the game over function.
            gameOver();

            //  Alert the user that time is up.
            // alert("Time's Up!");
            clearInterval(intervalId);
        }
    }
}
 
function gameOver() {
  tally();
  $("#title").show();
  $("#game-over").show();
  $("#questions").hide();
  $("#intro").hide();
}
  

// function for when time expires and tally screen shows with correct, incorrect and unanswered.
   // function gameOver() {
     



// // When the play button gets clicked, run the timer function. 
// // The player has a set time limit of 1 minute to answer all questions. 

// // Each question has four answer choices. HTML
// // The answer choices are radio buttons. HTML

// At the end of the time limit, the player's selections are tallied to correct, incorrect or unanswered.

// The page is refreshed and the tallies are shown on the screen in place of the questions. DOM MANIPULATION