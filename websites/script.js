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
     document.querySelectorAll(`.item-category[data-category="${category}"] img.selected`).forEach(img => img.classList.remove('selected'));
     
     // Select the clicked item
     item.classList.add('selected');
     selectedItems[category] = item.dataset.name;
   
     // Check if all categories have an item selected
     if (Object.values(selectedItems).every(item => item)) {
       addToCart();
     }
   }
   
   // Handle adding combo to cart
   let cart = [];
   function addToCart() {
     if (Object.values(selectedItems).every(item => item)) {
       // Add combo to cart
       cart.push({ 
         items: { ...selectedItems }, 
         price: 999 
       });
   
       // Clear selected items
       selectedItems = { 'Shirt': null, 'Pant': null, 'Lower': null, 'T-Shirt': null };
       document.querySelectorAll('.item-category img.selected').forEach(img => img.classList.remove('selected'));
   
       alert('Combo added to cart!');
       updateCart();
     } else {
       alert('Please select one item from each category.');
     }
   }
   
   function updateCart() {
     const cartItemsDiv = document.getElementById('cart-items');
     cartItemsDiv.innerHTML = '';
     let totalAmount = 0;
     
     cart.forEach((item, index) => {
       const { items } = item;
       cartItemsDiv.innerHTML += `
         <div class="cart-item">
           <p><strong>Combo ${index + 1}</strong></p>
           <p>Shirt: ${items['Shirt']}</p>
           <p>Pant: ${items['Pant']}</p>
           <p>Lower: ${items['Lower']}</p>
           <p>T-Shirt: ${items['T-Shirt']}</p>
           <p>Price: ₹999</p>
         </div>
       `;
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
   