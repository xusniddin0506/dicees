const image1 =  document.querySelectorAll("img")[0];
const image2 =  document.querySelectorAll("img")[1];
const winPlayer =  document.querySelector("h1");



let randomNumber = Math.floor(Math.random() * 6) + 1;  // 1 - 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;  // 1 - 6

let randomImageSource = "Images/dice" + randomNumber + ".png"; // images.dice1.png
let randomImageSource2 = "Images/dice" + randomNumber2 + ".png"; 




image1.setAttribute("src" , randomImageSource);

image2.setAttribute("src" , randomImageSource2);


if (randomNumber > randomNumber2) {
    winPlayer.textContent = "Player1 win!";
}

else if (randomNumber < randomNumber2) {
    winPlayer.textContent = "Player2 win!";
}


else{
    winPlayer.textContent = "Drow!";
}