// Function to show different sections (home, collections, cart)
function showSection(section) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

// Function to show the Men/Women collection when clicked
function showCollection(collection) {
  document.querySelectorAll('.collection-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(collection).style.display = 'block';
}

// Function to display the selected combo details page
function showComboDetails(combo) {
  document.querySelectorAll('.combo-details').forEach(sec => sec.style.display = 'none');
  document.getElementById(combo).style.display = 'block';
}

// Object to store the selected items for a combo
let selectedItems = {
  'Shirt': null,
  'Pant': null,
  'Lower': null,
  'T-Shirt': null
};

// Function to handle the selection of items from each category (e.g., Shirt, Pant, etc.)
function selectItem(item, category) {
  // Deselect any previously selected item in the same category
  const selectedImages = document.querySelectorAll(`.item-category[data-category="${category}"] img.selected`);
  selectedImages.forEach(img => img.classList.remove('selected'));

  // Select the clicked item
  item.classList.add('selected');
  selectedItems[category] = item.dataset.name;
}

// Array to store all the selected combos in the cart
let cart = [];

// Function to add the selected combo to the cart
function addToCart() {
  // Ensure one item is selected from each category (Shirt, Pant, Lower, T-Shirt)
  if (Object.values(selectedItems).every(item => item !== null)) {
      // Add the combo with the selected items to the cart
      cart.push({
          items: { ...selectedItems },
          price: 999
      });

      // Reset selectedItems for the next combo
      selectedItems = {
          'Shirt': null,
          'Pant': null,
          'Lower': null,
          'T-Shirt': null
      };

      // Refresh the cart display
      updateCartDisplay();
      
      // Navigate to cart page
      showSection('cart');
  } else {
      alert('Please select one item from each category.');
  }
}

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  let totalAmount = 0;
  cart.forEach((combo, index) => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      
      let comboItemsHTML = '';
      for (const category in combo.items) {
          comboItemsHTML += `<p>${category}: ${combo.items[category]}</p>`;
      }

      cartItem.innerHTML = `
          <h3>Combo ${index + 1} - ₹999</h3>
          ${comboItemsHTML}
      `;
      
      cartItemsContainer.appendChild(cartItem);

      totalAmount += combo.price;
  });

  // Add delivery fee of ₹50
  const deliveryFee = 50;
  totalAmount += deliveryFee;

  // Update total amount in the cart
  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.innerHTML = `Total: ₹${totalAmount} (includes ₹50 delivery fee)`;
}

// Function to initialize the app with Home section displayed first
function init() {
  showSection('home');
}

// Initialize the app on page load
window.onload = init;
