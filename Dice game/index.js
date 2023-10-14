
var randomNumer1 = Math.floor(Math.random()*6)+1;

var randomImages1 = "dice" + randomNumer1 +".png";

var randomSource1 = "images/" + randomImages1;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomSource1);

var randomNumer2 = Math.floor(Math.random()*6)+1;

var randomImages2 = "dice" + randomNumer2 +".png";

var randomSource2 = "images/" + randomImages2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomSource2);

if (randomNumer1>randomNumer2){
    document.querySelector("h1").innerText = "Player 1 wins";
}
else if (randomNumer1<randomNumer2){
    document.querySelector("h1").innerText = "Player 2 wins";
}
else {
    document.querySelector("h1").innerText = "It is a draw";
}