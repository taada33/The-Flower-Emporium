const rmProducts = document.querySelectorAll('.rm-btn');

rmProducts.forEach((product) => {
    product.addEventListener('click', async () => {
        const response = await fetch(`/api/productCart/${product.getAttribute('data-id')}`, {
            method: 'delete',
        })
        document.location.reload();
    })
})

const totals = document.querySelectorAll('.total');

totals.forEach((total) => {
    total.innerHTML = `total: $ ${document.querySelector('#quantity').value * 
    document.querySelector('#quantity').getAttribute('data-price')}`
})


const input = document.querySelector("#quantity");
const log = document.getElementById("values");

input.addEventListener("input", updateValue);

function updateValue(e) {
  log.textContent = e.target.value;
}
