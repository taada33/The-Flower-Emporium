// const express = require('express');
// const sequelize = require('../../config/connection')
// const router = express.Router();
// const { Products, Categories } = require('../../models');
// require('dotenv').config();
// const stripe = require('stripe')(process.env.YOUR_STRIPE_PRIVATE_KEY);


// // router.get('/', async (req, res) => {
// //     try {
// //       const productData = await Products.findAll({
// //         include: [{ model: Categories }],
// //       });
// //       res.status(200).json(productData);
// //     } catch (err) {
// //       res.status(500).json(err);
// //     }
// //   });
  

//   router.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
//   });
//   router.post('/create-checkout-session', async (req, res) => {
    
//     // return res.send('hello')

//     const productData = req.body.items 

//     console.log(productData)
    
//     try {
//      const session = await stripe.checkout.sessions.create({

//         payment_method_types: ['card'],

//         line_items: productData.map(item => {
//           return {
//             price_data: {
//               currency: 'cad',
//               product_data: {
//                 name: item.name
//               },
//               unit_amount: item.price * 100 // Convert to cents
//             },
//             quantity: item.quantity,
//           };
//         }),
//         mode: 'payment',

//         success_url: `http://localhost:3000/checkout/success`,
//         cancel_url: `http://localhost:3000/checkout/cancel`,
//     })
//     //     success_url: `${req.protocol}://${req.get('host')}/checkout/success`,
//     //     cancel_url: `${req.protocol}://${req.get('host')}/checkout/cancel`
//     //   });
  
//       // Redirect the user to the Stripe Checkout page
//       res.redirect(303, session.url);
//     } catch (error) {
//       console.log(error);
//       res.status(500).send('Server error');
//     }
// });


//     // return res.json('hello')
//     // const session = await stripe.checkout.sessions.create({
//     //     payment_method_types: ['card'],

//     //     line_items: cartItems.map(item => {
//     //       return {
  
//     // const lineItems = await Promise.all(
//     //   items.map(async (item) => {
//     //     const productData = await Products.findByPk(item.id, {
//     //       include: [{ model: Categories }],
//     //     });
//     //     return {
//     //       price_data: {
//     //         currency: 'usd',
//     //         product_data: {
//     //           name: productData.name,
//     //         },
//     //         unit_amount: productData.price * 100, // convert dollars to cents
//     //       },
//     //       quantity: item.quantity,
//     //     };
//     //   })
//     // );
  
//     // const session = await stripe.checkout.sessions.create({
//     //   payment_method_types: ['card'],
//     //   line_items: lineItems,
//     //   mode: 'payment',
//     //   success_url: 'http://localhost:3001/success',
//     //   cancel_url: 'http://localhost:3001/cancel',
//     // });
  
// //     res.redirect(303, session.url);
// //   });
  
//   router.get('/success', (req, res) => {
//     res.render('success');
    
//   });

//   router.get('/cancel', (req, res) => {
//     res.render('cancel');
//   });
  
//   module.exports = router;