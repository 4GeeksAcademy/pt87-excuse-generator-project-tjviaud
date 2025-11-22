import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let who = ['The neighbor', 'My wife', 'The kids', 'My mom'];
let action = ['popped', 'stole', 'scraped', 'broke'];
let what = ['my tire', 'my car', 'my house'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was cleaning'];

function getRandomNumber(a, b) {
  return Math.floor(Math.random() * (b - a) + a);
}

function getRandom(anyArray){
  let max = who.length - 1;
  let min = 0;
  let random = getRandomNumber(min, max);
  return anyArray[random];
}
 
  console.log("Hello Rigo from the console!");
  this.document.querySelector('#excuse').innerHTML = getRandom(who) + " " + getRandom(action) + " " + getRandom(what) + " " + getRandom(when)
};
