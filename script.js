let cart = [];

function addToCart(product) {
    if (cart.length < 3) {
        cart.push(product);
        updateCart();
    } else {
        alert("You can only add 3 items to your cart.");
    }
}

function updateCart() {
    let cartContent = document.getElementById("cartContent");
    cartContent.innerHTML = "Cart (" + cart.length + " items)";
}

function checkout() {
    if (cart.length === 3) {
        alert("Checkout complete. Thank you for shopping! Total: 999 + 50 (delivery fee) = 1049");
        cart = [];
        updateCart();
    } else {
        alert("Please add 3 items to your cart to proceed with checkout.");
    }
}
