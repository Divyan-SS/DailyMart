document.addEventListener('DOMContentLoaded', () => {

// ✅ Get data
const cart = JSON.parse(localStorage.getItem('cart')) || {};
const routine = JSON.parse(localStorage.getItem('routine')) || {};
const orderSummary = document.getElementById('orderSummary');
const products = JSON.parse(localStorage.getItem('productList')) || [];

let total = 0;
orderSummary.innerHTML = '';

Object.keys(cart).forEach(fullKey => {
  const qty = cart[fullKey];
  const [name, variantText] = fullKey.split('|').map(v => v.trim());
  let price = 0;

  const product = products.find(p => p.name.trim().toLowerCase() === name.toLowerCase());
  if (product) {
    if (product.variants && product.variants.length > 0 && variantText) {
      const matchedVariant = product.variants.find(v => v.name.trim().toLowerCase() === variantText.toLowerCase());
      if (matchedVariant) price = matchedVariant.price || 0;
    }
    if (!price && product.price) {
      price = product.price;
    }
  }

  const itemTotal = price * qty;
  total += itemTotal;
  const row = document.createElement('div');
  row.className = 'summary-row';
  row.innerHTML = `
    <span>${name}</span>
    <span>${variantText || '-'}</span>
    <span>${qty} x ₹${price.toFixed(2)}</span>
    <span>₹${itemTotal.toFixed(2)}</span>
  `;
  orderSummary.appendChild(row);
});

const totalRow = document.createElement('div');
totalRow.className = 'summary-row total';
totalRow.innerHTML = `
  <span></span>
  <span></span>
  <span>Total:</span>
  <span>₹${total.toFixed(2)}</span>
`;
orderSummary.appendChild(totalRow);

function confirmPayment() {
  const paymentMethod = document.getElementById('paymentMethod').value;
  const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
  const phone = profile.phone || '';
  const email = profile.email || '';
  const userName = profile.fname || 'Customer';

  let targetEmail = email;
  if (paymentMethod === 'wallet') {
    const walletInput = document.querySelector('#walletForm input');
    if (walletInput && walletInput.value.includes('@')) targetEmail = walletInput.value;
  } else if (paymentMethod === 'upi') {
    const upiInput = document.querySelector('#upiForm input');
    if (upiInput && upiInput.value.includes('@')) targetEmail = upiInput.value;
  }

  if (!phone && !targetEmail) {
    alert("❗ No contact details found to send confirmation.");
    return;
  }

  const message = `Hi ${userName},\nPlease confirm your ${paymentMethod.toUpperCase()} payment of ₹${total} at DailyMart.`;
  const emailSubject = "🧾 DailyMart Payment Confirmation";

  fetch('/start-payment', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: targetEmail })
  })
    .then(res => res.json())
    .then(({ orderId }) => {
      console.log("✅ Verification sent, Order ID:", orderId);
      alert(`📩 A verification email has been sent to: ${targetEmail}\nPlease click YES in your phone/mail.`);

      const interval = setInterval(() => {
        fetch(`/status?orderId=${orderId}`)
          .then(res => res.json())
          .then(({ status }) => {
            if (status === 'confirmed') {
              clearInterval(interval);
              alert('✅ Payment Successful! Thank you for shopping at DailyMart.');

              localStorage.removeItem('cart');
              const myOrders = JSON.parse(localStorage.getItem('myOrders')) || [];
              const items = Object.keys(cart);
              myOrders.push({ date: new Date().toLocaleString(), items, total });
              localStorage.setItem('myOrders', JSON.stringify(myOrders));

              const user = localStorage.getItem('user');
              if (user) {
                const allOrders = JSON.parse(localStorage.getItem('orders')) || {};
                const userOrders = allOrders[user] || [];
                const orderObj = {
                  date: new Date().toLocaleString(),
                  items: cart,
                  routine,
                  total
                };
                userOrders.push(orderObj);
                allOrders[user] = userOrders;
                localStorage.setItem('orders', JSON.stringify(allOrders));

                const routineMap = JSON.parse(localStorage.getItem('routineMap')) || {};
                routineMap[user] = routine;
                localStorage.setItem('routineMap', JSON.stringify(routineMap));

                const myOrdersMap = JSON.parse(localStorage.getItem('myOrdersMap')) || {};
                const thisUserOrders = myOrdersMap[user] || [];
                thisUserOrders.push({ date: new Date().toLocaleString(), items, total });
                myOrdersMap[user] = thisUserOrders;
                localStorage.setItem('myOrdersMap', JSON.stringify(myOrdersMap));

                const lastOrder = {
                  invoice: 'INV-' + Math.floor(100000 + Math.random() * 900000),
                  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                  date: new Date().toLocaleDateString('en-GB'),
                  cashier: 'RAMESH',
                  phone: profile.phone,
                  name: profile.fname || '',
                  cart: cart,
                  total: total
                };
                localStorage.setItem('lastOrder', JSON.stringify(lastOrder));
              }

              window.location.href = 'bill.html';
            } else if (status === 'cancelled') {
              clearInterval(interval);
              alert("❌ Payment Cancelled!");
            }
          });
      }, 3000);
    })
    .catch(err => {
      console.error('❌ Verification failed:', err);
      alert("❌ Could not send confirmation.");
    });
}
function submitAddress() {
  const fname = document.getElementById('a_name').value;
  const phone = document.getElementById('a_phone').value;
  const pin = document.getElementById('a_pincode').value;
  const address = document.getElementById('a_address').value;

  if (!fname || !phone || !pin || !address) {
    alert('Please fill in all address fields.');
    return;
  }

  const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
  profile.fname = fname;
  profile.phone = phone;
  profile.pin = pin;
  profile.address = address;
  localStorage.setItem('userProfile', JSON.stringify(profile));

  document.getElementById('addressSection').style.display = 'none';
  document.getElementById('paymentSection').style.display = 'block';
  document.querySelector('.payment-main').classList.add('full');
}

function showPaymentForm(method) {
  document.querySelectorAll('.payment-form').forEach(f => f.style.display = 'none');
  document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(method + 'Form').style.display = 'block';
  document.querySelector(`[onclick="showPaymentForm('${method}')"]`).classList.add('active');
  document.getElementById('paymentMethod').value = method;
}

window.submitAddress = submitAddress;
window.confirmPayment = confirmPayment;
window.showPaymentForm = showPaymentForm;
});