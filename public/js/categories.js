const tiles = document.querySelectorAll('.card');

tiles.forEach((tile) => {
    tile.addEventListener('click', () => {
        const id = tile.getAttribute('data-id');
        document.location.pathname = `product/${id}`
    })
})
