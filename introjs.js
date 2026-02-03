/* declaration of variable:

var varName = "Hello, this is an intro class to JS";
document.write(varName);

//another variable
let num1 = 10;
let num2 =20;
var sum = num1 + num2;
window.alert("<br/> the sum of" + num1 + "and" + num2 +"is:"+sum); */

/* document.write("<br/> the sum of" + num1 + "and" + num2 +"is:"+sum); 
   window.prompt("<br/> the sum of" + num1 + "and" + num2 +"is:"+sum);
   alert("<br/> the sum of" + num1 + "and" + num2 +"is:"+sum);
*/

//constant variable
/* const pi = 3.14;
const avogadro = 6.02214076e23;
document.write("<br> The value of pi is:" + pi);
document.write("<br> The value of avogadro's number is: " + avogadro); */

/*  introducing some special keywords */

/* let
var  
const
if
else
for
while
do
return
try
catch
new
break;
continue
function
math
switch */ 

/*  don't 'naming convention' */

//dont use a $ sign to start a name, 
//dont start with special character like "-,_,/" 


/* do */

let first_name = "JOHN";
let first_Name = "maxwell";
let today_JS_Class = "INTRO TO JS";
let todayJSClass = "INTRO TO JS";
let lastName = "doe";

function greetStudents() {
    window.alert("hello students, welcome to JS class");
}

greetStudents();
greetStudents();
greetStudents();
greetStudents();

//Data types in Js
//primitive data types
 string -- sequence of characters  //"young doe"
 Number -- interger or Float //10
 Boolean -- true or false  //true
 null -- no value //null
 undefined --variable declared but not assigned a value //undefined
 Symbol-- unique and immutable value // let uniqueID = symbole("id");                                                                                                                                                                                                                                                                                                                                        
 BigInt -- larger integer values //let bigIntNum = 9007199254741991n;

//non-primitive data types
 object-- collection of key-value pairs
 subject-- collection of items //{name: "john", 20}
 array -- collection of items //{"math, "science", "history"}

x=10,y=20, sum=x+y;
 document.write("The sum of:" + x + "and" + y + "is:" + sum);
 var x=10, y=20, sum=x+y;


