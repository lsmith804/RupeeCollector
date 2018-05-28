// will be given a random number at the start of the game. There are four crystals below. By clicking on a crystal, you will add a specific amount of points to your score. You win the game by matching your total score to a random number. You lose the game if your total score goes above the random number.The value of each crystal is hidden from you until you click on it. Each time the game starts, the game will change the values of each crystal.


// Store a random value between 19 and 120
var randomNumber = [Math.floor(Math.random() * 121) + 19];

//Store random value between 1 and 12 for each crystal
var green = Math.floor(Math.random() * 13) + 1;
var pink = Math.floor(Math.random() * 13) + 1;
var orange = Math.floor(Math.random() * 13) + 1;
var purple = Math.floor(Math.random() * 13) + 1;

//Tally wins, losses, and guesses so far.
var wins = 0;
var losses = 0;
var winsLosses;
var totalScore;


//Begin a new game
$(document).ready(function() {
    newGame();
    function newGame() {
    totalScore = 0;

    $("#totalScore").append(totalScore);
    $("#randomNumber").append(randomNumber);
    
    if (totalScore === randomNumber) {
        alert("You win!");
    }
    
    if (totalScore > randomNumber) {
        alert("LOSER");
        newgame();
    }



    if (totalScore < randomNumber) { 

        //Generate random values for each rupee & add to total
        $("#greenButton").on("click", function () {
            console.log(green);
            totalScore = totalScore + green;
            $("#totalScore").html(totalScore);
            if (totalScore === randomNumber) {
                alert("You win!");
            }
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
}

});
