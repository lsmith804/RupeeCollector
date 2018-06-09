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

function loseOne() {
    losses++;
    $("#lossCount").html(losses);
    totalScore = 0;
}

function winOne() {
    wins++;
    $("#winCount").html(wins);
    totalScore = 0;
    
}

function newGame() {
    // Store a random value between 19 and 120
    var randomNumber = [Math.floor(Math.random() * 121) + 19];
    console.log("the current random number is" + randomNumber);



//Begin a new game
$(document).ready(function() {
    $("#randomNumber").text(randomNumber);
    $("#totalScore").text(totalScore);
    $("#winCount").text(wins);
    $("#lossCount").text(losses);
    
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
            console.log(purple);
            totalScore = totalScore + purple;
            $("#totalScore").html(totalScore);
            
        });


        //Check for win/loss
        $("button").on("click", function() {
            
            if (totalScore === randomNumber) {
                alert("YOU WIN");
                winOne();
                newGame();
            }   

            if(totalScore > randomNumber) {
                alert("YOU LOSE");
                loseOne();
                newGame();
                
            }
        });


        
    } 



})}
newGame();