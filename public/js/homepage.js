const flowersTile = document.querySelector('#flowersTile');
const plantsTile = document.querySelector('#plantsTile');
const plantersTile = document.querySelector('#plantersTile');
const homeDecorTile = document.querySelector('#homeDecorTile');

flowersTile.addEventListener('click', () => {
    document.location.assign('/category/1')
})

plantsTile.addEventListener('click', () => {
    document.location.assign('/category/2')
})

plantersTile.addEventListener('click', () => {
    document.location.assign('/category/3')
})

homeDecorTile.addEventListener('click', () => {
    document.location.assign('/category/4')
})