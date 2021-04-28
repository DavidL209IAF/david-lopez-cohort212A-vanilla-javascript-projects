const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
//get random number between 0 and 3 since colors index 0-3
const randomNumber = Math.floor(Math.random() * 4);
//sets body background color
document.body.style.backgroundColor = colors[randomNumber];
//sets the box text with color
color.textContent = colors[randomNumber];
})