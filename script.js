// Store the selected combo items
let selectedItems = {
  shirt: null,
  pant: null,
  lower: null,
  tshirt: null
};

// Handle radio button selection
document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', (event) => {
      let category = event.target.name;
      selectedItems[category] = event.target.value;
  });
});

// Handle "Add to Cart" button
document.getElementById('add-to-cart-btn').addEventListener('click', () => {
  if (Object.values(selectedItems).includes(null)) {
      alert('Please select one item from each category.');
  } else {
      addToCart(selectedItems);
  }
});

// Function to add selected items to the cart
function addToCart(items) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push({
      ...items,
      price: 999
  });
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'cart.html';
}

let cart = [];

document.getElementById("combo1Form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let shirt = event.target.shirt.value;
    let pant = event.target.pant.value;
    // Get other values similarly
    
    let combo = {
        shirt: shirt,
        pant: pant,
        // Add other items (lower, t-shirt)
        price: 999
    };
    
    cart.push(combo);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.href = "cart.html";
});

document.addEventListener("DOMContentLoaded", function() {
    let storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsDiv = document.getElementById("cartItems");
    let totalAmount = 0;

    storedCart.forEach(item => {
        let cartItem = `<p>Combo: ${item.shirt}, ${item.pant}</p>`;
        cartItemsDiv.innerHTML += cartItem;
        totalAmount += item.price;
    });
    
    document.getElementById("totalAmount").textContent = totalAmount + 50; // Adding delivery fee
});
