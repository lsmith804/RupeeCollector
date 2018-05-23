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

//begin a new game
$(document).ready(function() {
console.log(wins);

    $("#greenButton").on("click", function () {
        console.log(randomNumber + "green button works");
    });


});

//Begin a new game
function newGame() {
    var variable = "ny name is Lori";
    console.log(randomNumber);
    console.log(variable);
}

newGame();
