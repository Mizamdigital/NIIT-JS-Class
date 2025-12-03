//example:
/* let name = "pascal";
let message = (name == "pascal") ? "good Afternoon pascal" : "Good afternoon User!";
document.write(message);
 
let name = "pascal";
if (name == "pascal") {
    document.write("good Afternoon pascal");
}
else {
    document.write("Good afternoon User!");

} */
//example:
let day = "Thursday";

let greetings = (day == "Thursday") ? "!Hey user, it's Thursday" : "It's another day!";

 alert(greetings);
  

 let today = "Friday";
  let jumahGreeting = (today == "monday") ? "Jumah Mubarak everyone!" : "Hello guys..";

  window.prompt(jumahGreeting);



 function showMessage () {
   const outputResult = document.getElementById("outputResult");
   const productPrice = document.getElementById("price").value;
  /*  let discount = 0;
   let totalPrice = 0; */
   let messages = " ";


   message = ((productPrice == 20000) || (productPrice >= 15000)) ? "The total amount to be paid is" + (productPrice - (0.2 * productPrice))
   : (productPrice >= 15000) ? "The total amount to be paid is" + (productPrice - (0.15 * productPrice))
   : (productPrice >= 10000) ? "The total amount to be paid is" + (productPrice - (0.1 * productPrice))
   : "No discount!!!"; 
   
     outputResult.textContent = message;
   
 }

     /* switch(true){
        case((productPrice == 20000) || (productPrice >= 15000)):
        messages = "The total amount to be paid is" + (productPrice - (0.2 * productPrice));
        break;
        case(productPrice >= 15000):
        messages = "The total amount to be paid is" + (productPrice - (0.15 * productPrice));
        break;
        case(productPrice >= 10000):
        messages = "The total amount to be paid is" + (productPrice - (0.1 * productPrice));
        break;
        default:
            messages = "No discount!!!";
        
            
     }
     productPrice.textContent = productPrice;
     outputResult.textContent = messages; */

 //there 2 way of adding condition, which are if condition and switch case
 //we use switch case to display base on the number of case

 let day = new Date().getDay();
 let message;
 switch(day){
    case 1:
        message = "Today is Monday";
        break;
         case 2:
        message = "Today is Tuesday";
        break;
    case 3:
        message = "Today is Wednesday";
        break;    
         case 4:
        message = "Today is Thursday";
        break;
    case 5:
        message = "Today is Friday";
        break;
        default:
            message = "Today is weekend!";
 }
 window.alert(message);


 //example 2:

 function showResult() {
   let getResult = document.getElementById("getResult");
   let studentName = document.getElementById("studentName").value;
   let studentScore = document.getElementById("studentScore").value;
   let message = " ";

  switch (true){
    case(studentScore >= 80):
    message = studentName + " "+ "score: A";
    break;

    case (studentScore >= 70 && studentScore <= 79):
        message = studentName + " "+ "score: B";
        break;

    case (studentScore >= 55 && studentScore <= 70):
        message = studentName + " "+ "score: C";
        break;
        
    case (studentScore >= 50 && studentScore <= 55):
        message = studentName + " "+ "score: D";
        break;

    case (studentScore >= 40 && studentScore <= 49):
        message = studentName + " "+ "score: E";
        break;
        
    case (studentScore >= 0 && studentScore <= 40):
        message = studentName + " "+ "score: F";
        break;
        default:    
        message = "Invalid score! Please enter score ranging from 1-100";
  }  

        getResult.textContent = message;
        studentName.textContent = studentName;
        studentScore.textContent = studentScore;

 }
 