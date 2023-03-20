const addToCartBtn = document.querySelector('.add-cart');

addToCartBtn.addEventListener('click', async () => {
    if(!+addToCartBtn.getAttribute('data-stock')){
        alert("Sold out!")
    }else{
        const response = await fetch('/api/productCart/', {
            method: 'POST',
            body: JSON.stringify({ 
                id: addToCartBtn.getAttribute('data-id'), 
                quantity: 1, 
            }),
            headers: {'Content-Type': 'application/json'},
        })
        alert("added to cart!")
    }
})

