const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
//get random number between 0 and 3 since colors index 0-3
const randomNumber = '#' + hex[getRandomNum()] + hex[getRandomNum()] + 
hex[getRandomNum()] + hex[getRandomNum()] + hex[getRandomNum()] + hex[getRandomNum()];
console.log(randomNumber);
//sets body background color
document.body.style.backgroundColor = randomNumber ;
//sets the box text with color
color.textContent = randomNumber ;
})

function getRandomNum(){
    return Math.floor(Math.random() * 16);
}