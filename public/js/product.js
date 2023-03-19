const cartBtn = document.querySelector('.add-cart');
const quantityInput = document.querySelector('#quantity')

cartBtn.addEventListener('click', async () => {
    if(!+cartBtn.getAttribute('data-stock')){
        alert({ message: "Sold out!"})
    }else{
        const response = await fetch('api/productCart/', {
            method: 'POST',
            body: JSON.stringify({ 
                id: cartBtn.getAttribute('data-id'), 
                quantity: quantityInput.value.trim(), 
            }),
            headers: {'Content-Type': 'application/json'},
        })
    }
})

