const Handlebars = require('handlebars');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const productRoutes = require('./controllers/api/product-route');
const categoryRoutes = require('./controllers/category-route');
// const stripe = require('stripe')('process.env.YOUR_KEY');
// const YOUR_DOMAIN = process.env.YOUR_HOST

const { Products, Categories } = require('./models');


// const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
const hbs = exphbs.create({})

const app = express();

// exphbs.create({}).handlebars.registerPartial('products', '{{> products}}');
// exphbs.create({}).handlebars.registerPartial('categories', '{{> categories}}');

// Set up session middleware
// app.use(session({
//   secret: 'mySecretKey',
//   resave: false,
//   saveUninitialized: true
// }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

//Set up handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use('/api', productRoutes);
app.use('/api', categoryRoutes)



// app.get('/api/products', function (req, res) {
//   res.render('home', { products: products, gridContainer: true });
// });
// app.get('/api/products', async function (req, res) {
//   try {
//     const products = await Products.findAll({
//       include: Category // Include the associated category with each product
//     });
//     const categories = await Categories.findAll();
//     res.render('home', { 
//       products: products, 
//       categories: categories,
//       gridContainer: true 
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Internal server error');
//   }
// });
// Get a reference to the products.handlebars partial
// const productsPartial = Handlebars.compile('{{> products}}');

// app.get('/api/products', (req, res) => {
//   Products.findAll().then((products) => {
//     // Render the products partial with the product data
//     const renderedProducts = productsPartial({ products });
//        // Render the categories partial
//     const renderedCategories = categoriesPartial();

//     const renderedHTML = `
//     <div class="grid-container">
//       <h2>Products</h2>
//       ${renderedProducts}
//       ${renderedCategories}
//     </div>
//   `;
//     // Send the rendered partial as the response
//     res.send(renderedHTML);
//   }).catch((err) => {
//     console.error(err);
//     res.status(500).send('An error occurred while fetching the products.');
//   });
// });

// app.get('/api/categories', function (req, res) {
//   res.render('main', {categories: categories });
// });


app.get('/', async(req, res) => {
  try {
    const products = await Products.findAll({
      include: Categories // Include the associated category with each product
    });
      
    const Product = products.map((product) => product.get({ plain: true }));
    const remainingProducts = products.slice(1).map((product) => product.get({ plain: true })); // Get the remaining products

    console.log(Product)
    res.render('home', { 
      products: Product, 
      gridContainer: true 
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});


app.get('/login', (req, res, next) => {
  try {
    res.render('login');
  } catch (error) {
    next(error);
  }
});

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     payment_method_types: ['card'],
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: 'T-shirt',
//           },
//           unit_amount: 2000,
//         },
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/success.html`,
//     cancel_url: `${YOUR_DOMAIN}/cancel.html`,
//   });

//   res.json({ id: session.id });
// });


app.listen(3000, () => {
  console.log('Server listening on port 3000!');
}); 