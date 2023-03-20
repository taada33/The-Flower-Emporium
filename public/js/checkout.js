// const checkoutForm = document.querySelector('#checkout');


// checkoutForm.addEventListener('submit', async (event) => {
//   event.preventDefault();

//   const response = await fetch('/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       line_items: [
//         {
//           price_data: {
//             currency: 'usd',
//             product_data: {
//               name: 'T-shirt',
//               images: ['https://example.com/t-shirt.png'],
//             },
//             unit_amount: 2000,
//           },
//           quantity: 1,
//         },
//       ],
//     }),
//   });

//   const session = await response.json();

//   const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');
//   stripe.redirectToCheckout({
//     sessionId: session.id,
//   });
// });

