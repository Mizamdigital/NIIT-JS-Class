let salesInfo = document.getElementById("itemOutput");
let showDetails = "";
let groundTotal = 0;

let cart = [
     {
        name: "Cooking Pot",
        price: 100000,
        quantity: 50
     },

     {
        name: "Gas Cooker",
        price: 2000000,
        quantity: 5
     },

     {
        name: "Dishes",
        price: 500000,
        quantity: 10
     },

     {
        name: "Refrigerator",
        price: 4000000,
        quantity: 2
     }
];


for(let k = 0; k < cart.length; k++){
    let goods = cart[k];

    let subTotal = goods.price * goods.quantity;
    groundTotal += subTotal;

    showDetails += `<div class ="items">
        <div class="item-goods"> ${goods.name} </div>
        <div class="item-goods"> ${goods.price} </div>
        <div class="item-goods"> ${goods.quantity} </div>
        <div class="item-goods"> ${subTotal} </div>
      
    </div>`;
}

salesInfo.innerHTML=showDetails;


//That code runs once, immediately, when the page loads.
//It does NOT need to be reused later. No need for a button.No need for reuse.No need to call it again. So a function is NOT required.



//solution to example 2

    let showCost = document.getElementById("showCase");
    let showOutput = "";
    let totalCost = 0;

    let list = [
        {
        name: "Cooking Pot",
        price: 100000,
        quantity: 50
     },

     {
        name: "Gas Cooker",
        price: 2000000,
        quantity: 5
     },

     {
        name: "Dishes",
        price: 500000,
        quantity: 10
     },

     {
        name: "Refrigerator",
        price: 4000000,
        quantity: 2
     }
    ];

    for(let v = 0; v < list.length; v++){
        let each = list[v];
        let sumTotal = each.price * each.quantity;
        totalCost +=sumTotal;

        showOutput += `<tr class="table">
            <td> ${each.name} </td>
            <td> ${each.price} </td>
            <td> ${each.quantity} </td>
            <td> ${sumTotal} </td>

        </tr>`;
    }

    showCost.innerHTML=showOutput;
    document.getElementById("totalPrice").innerText = `${totalCost}`;