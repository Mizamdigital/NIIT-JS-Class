// // conditional statement:
// if false
// switch case
//innerHTML is use to change the entire output...i.e inner html but if you don't want to change the entire  html u can use textContent
// if, else if, else

//example :

let x = 9;
let y = 2;

document.write("The sum of "+ x + "and" + y + "is" + (x/y));
document.write("<br>The modulus of "+ x +" "+"and"+" "+ y + " "+ "is" +" "+(x%y));

if(x % 2 == 0){
    document.write("<br>the number is even");

}
else{
    document.write("<br>the number is odd");
}
 

//example:

let name = "Ayotunde";
if(name == "Ayodele") {
    document.write("<br> Ayotunde, you are welcome to todays segment");
}
else{
    document.write("<br> You are welcome to todays segment")
}

   
//example :

function showMessage() {
    let outputResult = document.getElementById("outputResult");
    let productPrice = document.getElementById("price").value;
    let discount = 0;
    let totalPrice = 0;
    let message = " ";

    if ((productPrice == 20000) || (productPrice >= 15000)){
        discount = 0.2 * productPrice;
        totalPrice = productPrice - discount;
        message = "The total amount is :" +" "+ totalPrice;
    }

    else if (productPrice >= 15000) {
        discount = (15/100) * productPrice;
        totalPrice = productPrice - discount;
        message = "The total amount is :" +" "+ totalPrice;
    }

    else if (productPrice >=10000) {
        discount = (10/100) * productPrice;
        totalPrice = productPrice - discount;
        message = "The total amount is :" +" "+ totalPrice;
    }

    else {
        message = "No discount!!!";
    }

    outputResult.textContent = message;
}
    

//example 2:

function showGreetings() {
       let showResult = document.getElementById("showResult");
       let name = document.getElementById("name").value;
       // current hour from 0 to 23hrs
       let currentHour = new Date().getHours();
       let message = " ";
      
       if (currentHour <= 12){
            message = "Good Morning" +" "+ name;
       }

       else if(currentHour <= 17) {
           message = "Good Afternoon" +" "+ name;
       }

       else {
           message = "Good Evening" +" "+ name;
       } 
       showResult.textContent = message;
}


function showResult() {
    let getResult = document.getElementById ("getResult");
    let studentName = document.getElementById("studentName").value;
    let studentScore = document.getElementById("studentScore").value;
    let message = " ";

    if (studentScore >= 80) {
         message = studentName + " "+ "score: A";
    }

    else if (studentScore >= 70 && studentScore <= 79) {
        message = studentName + " "+ "score: B";
    }

    else if (studentScore >= 55 && studentScore <= 70) {
        message = studentName + " "+ "score: C";
    }

    else if (studentScore >= 50 && studentScore <= 55) {
        message = studentName + " "+ "score: D";
    }

    else if (studentScore >= 40 && studentScore <= 49){
        message = studentName + " "+ "score: E";
    }

    else if (studentScore >= 0 && studentScore <= 40) {
        message = studentName + " "+ "score: F";
    }

    else {
        message = "Invalid score! Please enter score ranging from 1-100";
    }

    getResult.textContent = message;
    studentName.textContent = studentName;
    studentScore.textContent = studentScore;
}
   


