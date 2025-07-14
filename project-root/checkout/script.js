document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.checkout-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Comanda ta a fost trimisă cu succes!');
    localStorage.removeItem('cart');
    window.location.href = "../home/index.html";
  });
});
