/* this are the list of product catalog, each of them are object,and the array is displaying data */

const products = [
    { id: 1, name: "Short wave", price: 250, img: "images/hair1.jfif", qty: 0},
    { id: 2, name: "Short bob", price: 300, img: "images/hair2.jfif", qty: 0},
    { id: 3, name: "Straight fringe", price: 400, img: "images/straight-fringe.jfif", qty:0},
    { id: 4, name: "Long straight", price: 550, img: "images/straight-long.jfif", qty: 0},
    { id: 5, name: "Mid-length curl", price: 600, img: "images/mid-length.jfif", qty:0},
    { id: 6, name: "Black curls", price: 700, img: "images/black-curls.png", qty:0},
    { id: 7, name: "Short bob", price: 300, img: "images/hair2.jfif", qty: 0},
    { id: 8, name: "Long brown wave", price: 450, img: "images/long-brown.jfif", qty:0}
];

/* What happens here

JS checks browser storage for "cart"

If it exists → convert JSON back to an array

If not → use an empty array []

Key point

📌 The cart is NOT in HTML
📌 It lives in JavaScript memory + browser storage */

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* These connect JS to:

<section id="product-list">

<span id="cart-count">

Without these IDs, nothing would display. */

const productList = document.getElementById("product-list");

const cartCount = document.getElementById("cart-count"); 

/* display products inside productList
   loop through each item in products array 
   Creates product cards
   Button passes product id, not the product itself
*/

function displayProducts(data){
    productList.innerHTML = "";
    
    data.forEach(item=>{
        productList.innerHTML += `
      <div class = "card">
        <img src= "${item.img}">
        <h2>${item.name}</h2>
        <p>$${item.price}</p>
        <button onclick= "addToCart(${item.id})"> Add To Cart <button>
      </div>  
        `;
    });
}

    displayProducts(products);
    updateCartCount();


    /* Receives product ID when button is clicked
       Looks inside the cart to see if product already exists
       just increase the quantity 
    */
function addToCart(id){
    let item = cart.find(item=>item.id === id);

    if(item){
        item.qty++;
    }
    else{
        let product = products.find(p => p.id === id);
        cart.push({...product, qty: 1});
    }

    saveCart();
    updateCartCount();
}

/* 
reduce() loops through cart

Adds all quantities together

Displays total number
*/
function updateCartCount(){
    cartCount.innerText = cart.reduce((sum,item)=> sum + item.qty, 0);
}


/* 
  Turns cart array into text and saves it in browser.

📌 This is persistence — page refresh won’t clear cart.  
*/
function saveCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
}

/* to open cart-modal..Shows cart popup.*/
function openCart(){
    let cart_modal = document.getElementById("cart-modal");

    cart_modal.style.display = "block";

    showCart();
}

/* to close cart-modal...Hides it. */
function closeCart(){
    let cart_modal = document.getElementById("cart-modal");

    cart_modal.style.display = "none";
}

/* to revile the items added inside the cart and also total price, (+= means accumulate) */

function showCart(){
    let cartItems = document.getElementById("cart-items");

    let total = 0;

    cartItems.innerHTML = "";
    cart.forEach(item=>{
        total += item.price * item.qty;

        cartItems.innerHTML +=`
        <p>${item.name}</p>
        <p>$${item.price}</p>
        <p><button onclick="changeQty(${item.id}, -1)"> - </button>${item.qty}
        <button onclick="changeQty(${item.id}, 1)"> + </button>${item.qty}</p>

        `
    });
    document.getElementById("total-price").innerText = total;
}

//cart is a local storage

function changeQty(id, value){
    let item = cart.find(item=> item.id ===id)

    if(!item) return;

    item.qty += value;

    if(item.qty <= 0){
        cart = cart.filter(item=> item.id !== id);
    }
    saveCart();
    showCart();
    updateCartCount();
}

function checkout(){
    alert("payment successful");

    cart = [];
    saveCart();
    closeCart();
    updateCartCount();
}

document.getElementById("search").addEventListener("input",e => {
    let value = e.target.value.toLowerCase();

    let filtered = products.filter(item => item.name.toLowerCase().includes(value));

    displayProducts(filtered);
})










