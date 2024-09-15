// Show and hide sections
function showSection(section) {
  document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
  document.getElementById(section).style.display = 'block';
}

// Show collection combos
function showCollection(collection) {
  document.querySelectorAll('.collection-section').forEach(sec => sec.style.display = 'none');
  document.getElementById(collection).style.display = 'block';
}

// Show combo details when clicked
function showComboDetails(comboId) {
  // Hide other combo details
  document.querySelectorAll('.combo-details').forEach(detail => detail.style.display = 'none');
  // Show selected combo details
  document.getElementById(comboId).style.display = 'block';
}

// Combo selection logic
let cart = [];
function selectItem(img, category) {
  // Deselect other items in the same category
  document.querySelectorAll(`.item-category[data-category="${category}"] img`).forEach(el => el.classList.remove('selected'));
  // Select the clicked item
  img.classList.add('selected');
}

function addToCart(comboName) {
  const selectedItems = Array.from(document.querySelectorAll('.item-category img.selected')).map(img => img.dataset.name);
  if (selectedItems.length === 4) {
    cart.push({ comboName, items: selectedItems });
    updateCart();
  } else {
    alert('Please select one item from each category.');
  }
}

// Update cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  cartItems.innerHTML = cart.map((combo, index) => `
    <div class="cart-item">
      <h3>${combo.comboName}</h3>
      <p>Items: ${combo.items.join(', ')}</p>
    </div>
  `).join('');
  const total = cart.length * 999 + (cart.length * 50); // 50 delivery fee for each combo
  document.getElementById('total-amount').innerText = `Total: ₹${total}`;
}
