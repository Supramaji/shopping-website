// Get the add to cart buttons
var addToCartButtons = document.getElementsByClassName('add-to-cart');

// Add click event listener to each add to cart button
for (var i = 0; i < addToCartButtons.length; i++) {
  addToCartButtons[i].addEventListener('click', addToCartClicked);
}

// Function to handle the add to cart button click event
function addToCartClicked(event) {
  var button = event.target;
  var name = button.getAttribute('data-name');
  var price = button.getAttribute('data-price');
  addToCart(name, price);
}

// Function to add the product to the cart
function addToCart(name, price) {
  // Create a new cart item element
  var cartItem = document.createElement('div');
  cartItem.classList.add('cart-item');
  cartItem.innerText = name + ' - ' + '&#8377;' + price;

  // Add the cart item to the cart
  var cart = document.getElementsByClassName('cart')[0];
  cart.appendChild(cartItem);
}

// Add click event listener to the view cart button
var viewCartButton = document.getElementsByClassName('view-cart')[0];
viewCartButton.addEventListener('click', viewCartClicked);

// Function to handle the view cart button click event
function viewCartClicked(event) {
  var cart = document.getElementsByClassName('cart')[0];
  cart.style.display = 'block';
}