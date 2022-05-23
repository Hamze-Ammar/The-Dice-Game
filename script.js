// Store the images sources inside variables then inside an array
const dice1_src = "./images/dice1.png";
const dice2_src = "./images/dice2.png";
const dice3_src = "./images/dice3.png";
const dice4_src = "./images/dice4.png";
const dice5_src = "./images/dice5.png";
const dice6_src = "./images/dice6.png";
const dices = [dice1_src, dice2_src, dice3_src, dice4_src, dice5_src, dice6_src];

//All possible results
const outcome = ["Draw!","&#128681 Play 1 wins!","&#128681 Play 2 wins!"];


//returns a random integer between 0 and max (max excluded)
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

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

//Storing the random numbers in vairables
//we need them later to check for the winner
var rand_1 = getRandomInt(6);
var rand_2 = getRandomInt(6);


//change the dices elements sources based on the result
document.getElementsByClassName("img1")[0].src = dices[rand_1];
document.getElementsByClassName("img2")[0].src = dices[rand_2];


//this function will display the result in the element tag passed to it
function displayResult(tag_name){
   //calling the h1 element to display result
    document.getElementsByTagName(tag_name)[0].innerHTML = outcome[getWinner()];
}


displayResult("h1");