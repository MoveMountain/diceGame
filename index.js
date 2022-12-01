//random dice 1
var randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector("img").setAttribute("src","images/dice"+randomNumber1 +".png");
//random dice 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector("img.img2").setAttribute("src","images/dice"+randomNumber2 +".png");
//player one wins
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player One Wins😁";
}
else if (randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Player Two Wins🙌";
}
else{
    document.querySelector("h1").innerHTML = "Its a Draw🚩";
}