//using array literal
 
let arrName = [];
arrName [0] = "1";
arrName [1] = "John";
arrName [2] = "Ayo";
arrName [3] = "*";
arrName [4] = "0.0001";

document.write(arrName);
arrName [2] = "Dele";

//it can also be done this way using an array

/* let arrNameTwo = ["1", "John", "mary","*","0.0001"];

document.write(arrNameTwo); */

//using new keywords

let anotherArray = ["Shirt", "Trousers", "Jeans", "Shoe", "Caps"];
  

for(let i = 0; i < anotherArray.length; i++){
    document.write(anotherArray + "<br>");
}

/* arrName.forEach((e)=>{
    document.write(e + "<br>");
}); */

arrName.forEach(function(item){
    document.write(item + "<br>");
});

/* document.write(anotherArray[4]); */


//array of cars

let vdmCar = ["Toyota", "Benz", "Volk", "Honda", "Ford"];

vdmCar.forEach((car) => {
  document.write(car + "<br>");
});

document.write(vdmCar.at(3));
document.write("<br>");
document.write(vdmCar.length);

vdmCar.push("Lexus");
document.write(vdmCar + "<br>");

let theLast = vdmCar.pop();
document.write(theLast + "<br>");
document.write(vdmCar + "<br>");

document.write("<br>");
document.write("<br>");

let myName = vdmCar.shift();
document.write(myName + "<br>");
document.write(vdmCar + "<br>");

vdmCar.unshift("cyber Truck");

document.write(vdmCar + "<br>");
document.write(vdmCar.sort());

document.write(vdmCar.includes("Benz") + "<br>");

//how to check if there is an item in am array

if(vdmCar.includes("Toyota")){
    document.write("yes car arrays has Toyota" + "<br>");
}

else{
    document.write("i don't think so" + "<br>");
}

document.write(vdmCar.indexOf("Honda"));

document.write("<br>")

let bus = ["Honda", "Bez", "martins"];

let vdmCarBus = document.write(vdmCar.concat(bus) + "<br>");

document.write(bus.slice(1,4) + "<br>");
document.write(vdmCarBus.splice(1,4) + "<br>");