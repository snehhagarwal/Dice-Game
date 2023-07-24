var randomnumber1=Math.floor(Math.random() * 6) + 1;
var randomimage= "images/dice" + randomnumber1 + ".png";
//var randomimagesource= "images/" + randomimage;
document.querySelectorAll("img")[0].setAttribute("src",randomimage);
var randomnumber2=Math.floor(Math.random()*6) + 1;
var randomimage2= "images/dice" + randomnumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if (randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!!";
}
else if (randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}
