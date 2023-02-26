// Select the "Add to Cart" button
const addToCartBtn = document.querySelector('.add-to-cart');

// Add a click event listener to the button
addToCartBtn.addEventListener('click', function() {
  // Get the product ID from the data attribute
  const productId = this.dataset.productId;

  // Check if the product is already in the cart
  if (localStorage.getItem('cart') !== null) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
      // If the product is already in the cart, increase the quantity
      cart[itemIndex].quantity++;
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Product added to cart!');
      return;
    }
  }

  // If the product is not already in the cart, add it with a quantity of 1
  const item = {
    id: productId,
    quantity: 1
  };
  const cart = localStorage.getItem('cart') !== null ? JSON.parse(localStorage.getItem('cart')) : [];
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Product added to cart!');
});