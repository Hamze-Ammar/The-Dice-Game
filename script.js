

// Store the imgages sources inside variables then inside an array
const dice1_src = "./images/dice1.png";
const dice2_src = "./images/dice2.png";
const dice3_src = "./images/dice3.png";
const dice4_src = "./images/dice4.png";
const dice5_src = "./images/dice5.png";
const dice6_src = "./images/dice6.png";
const dices = [dice1_src, dice2_src, dice3_src, dice4_src, dice5_src, dice6_src];


//console.log (dice1_src);

//returns a random integer between 0 and max (max excluded)
function getRandomInt(max) {
   return Math.floor(Math.random() * max);
}

console.log (getRandomInt(5));

let dice_1_element = document.getElementsByClassName("img1")[0];
let dice_2_element = document.getElementsByClassName("img2")[0];

// console.log(dice_1);
// console.log(dice_2);

dice_1_element.src = dices[getRandomInt(6)];
dice_2_element.src = dices[getRandomInt(6)];