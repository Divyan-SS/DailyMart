//payment.js
// ✅ Get data
const cart = JSON.parse(localStorage.getItem('cart')) || {};
const routine = JSON.parse(localStorage.getItem('routine')) || {};
const orderSummary = document.getElementById('orderSummary');

// ✅ Total calculation (replace 50 with actual dynamic price logic if needed)
let total = 0;
Object.keys(cart).forEach(name => {
  const qty = cart[name];
  const price = 50; // ❗ Placeholder: use actual variant price if needed
  total += price * qty;

  const div = document.createElement('div');
  div.textContent = `${name} x ${qty} — ₹${price * qty}`;
  orderSummary.appendChild(div);
});

// ✅ Display routine per item
const routineDiv = document.createElement('div');
let routineText = 'Routine:';
const routineKeys = Object.keys(routine);
if (routineKeys.length === 0) {
  routineText += ' None';
} else {
  routineKeys.forEach(key => {
    routineText += `\n${key} → ${routine[key]}`;
  });
}
routineDiv.textContent = routineText.trim();
orderSummary.appendChild(routineDiv);

// ✅ Show total
const totalDiv = document.createElement('div');
totalDiv.innerHTML = `<strong>Total: ₹${total}</strong>`;
orderSummary.appendChild(totalDiv);

// ✅ Confirm Payment Function
function confirmPayment() {
  alert('Payment Successful! Thank you for shopping at DailyMart.');

  // ✅ Clear cart (not routine or user info)
  localStorage.removeItem('cart');

  // ✅ Save globally (if needed for admin/global view)
  const myOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
  const items = Object.keys(cart);
  myOrders.push({
    date: new Date().toLocaleString(),
    items,
    total
  });
  localStorage.setItem('myOrders', JSON.stringify(myOrders));

  // ✅ Per-user orders
  const user = localStorage.getItem('user');
  if (user) {
    const allOrders = JSON.parse(localStorage.getItem('orders')) || {};
    const userOrders = allOrders[user] || [];

    userOrders.push({
      date: new Date().toLocaleString(),
      items: cart,
      routine: routine,
      total
    });

    allOrders[user] = userOrders;
    localStorage.setItem('orders', JSON.stringify(allOrders));

    // ✅ Save routine per user
    const routineMap = JSON.parse(localStorage.getItem('routineMap')) || {};
    routineMap[user] = routine;
    localStorage.setItem('routineMap', JSON.stringify(routineMap));

    // ✅ NEW: Save user's orders separately
    const myOrdersMap = JSON.parse(localStorage.getItem('myOrdersMap')) || {};
    const thisUserOrders = myOrdersMap[user] || [];
    thisUserOrders.push({
      date: new Date().toLocaleString(),
      items,
      total
    });
    myOrdersMap[user] = thisUserOrders;
    localStorage.setItem('myOrdersMap', JSON.stringify(myOrdersMap));
  }

  window.location.href = 'index.html';
}
