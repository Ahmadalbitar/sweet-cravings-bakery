let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

window.onload = function () {
  if (document.getElementById('cart-items')) {
    const cartList = document.getElementById('cart-items');
    const total = document.getElementById('total');
    let sum = 0;
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - $${item.price}`;
      cartList.appendChild(li);
      sum += item.price;
    });
    total.textContent = sum.toFixed(2);
  }
};
