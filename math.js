//this are fixed constant thats fixed value

document.write(Math.E + "<br>");
document.write(Math.PI + "<br>");
document.write(Math.SQRT1_2 + "<br>");
document.write(Math.LN2 + "<br>");
document.write(Math.LOG2E + "<br>");
document.write(Math.LN10 + "<br>");


//method
document.write(Math.round(23.67) + "<br>");
document.write(Math.floor(20.67) + "<br>");
document.write(Math.trunc(3.67) + "<br>");
document.write(Math.round(13.67) + "<br>");
document.write(Math.random() + "<br>");
document.write(Math.floor(Math.random(10,40 )*100));
document.write(Math.pow(5,2) + "<br>");
document.write(Math.sqrt(54) + "<br>");
document.write(Math.cbrt(27) + "<br>");
document.write(Math.max(27,23,40,10) + "<br>");
document.write(Math.min(27,100,20,-4,45) + "<br>");
document.write(Math.abs(-1000) + "<br>");
document.write(Math.log(100) + "<br>"); 

//return number from 50 to 1 and 200 to 100
document.write(Math.floor(Math.random()*(50-1))+"<br>");
document.write(Math.floor(Math.random()*(200-100))+100+"<br>");


// calculate 100 exponent 10
 document.write(Math.pow(100,10) + "<br>");

 //find the square root of 225
 document.write(Math.sqrt(225) + "<br>");

 //find the maximum numbers from the list of these numbers: 50, 100, 100,57 80
 document.write(Math.max(50, 100, 100,57,80) + "<br>");

 //round this number to the nearest integer: 12.054885
 document.write(Math.round(12.054885) + "<br>");

 //return the absolute value: -40
 document.write(Math.abs(-40) + "<br>");

 //create a function called dice and then create 2 dice using a dice showing 2 number 
 
      function rollDice(){
        let dice1 = document.write("First Dice:" + Math.floor(Math.random()*6)) + 1;
        let dice2 = document.write("Second Dice:" + Math.floor(Math.random()*6)) + 1;
      };

//example2 

     let dice = ["&#9856;","&#9857;","&#9858;","&#9859;","&#9860;","&#9861;"];

function rolDice() {
    // Generate indexes 0–5
    let index1 = Math.floor(Math.random() * 6);
    let index2 = Math.floor(Math.random() * 6);

    // Convert indexes to dice values 1–6
    let value = index1 + 1;
    let value2 = index2 + 1;

    // Correct sum
    let sum = value + value2;

    // Show dice
    document.getElementById("dice1").innerHTML = dice[index1];
    document.getElementById("dice2").innerHTML = dice[index2];

    // Show sum
    document.getElementById("diceSum").innerHTML = "The sum is: " + sum;
}




