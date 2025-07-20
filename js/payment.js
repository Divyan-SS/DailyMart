/* payment.js — final version */
document.addEventListener('DOMContentLoaded', () => {

  /* -------- helpers -------- */
  const getAdjustedPrice = (base, variant) =>
    variant && (variant.includes('1kg') || variant.includes('1L')) ? base * 2 : base;

  const getOfferPercent = (product, products) => {
    // pull fresh copy each time ‑ ensures window.categoryOffers is now available
    const offers =
      JSON.parse(localStorage.getItem('categoryOffers')) ||
      window.categoryOffers || {};

    const idx = products.indexOf(product) % 10;          // same rule as checkout.js
    return (offers[product.category] && offers[product.category][idx]) || 0;
  };

  /* -------- data -------- */
  const cart     = JSON.parse(localStorage.getItem('cart'))     || {};
  const routine  = JSON.parse(localStorage.getItem('routine'))  || {};
  const products = JSON.parse(localStorage.getItem('productList')) || [];
  const orderBox = document.getElementById('orderSummary');

  /* -------- pre‑fill address -------- */
  const profile = JSON.parse(localStorage.getItem('userProfile')) || {};
  ['fname','phone','pin','address'].forEach((k,i)=>
    document.querySelectorAll('#a_name,#a_phone,#a_pincode,#a_address')[i].value = profile[k] || ''
  );
  if (profile.email) {
    const w = document.querySelector('#walletForm  input'); if (w) w.value = profile.email;
    const u = document.querySelector('#upiForm     input'); if (u) u.value = profile.email;
  }

  /* -------- build order summary -------- */
  let total = 0;
  orderBox.innerHTML = '';

  Object.keys(cart).forEach(key => {
    const qty            = cart[key];
    const [name, variant] = key.split('|').map(v => v.trim());
    const product        = products.find(p => p.name.trim().toLowerCase() === name.toLowerCase());
    if (!product) return;

    const base     = product.price || 0;
    const price    = getAdjustedPrice(base, variant);
    const offer    = getOfferPercent(product, products);
    const finalOne = price * (1 - offer / 100);
    const lineTot  = finalOne * qty;
    total         += lineTot;

    const row = document.createElement('div');
    row.className = 'summary-row';
    row.innerHTML = `
      <span>${name}</span>
      <span>${variant || '-'}</span>
      <span>${offer}%</span>
      <span>${qty} x ₹${price.toFixed(2)}</span>
      <span>₹${lineTot.toFixed(2)}</span>
    `;
    orderBox.appendChild(row);
  });

  const tRow = document.createElement('div');
  tRow.className = 'summary-row total';
  tRow.innerHTML = `<span></span><span></span><span></span><span>Total:</span><span>₹${total.toFixed(2)}</span>`;
  orderBox.appendChild(tRow);

  /* -------- address submit -------- */
  function submitAddress() {
    const fname = document.getElementById('a_name').value,
          phone = document.getElementById('a_phone').value,
          pin   = document.getElementById('a_pincode').value,
          addr  = document.getElementById('a_address').value;
    if (!fname||!phone||!pin||!addr) return alert('Please fill in all address fields.');

    Object.assign(profile,{fname,phone,pin,address:addr});
    localStorage.setItem('userProfile',JSON.stringify(profile));

    document.getElementById('addressSection').style.display='none';
    document.getElementById('paymentSection').style.display='block';
    document.querySelector('.payment-main').classList.add('full');
  }

  /* -------- payment method switch -------- */
  function showPaymentForm(method){
    document.querySelectorAll('.payment-form').forEach(f=>f.style.display='none');
    document.querySelectorAll('.payment-tab').forEach(t=>t.classList.remove('active'));
    document.getElementById(method+'Form').style.display='block';
    document.querySelector(`[onclick="showPaymentForm('${method}')"]`).classList.add('active');
    document.getElementById('paymentMethod').value = method;
  }

  /* -------- confirm payment (unchanged except uses new total) -------- */
  function confirmPayment() {
    const paymentMethod = document.getElementById('paymentMethod').value;
    let email = profile.email || '';
    if (paymentMethod === 'wallet') {
      const w = document.querySelector('#walletForm input');
      if (w && w.value.includes('@')) email = w.value;
    } else if (paymentMethod === 'upi') {
      const u = document.querySelector('#upiForm input');
      if (u && u.value.includes('@')) email = u.value;
    }
    if (!profile.phone && !email) return alert('❗ No contact details found.');

    fetch('/start-payment',{
      method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({email})
    })
    .then(r=>r.json())
    .then(({orderId})=>{
      alert(`📩 Verification sent to ${email}. Click YES to confirm.`);
      const iv=setInterval(()=>{
        fetch(`/status?orderId=${orderId}`).then(r=>r.json()).then(({status})=>{
          if(status==='confirmed'){
            clearInterval(iv);
            alert('✅ Payment successful!');
            localStorage.removeItem('cart');

            // save order snapshot (simplified)
            const myOrders=JSON.parse(localStorage.getItem('myOrders'))||[];
            myOrders.push({date:new Date().toLocaleString(),items:Object.keys(cart),total});
            localStorage.setItem('myOrders',JSON.stringify(myOrders));

            // build offerMap: key = "name | variant", value = offer%
            const offerMap = {};
            Object.keys(cart).forEach(k => {
              const [name, variant] = k.split('|').map(v => v.trim());
              const product = products.find(p =>
                p.name.trim().toLowerCase() === name.toLowerCase()
              );
              if (product) {
                const offer = getOfferPercent(product, products);
                offerMap[k] = offer;
              }
            });

            const lastOrder={
              invoice:'INV-'+Math.floor(100000+Math.random()*900000),
              time:new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'}),
              date:new Date().toLocaleDateString('en-GB'),
              cashier:'RAMESH',
              phone:profile.phone,
              name:profile.fname||'',
              cart,total,
              offers: offerMap // ✅ includes item-level offers
            };
            localStorage.setItem('lastOrder',JSON.stringify(lastOrder));
            window.location.href='bill.html';
          }
          if(status==='cancelled'){clearInterval(iv);alert('❌ Payment Cancelled!');}
        });
      },3000);
    })
    .catch(()=>alert('❌ Could not send confirmation.'));
  }

  /* expose to HTML */
  window.submitAddress  = submitAddress;
  window.showPaymentForm= showPaymentForm;
  window.confirmPayment = confirmPayment;
});
