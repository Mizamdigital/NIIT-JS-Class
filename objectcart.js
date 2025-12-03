let cart =[
    {name: "Laptop",
        price: 200000,
        quantity: 10
    },

    {name: "TV",
        price: 1000000,
        quantity: 30
    },

    {name: "Phone",
        price: 20000000,
        quantity: 20
    },

    {name: "accessories",
        price: 30000000,
        quantity: 50
    }
]


function displayCart(){
    let output = " ";
    let grandTotal = 0;

    for(let i = 0; i < cart.length; i++){
        let item = cart[i];

        let subTotal = item.price * item.quantity;
        grandTotal += subTotal;

        output += `
           <tr>
              <td>${item.name}</td>
              <td>${item.price}</td>
              <td>${item.quantity}</td>
              <td>${subTotal}</td>
            </tr>`;
    }
    document.getElementById("cartBody").innerHTML = output;
    document.getElementById("total").innerText =`Grand Total:$${grandTotal}`;
}

    

    displayCart();


//we use a function to wrapped everything because we may want to call it again later if there is any update to the cart. So we need a function to be able to call it again when needed.


/* When should YOU use a function?

Use a function when:

✔ you need to reuse the code
✔ you want your code organized
✔ you want to call it later (e.g., when something changes)
✔ you're building apps with interaction

Do NOT use a function when:

✔ the code will run only once
✔ you’re just practicing a simple loop
✔ you don’t plan to call it again */
    