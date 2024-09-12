// Switch between sections
function showSection(section) {
     document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
     document.getElementById(section).style.display = 'block';
   }
   
   // Show collection combos
   function showCollection(collection) {
     document.querySelectorAll('.collection-section').forEach(sec => sec.style.display = 'none');
     document.getElementById(collection).style.display = 'block';
   }
   
   // Show combo details
   function showComboDetails(combo) {
     document.querySelectorAll('.combo-details').forEach(sec => sec.style.display = 'none');
     document.getElementById(combo).style.display = 'block';
   }
   
   // Handle item selection (one from each category)
   let selectedItems = { 'Shirt': null, 'Pant': null, 'Lower': null, 'T-Shirt': null };
   
   function selectItem(item, category) {
     // Deselect previous selection in the same category
     document.querySelectorAll(`.item-category img.selected`).forEach(img => img.classList.remove('selected'));
     
     // Select the clicked item
     item.classList.add('selected');
     selectedItems[category] = item;
   }
   
   // Handle adding combo to cart
   let cart = [];
   function addToCart(combo) {
     if (Object.values(selectedItems).every(item => item)) {
       // Add combo to cart
       cart.push({ combo: combo, price: 999 });
       
       // Clear selected items
       selectedItems = { 'Shirt': null, 'Pant': null, 'Lower': null, 'T-Shirt': null };
       document.querySelectorAll('.item-category img.selected').forEach(img => img.classList.remove('selected'));
   
       alert(`${combo} added to cart!`);
       updateCart();
     } else {
       alert('Please select one item from each category.');
     }
   }
   
   function updateCart() {
     const cartItemsDiv = document.getElementById('cart-items');
     cartItemsDiv.innerHTML = '';
     let totalAmount = 0;
     
     cart.forEach(item => {
       cartItemsDiv.innerHTML += `<p>${item.combo} - ₹999</p>`;
       totalAmount += item.price;
     });
     
     const deliveryFee = 50;
     totalAmount += deliveryFee;
     
     document.getElementById('total-amount').innerHTML = `Total: ₹${totalAmount}`;
   }
   
   // Example function calls for demo purposes
   document.addEventListener('DOMContentLoaded', () => {
     // Initialize event listeners or any setup code here if needed
   });
   