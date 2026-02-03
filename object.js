//using object literal

const Person = {
    name:"john",
    age:40
 };

document.write("Name:"+ Person.name+ "<br>"+"Age:"+Person.age);

//create am object using new keywords

const car = new Object({     name:"benz",
color:"blue", 
engineType:"v8", 
transmission:"auto"});

document.write("car name:" + " " + car["name"] + "<br>" + "color:" + car["color"] + "<br>" + "EngineType:" + " " + car["engineType"] + "Transmission:" + " " + car["transmission"] + "<br>");


//method

const People = {
    name:"john",
    age:40, 

    //methods
    printDetails: function(){
    return "User Name is:" + " " + People.name + " " + "," + "Age" + " " + People.age + "<br>"
}
};

document.write(People.printDetails());

//construction:

function nitStudent(name,age,weight,school){
    this.name = name,
    this.age = age,
    this.weight = weight,
    this.school = "NIIT";
}
const nyStudent = new nitStudent("Ayodele",23);
const nyStudent1 = new nitStudent("lyon",20);
const nyStudent2 = new nitStudent("Tayo",25);
const nyStudent3 = new nitStudent("Mayo",29);

document.write(nyStudent2.name + " " + nyStudent2.age + "<br>");



//class exercise 

function carPack(name,color,transmission){
    this.name = name,
    this.color = color,
    this.transmission = transmission
}

const carS = new carPack("Benz","black","auto");
const myCar = new carPack("Lexus","gray","manual");
const myCars = new carPack("Venza","white","auto");
const myCa = new carPack("Honda","sliver","auto");
document.write(carS.name + " " + carS.color + " " + carS.transmission + "<br>");
document.write(myCar.name + " " + myCar.color + " " + myCar.transmission + "<br>");
document.write(myCars.name + " " + myCars.color + " " + myCars.transmission + "<br>");
document.write(myCa.name + " " + myCa.color + " " + myCa.transmission + "<br>");


//nested object inside an object

const studentWeb = {
    name: "Ay",
    score: {
        html: 60,
        css: 70,
        js: 80,
        php: 90
    }
}
document.write(studentWeb.name + " " + "score" + " " + studentWeb.score.js + " " + "in javascript" + "<br>");

//declaring object inside array

const Car1 = [
    { name: "benz",
      color: "red",
      price: "500000"
    },
    { name: "lexus",
      color: "black",
      price: "700000"
    },
    { name: "ford",
      color: "blue",
      price: "1500000"
    },
    { name: "toyota",
      color: "green",
      price: "5000000"
    },
];

document.write(Car1[0].name + " " + Car1[0].price + "<br>");
document.write(Car1[1].name + " " + Car1[2].color + "<br>");



//looping through an object

let individual = {
    complexion: "chocolate",
    age: 33,
    weight: "70kg",
    height: "1.5m"
}

for (let item in individual){
    document.write(item + ":" + individual[item] + "<br>")
}
