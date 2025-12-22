    let h1 = document.getElementsByTagName("h1")[0];
     h1.innerText = "Hello World,This is JS DOM";
     h1.setAttribute("class","header");
     h1.setAttribute("id","mainHeader"); 
     h1.style.backgroundColor = "pink";
     h1.style.width = "100%";
     h1.style.height = "60px";
     h1.style.display = "flex";
     h1.style.alignItems = "center";
     h1.style.justifyContent = "center";

      
     //list items
      let li = document.querySelectorAll('ul li.list');

      li.forEach((item =>{
         item.innerText = "This is DOM";  
      }));

    //style 
   let body = document.getElementById("body");
    body.style.backgroundColor = "white";
    body.style.color = "black";
    body.style.margin="0";
    body.style.padding="0";
    body.style.boxSizing="border-box";


    let p =   document.querySelector("p");
     p.setAttribute("class","text");
     p.setAttribute("id","unique");
     document.getElementById("unique").innerText = "Hello World";

 /* function bulb_Switch(){
    let bulb = document.getElementById("bulb");
         if(bulb.src !=="images/on.jpg"){
          bulb.src="images/on.jpg";
         }
      }
      function bulb_SwitchOff(){
    let bulb = document.getElementById("bulb");
         if(bulb.src !=="images/off.jpg"){
          bulb.src="images/off.jpg";
         }
      } */


       let div= document.createElement('p');
      div.innerText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque vero laudantium cumque iste delectus officiis distinctio suscipit nisi fuga molestias";
      div.style.fontSize="20px";
      div.style.color="black";      
         
     document.getElementById('anotherElement').appendChild(div);


     //example 2: creating a on/off light bulb with single switch button.

     

     function toggleBtn(){
      let bulbs = document.getElementById("bulbs");   

      if (bulbs.src.includes("images/off.jpg")){
         bulbs.src="images/on.jpg";
      }
      else{
         bulbs.src="images/off.jpg";
      }
     }



/* 
let fileName = bulb.src.split("/").pop();  // gets only "off.jpg"

if (fileName === "off.jpg") {
    bulb.src = "on.jpg";
} else {
    bulb.src = "off.jpg";
}

*/

//creating a header and nav bar suing DOM manupulation:
//select header
let header = document.querySelector("header");
//set attributes
 header.setAttribute("class","container");
 header.setAttribute("id","mainContainer");
   header.style.height= "80px";
   header.style.color = "darkblue";
   header.style.backgroundColor = "skyblue";
   header.style.display = "flex";
   header.style.alignItems = "center";
   header.style.justifyContent = "space-between";
   header.style.padding = "0 40px";

   //creating a span and appendChild to header

   let span = document.createElement("span");
   span.setAttribute("class","spanLogo");
   span.setAttribute("id","logo");
   span.innerHTML = "My Logo";
   span.style.width = "60px";
   span.style.height = "60px";
   span.style.borderRadius = "50%";
   span.style.backgroundColor = "gray";
   span.style.display = "flex";
   span.style.alignItems = "center";
   span.style.justifyContent = "center";
   span.style.fontSize = "12px";
   span.style.fontWeight = "bold";
   span.style.cursor = "pointer";

   document.getElementById("mainContainer").appendChild(span);

   //create nav and append to header
   let nav = document.createElement("ul");
     nav.style.listStyleType = "none";
     nav.style.display = "flex";
    

   document.getElementById("mainContainer").appendChild(nav);


   //create list items and append to nav
   let navItems = ["Home","About","Services","Contact"];
   let navLinks = ["index.html","about.html","service.html","contact.html"];

   navItems.forEach( (item, index) =>{
      let li = document.createElement("li");
      let a =  document.createElement("a");
      a.innerText = item;
      a.href = navLinks[index];
      
       a.style.color = "darkblue";
       a.style.textDecoration = "none";
       li.style.marginInline = "2em";
       li.style.cursor = "pointer";
       li.style.fontWeight = "bold";

      nav.appendChild(li);
      li.appendChild(a);
   });



   //example on paragraphs

   let para = document.getElementsByClassName("paragraph");
   para[0].innerHTML="content changed";


   //foods
   /* let food = document.getElementsByClassName("food");
   Array.from(food).forEach(f=>{
      f.style.backgroundColor = "green";
      f.style.color = "white";
   }); */

   /* let food = document.querySelectorAll(".food");
   food.forEach(f=>{
      f.style.backgroundColor = "green";
      f.style.color = "white";
   }); */

   let food = document.querySelectorAll("ul");
   food.forEach(f=>{
      f.style.backgroundColor = "green";
      f.style.color = "white";
   });

   /* let food = document.querySelectorAll("li");
   food.forEach(f=>{
      f.style.backgroundColor = "green";
      f.style.color = "white";
   }); */


   //append child:

   const newElement = document.createElement("p");
    newElement.textContent ="Hello,this is a new HTMelement";
    document.getElementById("container").appendChild(newElement);


    //using for loop to 
    let container = document.getElementsById("Container");
    for(let i = 1; i <= 5; i++){
      const p = document.createElement("p");
      p. textContent = "Hello, This is a new HTM...";
    }

    document.getElementById("container").appendChild(newElement);