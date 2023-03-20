const formData = new URLSearchParams();


formData.append('productName', product.name);
formData.append('amount', product.price);

fetch('/create-session', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(data => {
  // Redirect to Stripe Checkout page
  window.location = data.url;
})
.catch(error => {
  console.error('Error creating Stripe Checkout session:', error);
});