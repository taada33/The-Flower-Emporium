const addToCartBtn = document.querySelector('.add-cart');
const addedToCartEl = document.querySelector('.added-to-cart');

if(addedToCartEl){
    addedToCartEl.style.display = "none";
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
            addedToCartEl.style.display = "block";
            addToCartBtn.style.display = "none";
        }
    })
}




