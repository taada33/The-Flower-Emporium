module.exports = {
    checkCategory: (categoryId) => {
        if(categoryId == 1){
            return `<h1>Flowers</h1>
            <p>Order hand-tied bouquets, floral arrangements and market bunches for delivery across Ottawa.
            </p>`;
        }else if(categoryId == 2){
            return `<h1>Plants</h1>
            <p>Order flowering orchids, succulent gardens, philodendrons and monstera plants as well as other seasonal favourites for delivery across Ottawa.
            </p>`;
        }else if(categoryId == 3){
            return `<h1>Planters</h1>
            <p></p>`;
        }else{
            return `<h1>Home Decor</h1>
            <p>Thoughtful and contemporary designs for your home.</p>`;
        }
    },

    total: (price,quantity) => {
        //total cost of a quantity of product
        return price * quantity;
    },
}