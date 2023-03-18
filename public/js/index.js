// const contactForm = document.getElementById(".contact-form");

// // Hide the form initially
// contactForm.style.display = "none";

// // Get the navbar link for the contact page
// const contactLink = document.getElementById("contact-link");

// // Add a click event listener to the link
// contactLink.addEventListener("click", () => {
//   // Toggle the visibility of the contact form
//   if (contactForm.style.display === "none") {
//     contactForm.style.display = "block";
//   } else {
//     contactForm.style.display = "none";
//   }
// });


var stripe = Stripe('process.env.YOUR_KEY');
const button = document.getElementById('checkout-button');


Button.addEventListener("click", function () {
  fetch("/payment", {
    headers: {'Content-Type': 'application/json'},
    method: "POST",
    body: JSON.stringify({
        "product": {
            "name": "flower", 
            "amount": 100,
            "quantity": 1
        }})
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (session) {
      return stripe.redirectToCheckout({ sessionId: session.id });
    })
    .then(function (result) {
      // If redirectToCheckout fails due to a browser or network
      // error, you should display the localized error message to your
      // customer using error.message.
      if (result.error) {
        alert(result.error.message);
      }
    })
    .catch(function (error) {
      console.error("Error:", error);
    });
});
