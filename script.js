let cart = JSON.parse(localStorage.getItem("cart")) || [];



// product array
const products = [
    {id:1, item: "Book", price:200},
    {id:2, item: "Notebook", price:120},
    {id:3, item: "Pen", price:50},
    {id:4, item: "Textbook", price:600},
    {id:5, item: "Scale", price:100},
    {id:6, item: "Pencil", price:20},
    {id:7, item: "Bottle", price:500}
];

document.addEventListener("DOMContentLoaded", function(){
    updateCartUI();
});

//map display products
function showProducts(){
    const output = document.getElementById("output");
    let html = "<h4>All Products:</h4>";

    products.forEach(product => {
        html += `
            <div class="product-card">
            <span>${product.item}</span>
            <strong>Rs. ${product.price}</strong>
            <button onclick="addToCart(${product.id})">Add</button>
            </div>
        `;
    });
        output.innerHTML = html;
}

function addToCart(id){
    const product= products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI(){
     localStorage.setItem("cart", JSON.stringify(cart));
    const output = document.getElementById("output");

    let html = "<h4>Cart Items:</h4>";
    cart.forEach((item, index) => {
        html += `
            <div class="product-card">
            <span>${item.item}</span>
            <strong>Rs. ${item.price}</strong>
            <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    html += `<h4>Total: Rs. ${total}</h4>`;
    

    output.innerHTML = html;
}

function removeFromCart(index){
    cart.splice(index, 1);
    updateCartUI();
}

function clearCart(){
    cart = [];
    localStorage.removeItem("cart")
    updateCartUI();
}


