// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe')('process.env.YOUR_STRIPE_PUBLIC_KEY');

// router.post('/create-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'Product Name',
//           },
//           unit_amount: 1000, // Amount in cents
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:3001/success', // Redirect to success page
//     cancel_url: 'http://localhost:3001/cancel', // Redirect to cancel page
//   });

//   res.redirect(303, session.url);
// });

// router.get('/product', (req, res) => {
//   res.send('/checkout');
// });

// module.exports = router;