// Store the images sources inside an array
const dices = ["./images/dice1.png", "./images/dice2.png", "./images/dice3.png", "./images/dice4.png", "./images/dice5.png", "./images/dice6.png"];

//All possible results
const outcome = ["Draw!","&#128681 Play 1 wins!","&#128681 Play 2 wins!"];

// Determine who wins
function getWinner() {
    if (rand_1>rand_2){
        return 1;
    }
    else if (rand_1<rand_2){
        return 2;
    }
    else {
        return 0;
    }
}

//Storing the random numbers in variables
//we need them later to check for the winner
var rand_1 = Math.floor(Math.random() * 6);
var rand_2 = Math.floor(Math.random() * 6);

//change the dices elements sources based on the result
document.getElementsByClassName("img1")[0].src = dices[rand_1];
document.getElementsByClassName("img2")[0].src = dices[rand_2];

//calling the h1 element to display result
document.getElementsByTagName("h1")[0].innerHTML = outcome[getWinner()];