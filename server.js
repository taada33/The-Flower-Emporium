const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const cors =require('cors');
require('dotenv').config();
const stripe = require('stripe')(process.env.YOUR_STRIPE_PRIVATE_KEY);

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin:"*"
}));
// app.options('*', cors());
const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({ helpers});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);




// app.post('/api/checkout/create-session', async (req, res) => {
//   const { productName, amount } = req.body;

//   console.log(productName, amount)

//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: productName,
//           },
//           unit_amount: amount, // Amount in cents
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: 'http://localhost:3000/success', // Redirect to success page
//     cancel_url: 'http://localhost:3000/cancel', // Redirect to cancel page
//   });

//   res.json({ url: session.url });
// });

app.get('/product/:id', (req, res) => {
  // You can retrieve the product ID from req.params.id
  const productId = req.params.id;

  // console.log(productId)

  // Render the cehckout page with the specified product ID
  res.render('/checkout', { productId });
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
