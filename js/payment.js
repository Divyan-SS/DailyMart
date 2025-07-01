const cart = JSON.parse(localStorage.getItem('cart')) || {};
const routine = localStorage.getItem('routine') || 'none';
const orderSummary = document.getElementById('orderSummary');

let total = 0;
Object.keys(cart).forEach(name => {
  const qty = cart[name];
  const price = 50; // placeholder price per item
  total += price * qty;
  const div = document.createElement('div');
  div.textContent = `${name} x ${qty} — ₹${price * qty}`;
  orderSummary.appendChild(div);
});

const routineDiv = document.createElement('div');
routineDiv.textContent = `Routine: ${routine}`;
orderSummary.appendChild(routineDiv);

const totalDiv = document.createElement('div');
totalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
orderSummary.appendChild(totalDiv);

function confirmPayment() {
  alert('Payment Successful! Thank you for shopping at DailyMart.');

  // ✅ Only clear cart-related data, preserve login
  localStorage.removeItem('cart');
  localStorage.removeItem('routine');
  localStorage.removeItem('selectedVariants');

  // Optionally: Add order to myOrders (preserved across session)
  const myOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
  const items = Object.keys(cart);
  myOrders.push({
    date: new Date().toLocaleString(),
    items,
    total
  });
  localStorage.setItem('myOrders', JSON.stringify(myOrders));

  window.location.href = 'index.html';
}
