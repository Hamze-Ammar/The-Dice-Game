// Store the imgages sources inside variables then inside an array
const dice1_src = "./images/dice1.png";
const dice2_src = "./images/dice2.png";
const dice3_src = "./images/dice3.png";
const dice4_src = "./images/dice4.png";
const dice5_src = "./images/dice5.png";
const dice6_src = "./images/dice6.png";
const dices = [dice1_src, dice2_src, dice3_src, dice4_src, dice5_src, dice6_src];


//returns a random integer between 0 and max (max excluded)
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

//Storing the random numbers in vairables
//we need them later to check for the winner
var rand_1 = getRandomInt(6);
var rand_2 = getRandomInt(6);


//Storing the two dices element in two variables
let dice_1_element = document.getElementsByClassName("img1")[0];
let dice_2_element = document.getElementsByClassName("img2")[0];

//change the dices elements sources based on the result
dice_1_element.src = dices[rand_1];
dice_2_element.src = dices[rand_2];

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

//All possible results
const outcome = ["Draw!","&#128681 Play 1 wins!","&#128681 Play 2 wins!"];

//this function will display the result in the element tag passed to it
function displayResult(tag_name){
   //calling the h1 element to display result
    var element = document.getElementsByTagName(tag_name)[0];
    element.innerHTML = outcome[getWinner()];
}


displayResult("h1");