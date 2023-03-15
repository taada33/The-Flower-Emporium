const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const app = express();

// Set up session middleware
app.use(session({
  secret: 'mySecretKey',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

// Set up handlebars as the view engine
// app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

// app.get('/', (req, res) => {
//     res.render('main', {
//     });
// });
app.get('/login', (req, res, next) => {
  try {
    res.render('login', { title: 'Login' });
  } catch (error) {
    next(error);
  }
});

app.get('/shopping-cart', (req, res, next) => {
  try {
    const cart = req.session.cart || [];
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    res.render('shopping-cart', { title: 'Shopping Cart', cart: cart || [], totalPrice });
  } catch (error) {
    next(error);
  }
});

app.get('/products', (req, res, next) => {
  try {
    const products = [
      {
        name: 'Product 1',
        description: 'This is the first product',
        price: 9.99,
        image: 'https://example.com/product1.jpg'
      },
      {
        name: 'Product 2',
        description: 'This is the second product',
        price: 19.99,
        image: 'https://example.com/product2.jpg'
      },
      {
        name: 'Product 3',
        description: 'This is the third product',
        price: 29.99,
        image: 'https://example.com/product3.jpg'
      }
    ];

    res.render('products', { title: 'Products', products: products || [] });
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});


const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});