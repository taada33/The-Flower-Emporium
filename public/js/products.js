

document.addEventListener('DOMContentLoaded', function() {
    var offset = 1; // Set the offset to 1 to start loading products after the initial product
    
    document.getElementById('load-more').addEventListener('click', function() {
      // Make an AJAX request to fetch the remaining products
      fetch('/load-more', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'offset=' + offset
      })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('Error loading products.');
        }
      })
      .then(data => {
        // Append the fetched products to the #remaining-products div
        document.getElementById('remaining-products').insertAdjacentHTML('beforeend', data);
  
        // Increment the offset for the next AJAX request
        offset += 5;
      })
      .catch(error => {
        alert(error.message);
      });
    });
  });