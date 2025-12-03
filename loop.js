//we have 3 types of loops. these are: for loops, while loop and do loop.

/* for(i=0,i<5;i++) */
// for loop: for (i=o) --> initializer
// i<5 --> is condition at which the loop runs
// i++ --> it a terminator or increment
//console.log....


/* let i = 0
while(i<5) {

console.log(i);
i++
} */

/* do  it run first execution once and after that it will check for condition if the condition is true it will run but if its false it will stop running.
i=0;
do{
console.log(i);
i++;
}
while(i < 5); */

//for loop:
     let q = 0;
     for (q = 0; q < 5; q++) {
     document.write("This is for loop" +" "+ q +" "+ "times<br>");  //note that when (i<=5) the code will be printed 10 times.
     }

     document.write("<br>")

     //while loop:
    let i = 1;
    while(i <= 10) {
        document.write("You printed while loop"+" " + i +" "+ "times"+ "<br>")
        i++;
    }

    document.write("<br>")

    //do loop:
    let x = 0;
    do{
        document.write("You printed do loop" + " " + x + " "+"times<br>");
        x++;
    } 
    while(x < 20);


    document.write("<br>")


    //print 1-50 using while loop
    let m = 1;
    while(m <= 50) {
        document.write("God did " + " " + m +"times" + "<br>");
        m++;
    }

   document.write("<br>")



    //array []
    let items = ["bags", "laptop", "shoes", "phone","foods","cloths"];
    //using for loops
    for(let i = 0; i < items.length; i++) {  //.length is use for checking the length of the item in an array
        document.write(items[i]+ "<br>");
    }

     document.write("<br>")


    //using while loop to print out the items in the array

    let goods = ["rice", "yam", "Pando", "Amala","shawama","bread"];
    let p = 0;
     while (p < goods.length) {
        document.write(goods[p]+ "<br>");
        p++;
     }


document.write("<br>")

     //calculating the price of the goods in an array using for loop
    let prices = [2000, 10000, 200, 3000, 50000];
    let total = 0;

    for (let f = 0; f < prices.length; f++) {
        total += prices[f];
        document.write(prices[f] + ",");
    }
     document.write("The total price is :" + " "+total);


//using while loop to calculate the price of food items in an array
document.write("<br>")

priceOfFoodItems = [1500, 2500, 3000,1000];

let totalPrice = 0;

let g = 0;
while(g < priceOfFoodItems.length){
totalPrice += priceOfFoodItems[g];
document.write(priceOfFoodItems[g] + ",")
g++;
}

document.write("the total prices is:" + " " + totalPrice);


//using do loop to calculate the price of food items in an array
document.write("<br>")

priceFoodItems = [2500, 4500, 3000, 1000];

let totalPrices = 0;
let h = 0;  
do{
    totalPrices += priceOfFoodItems[h];
    h++;
}
while(h < priceOfFoodItems.length);

document.write("the total price is:" + " " + totalPrices);


document.write("<br>")

     //multiplication table 6 using loop

     let number = 6;
     for(i = 0; i <= 50; i++){
        document.write("6 x" + i + "=" + " " + number * i + "<br>");
     }

     document.write("<br>")

     //using while loop

     let multi = 11;
     let r = 1;
     while (r <= 30) {
        /* document.write("4 x" + r + "=" + " " + multi* r + "<br>"); */
        document.write(multi +"x"+ r + "=" + " " + multi * r + "<br>");
        r++;
     }

     //using Do loop
     let multiple = 3;
     let d = 1;
     do{
        document.write(multiple + "x" + d + "=" + multiple * d + "<br>");
        d++;
     }
     while(d <= 12);
 
     document.write("<br>")

     

     //creating a multiplication table using nested loop
    for (let i = 1; i <= 12; i++) {
    document.write("multiplication Table" + " " + i + "<br>");
    for(let j = 1; j <= 12; j++){
        document.write(i + "x" + j + "=" + i * j + "<br>");
    }
    }

    //using while loop 

    /* let a = 0;
    while(a <= 12){
        document.write("multiplication table" + " " + a + "<br>");
        a++;

        let b = 1;
        while(b <= 12){
            document.write(a + "x" + b + "=" + " " + a * b + "<br>");
            b++;
        }
    } */


    document.write("<br>")
    
    //using for loop to print out patterns 
    
    for (let v = 1; v < 8; v++){
        let pattern = " ";
        for(let a = 1; a <= v; a++){
            pattern += "*"; //this will keep adding up i.e patch it 
        }
        document.write(pattern + "<br>");
       
    }

document.write("<br>")


    //javascript object notation:
   const itemsObj = [
    {product_name: "shirt",
        price: 2000
    },
    {productName: "shoe",
        price: 5000
    }
];

for (let i = 0; i < itemsObj.length; i++) {
    document.write("The product name is:" + itemsObj[i].product_name + "The price is:" + itemsObj[i].price + "<br>")
}

document.write("<br>")

const customer = [
    {
        name: "Seyi",
        product: "Chocolate",
        price: 100000
    },
    {
        name: "Tayo",
        product: "Yoghurt",
        price: 50000
    },
    {
        name: "Ayo",
        product: "A bag of Rice",
        price: 30000
    }

];

for (let l = 0; l < customer.length; l++) {
    document.write(customer[l].name + " " + "bought:" + " " + customer[l].product + " " + customer[l].price +"<br>");
}


