//function declaration
function displayHello() {
  let message = "Hello Instructor";
  alert(message);
}

//function call
displayHello();

/* function hello(){

let message = "Hello world";
alert(message);
}

hello(); */


//function with parametters
let a = b = c = " ";
function sumOfTwo(a,b){
    c = a + b;
    document.write("The sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c + "<br>")
}
sumOfTwo(30,20);
sumOfTwo(50,20);
sumOfTwo(80,20);

//subtraction
let f = b = c = 0;
function sumOff(f,b){
   c = f - b;
   document.write("The total sum of:" + " " + f + " " + "and" + " " + b + " " + "=" +" "+ c +"<br>")
}

sumOff(20,10);

//multiplication
function multSum(a,b){
c = a*b;
document.write("the total sum of:" +" " + a + " " + "and" + " " + b + " " + "is" + " " + c +"<br>");

}
multSum(2,6);


//DisplayGreetings
function DisplayGreetings(){
   let time = new Date();
    let currentHour = time.getHours();
 
    let message = "Good";

    if(currentHour < 12){
        document.write(message + " " + "Morning");
    }

    else if(currentHour < 17){
        document.write(message + " " + "Afternoon");
    }

    else{
        document.write(message + " " + "Night<br>");
        /* console.log(message + " " + "Night"); */
    }
}
 
DisplayGreetings();

// or
function greetings(){

let times = new Date();
let currentHours = times.getHours();
let greet = " ";

if(currentHours < 12){
  greet = "Good Morning";
  document.write(greet);
}

else if(currentHours < 17){
  greet = "Good Afternoon";
  document.write(greet);
}

else{
   greet = "Good Evening";
   document.write(greet);
}

}

greetings();



//showTime function
function showTime(){
    let time = new Date();
    document.write(time.toLocaleTimeString());
    
}

//run the showTime function repeatedly
   /*  setInterval(showTime,1000); */
    
    // call it 
showTime();


//display if a number is even or odd

function numberEvOd(){
    let num = document.getElementById("num1").value;
    let result = document.getElementById("check");
    if(num % 2 == 0){
        result.textContent = num + " is an Even number";
    }
    else{
        result.textContent = num + " is an Odd number";
    }
}

//or
  function numberEvOd(){
    let num = document.getElementById("num1").value;
    let output = " ";
 
    if(num % 2 == 0){
        output += " The number is Even";
    }
    else{
        output += "The number is odd";
    }
} 


//Age calculator function

function newAge(){
let year = 2000;
    let date = new Date();
    let currentYear = date.getFullYear();

    age = currentYear - year;
    document.write("<br>you are" + " " + age + "years old");
}

newAge();

//or
function getAge(year){
 let dates = new Date();
 let currentYear = dates.getFullYear();
 /* let year = 2003; */
 let ages = currentYear - year;
 
  document.write("<br>"+ages);
}

getAge(2003);   //Immediately after JS loads it will run the function automatically..Used for auto-run logic or testing

//or
function callAge(){
let year = document.getElementById("age").value;
let outputAge = document.getElementById("showAge");
let output = " ";
let date = new Date();
let currentYear = date.getFullYear();

    age = currentYear - year;
    output = "you are" + " " + age + "years old";

    outputAge.innerHTML = output;
    
}


function showGender(){
    let genderResult = document.getElementById("gender").value;
    let boyOrGirl = document.getElementById("boyOrGirl");
    let result = " ";
    
    if(genderResult === "boy"){
        result = "This is a Boy";
    }

    else if(genderResult === "girl"){
        result = "This is a Girl";
    }

    else if(genderResult === "cross gender"){
         result = "This is a Cross Gender";
    }

    else{
        result = "Please enter if you are a boy or girl..";
    }

    boyOrGirl.innerHTML = result; //You don’t call it inside itself, because you just want it to run once when the button is clicked.
                                  //Timers, loops, etc.
}

document.write("<br>");

function show_hide_contentBox(){
    let contentBox = document.getElementById("contentBox");

    if(contentBox.style.display === "none"){
        contentBox.style.display = "block";
    }
    else{
        contentBox.style.display = "none";
    }
}

function change_bgRed(){
    let blue_red = document.getElementById("blue_red");
    /* blue_red.style.backgroundColor = "red";
    blue_red.style.color = "white"; */

    if(blue_red.style.backgroundColor === "blue"){
        blue_red.style.backgroundColor = "red";
        blue_red.style.color = "white";
    }
    
    else{
        blue_red.style.backgroundColor = "blue";
        blue_red.style.color = "white";
    }
    
}




