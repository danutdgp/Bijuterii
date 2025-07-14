document.addEventListener('DOMContentLoaded', () => {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalContainer = document.getElementById('cartTotal');
  const checkoutBtn = document.getElementById('checkoutBtn');

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Coșul este gol.</p>';
      cartTotalContainer.textContent = '';
      return;
    }

    cart.forEach((item, index) => {
      const itemTotal = parseInt(item.price) * item.qty;
      total += itemTotal;

      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="item-details">
          <h3>${item.name}</h3>
          <p>Preț: ${item.price}</p>
          <label for="qty-${index}">Cantitate:</label>
          <input type="number" id="qty-${index}" value="${item.qty}" min="1">
          <p>Total produs: ${itemTotal} lei</p>
          <button class="remove-btn" data-index="${index}">Șterge</button>
        </div>
      `;
      cartItemsContainer.appendChild(itemDiv);
    });

    cartTotalContainer.textContent = `Total coș: ${total} lei`;
  }

  cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const index = e.target.getAttribute('data-index');
      cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
  });

  cartItemsContainer.addEventListener('change', (e) => {
    if (e.target.type === 'number') {
      const index = e.target.id.split('-')[1];
      const newQty = parseInt(e.target.value);
      if (newQty >= 1) {
        cart[index].qty = newQty;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart();
      }
    }
  });

  checkoutBtn.addEventListener('click', () => {
    // Redirect către pagina de checkout
    window.location.href = "../checkout/checkout.html";
  });

  renderCart();
});
