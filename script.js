let cart = [];
let total = 0;

function addToCart(productName) {
    if (cart.length < 3) {
        cart.push(productName);
        updateCart();
    } else {
        alert("You can only add 3 products to the cart!");
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });
    calculateTotal();
}

function calculateTotal() {
    const totalElement = document.getElementById('total');
    if (cart.length === 3) {
        total = 999; // Fixed price for 3 items
    } else {
        total = cart.length * 333; // Assuming individual item price for simplicity
    }
    totalElement.textContent = total;
}

function checkout() {
    if (cart.length === 3) {
        alert("Your total is 999 INR. Proceeding to checkout...");
        // Add checkout functionality here
    } else {
        alert("Please add 3 products to your cart to proceed to checkout.");
    }
}
