let dice = ["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"];

function rollDice() {
    let index1 = Math.floor(Math.random() * 6);
    let index2 = Math.floor(Math.random() * 6);

    let value1 = index1 + 1;
    let value2 = index2 + 1;

    let sum = value1 + value2;

    document.getElementById("dice1").innerHTML = dice[index1];
    document.getElementById("dice2").innerHTML = dice[index2];
    document.getElementById("sumTotal").innerHTML = "The total:" + sum;

}



/* sting */

let message = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, suscipit. Ratione molestiae a numquam eos dolore delectus distinctio doloremque vitae?";

document.write(message.length);

document.write("<br>");

document.write(message +"<br>");

document.write("<br>");

document.write(message.toUpperCase() + "<br>");

document.write("<br>");

document.write(message.toLowerCase() + "<br>");

document.write("<br>");

document.write(message.indexOf("dolore") +"<br>");

document.write("<br>");

document.write(message.replace("lorem", "Tochukwu")+ "<br>");

document.write("<br>");

document.write(message.slice(112,156) + "<br>");

document.write("<br>");

document.write(message.trim() +"<br>");

document.write("<br>");

document.write(message.split(""));