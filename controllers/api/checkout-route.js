// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe')('YOUR_STRIPE_SECRET_KEY');
// // const productdata = require('./product-routes')

// router.post('/', async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'T-shirt',
//               images: ['https://example.com/t-shirt.png'],
//             },
//             unit_amount: 1000,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: 'https://localhost:3001/success',
//       cancel_url: 'https:/localhost:3001/cancel',
//     });

//     res.json({ id: session.id });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Something went wrong' });
//   }
// });

// module.exports = router;