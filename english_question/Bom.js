//js bom treat this as window prop
var name = "mizam";

/* console.log(window.name); */

//or

//js bom treat this as window method
/* function printName() {
 console.log(window.name);
}

window.printName();

document.write("<br>"); */

//js built in method for window object

//window.alert():

/* function printName() {
 window.alert(window.name);
}

window.printName(); */



//confirmation
var confirmMessage = window.confirm("are you sure you want to leave this page");
 if(confirmMessage){
    alert("user left the page");

    //location
    window.location.href = "Dom2.html";
 }
 else{
    alert("user unable to leave the page");
 }

 //window. prompt

 /* var name = window.prompt("enter your name");

 if (name){
    document.write(name);
 } */


 //navigator
 document.write(navigator.userAgent + "<br>");
 document.write(navigator.language + "<br>");
 document.write(navigator.platform);
 
 console.log(history);

 //location properties

 console.log(window.location.hostname);
 console.log(window.location.href);
 console.log(window.location.pathname);

 //class work 

 /* if window.location.hostname =127.0.0.1. then display 
    alert message that the page is not yet pushed to live 
    else your site has been hosted. */

 var host_name = window.location.hostname;

 if(host_name === "127.0.0.1"){
    alert("the page is on your PC");
 }
 else{
    alert("the page has been hosted live");
 }

 //browser screen info

 document.write("the screen width:" + screen.width + "<br>");
 document.write("the screen hight:" + screen.height + "<br>");


 //Responsive background logic
 var screenSize = screen.width;
 var contentBox = document.getElementById("contentbox");

 if(screenSize <= 480){
   contentBox.style.backgroundColor = " blue";
 }

 else if(screenSize <= 768){
   contentBox.style.backgroundColor = " purple";
 }

 else{
    contentBox.style.backgroundColor = "red";
 }
   

 //screen orientation
 document.write(screen.orientation.type);


  //timers..count down 
 var timerDisplay = document.getElementById("timer-div");

 let number = 15;
 let timer = window.setInterval(
    ()=>{
        timerDisplay.textContent =  number;
        number--;
        if(number === 0){
            clearInterval(timer);
            alert("time's up!");
        }
    },1000 );


    //stop alert after some time
    let greetings = "Hello homber";
    let greetAlert = window.setTimeout(()=>{
        alert(greetings);
    },7000);

    var alertStop = document.getElementById("stopAlert");   

    alertStop.addEventListener("click", ()=>{
        window.clearTimeout(greetAlert);
    });