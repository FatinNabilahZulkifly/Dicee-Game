alert("Welcome to the Dicee Game!");
var player1 = prompt("Who is Player 1?", ["Player 1"]);
var player2 = prompt("Who is Player 2?", ["Player 2"]);

var randomNumber1 = Math.floor((Math.random()*6))+1;
var randomNumber2 = Math.floor((Math.random()*6))+1;

document.getElementById("player1").innerHTML = player1;
document.getElementById("player2").innerHTML = player2;

document.getElementById("img1").src = "images/dice" + randomNumber1 +".png";
document.getElementById("img2").src = "images/dice" + randomNumber2 +".png";

document.getElementById("result").innerHTML = gameResult()

function gameResult() {

    var winner="";

    if (randomNumber1 < randomNumber2) {       
        winner = player2 +" Wins!🏆";
    } if (randomNumber2 < randomNumber1) {
        winner = "🏆" + player1 +  " Wins!";
    } if (randomNumber2 === randomNumber1) {
        winner = "Draw!";
    }

    console.log(winner);

    return winner;

}
