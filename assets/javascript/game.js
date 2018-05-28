// Store a random value between 19 and 120
var randomNumber = [Math.floor(Math.random() * 121) + 19];
console.log("the new random number is" + randomNumber);

//Store random value between 1 and 12 for each crystal
var green = Math.floor(Math.random() * 13) + 1;
var pink = Math.floor(Math.random() * 13) + 1;
var orange = Math.floor(Math.random() * 13) + 1;
var purple = Math.floor(Math.random() * 13) + 1;

//Wins, losses, and guesses so far.
var wins = 0;
var losses = 0;
var winsLosses;
var totalScore = 0;


//Begin a new game
$(document).ready(function() {

    totalScore = 0;
    losses = 0;

    $("#totalScore").append(totalScore);
    $("#randomNumber").append(randomNumber);
    $("#winCount").append(wins);
    $("#lossCount").append(losses);
    
    if (totalScore === randomNumber) {
        wins++;
        alert("You win!");
    }
    
    if (totalScore > randomNumber) {
        losses++;
        alert("LOSER");
        newGame();
    }



    if (totalScore < randomNumber) { 

        //Generate random values for each rupee & add to total
        $("#greenButton").on("click", function () {
            console.log(green);
            totalScore = totalScore + green;
            $("#totalScore").html(totalScore);
        });

        $("#pinkButton").on("click", function () {
            console.log(pink);
            totalScore = totalScore + pink;
            $("#totalScore").html(totalScore);
        });

        $("#orangeButton").on("click", function () {
            console.log(orange);
            totalScore = totalScore + orange;
            $("#totalScore").html(totalScore);

        });

        $("#purpleButton").on("click", function () {
            totalScore = totalScore + purple;
            $("#totalScore").html(totalScore);
            console.log(purple);
        });


        //Check for win/loss

        $("button").on("click", function() {
            if (totalScore === randomNumber) {
                alert("You win!");
        }

            if(totalScore > randomNumber) {
                alert("You lose!");

            }
        });


        
    } 

    //If statement needed to reset game if randomNumber is exceeded or met


});
