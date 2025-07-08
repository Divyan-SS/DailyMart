const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const crypto = require('crypto');

app.use(express.static(path.join(__dirname, '..')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 🔒 In-memory order status store
const orders = {};

// ✅ Dummy SMS Route (simulated)
app.post('/send-sms', (req, res) => {
  const { phone, message } = req.body;
  console.log(`📲 [SIMULATED SMS] to ${phone}:\n${message}`);
  setTimeout(() => {
    res.json({ success: true, message: 'SMS sent (simulated)' });
  }, 1000);
});

// ✅ Nodemailer setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'divyan9629@gmail.com',        // ✅ Sender Gmail
    pass: 'ifhs acjv zwoz prlc'           // ✅ Gmail App Password
  }
});

// ✅ Start payment: send email with verify links
app.post('/start-payment', async (req, res) => {
  const { email } = req.body;
  const orderId = crypto.randomUUID();
  orders[orderId] = 'pending';

  const yesLink = `http://localhost:3000/verify?orderId=${orderId}&status=confirmed`;
  const noLink = `http://localhost:3000/verify?orderId=${orderId}&status=cancelled`;

  const html = `
    <h3>🛒 Confirm Your DailyMart Payment</h3>
    <p>Please verify your payment:</p>
    <a href="${yesLink}" style="padding: 10px 16px; background: #4CAF50; color: white; text-decoration: none; margin-right: 10px;">✅ YES</a>
    <a href="${noLink}" style="padding: 10px 16px; background: #d9534f; color: white; text-decoration: none;">❌ NO</a>
  `;

  try {
    await transporter.sendMail({
      from: 'divyan9629@gmail.com',     // ✅ MUST match transporter user
      to: email,
      subject: 'Verify Your DailyMart Payment',
      html
    });
    console.log(`📧 Email sent to ${email} for order ${orderId}`);
    res.json({ success: true, orderId });
  } catch (err) {
    console.error('❌ Email failed:', err.message);
    res.status(500).json({ success: false, error: err.message });
  }
});

// ✅ Verification Link Handler
app.get('/verify', (req, res) => {
  const { orderId, status } = req.query;
  if (!orders[orderId]) return res.send('❌ Invalid order ID.');

  orders[orderId] = status;
  res.send(`<h2>Payment ${status === 'confirmed' ? '✅ Confirmed' : '❌ Cancelled'}</h2><p>You may close this tab.</p>`);
});

// ✅ Polling endpoint: check verification status
app.get('/status', (req, res) => {
  const { orderId } = req.query;
  const status = orders[orderId];
  res.json({ status: status || 'not_found' });
});

// ✅ Optional: general email sender
app.post('/send-email', async (req, res) => {
  const { email, subject, message } = req.body;

  const mailOptions = {
    from: 'divyan9629@gmail.com',   // ✅ Fixed here too
    to: email,
    subject,
    text: message
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent to ${email}. Message ID: ${info.messageId}`);
    res.json({ success: true, info });
  } catch (error) {
    console.error('❌ Email Error:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
