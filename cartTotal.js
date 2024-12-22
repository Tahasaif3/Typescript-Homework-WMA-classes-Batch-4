var calculateCartTotal = function (cart) {
    return cart.reduce(function (total, product) { return total + (product.price * product.quantity); }, 0);
};
var cart = [
    { id: 1, name: "T-shirt", price: 1900, quantity: 5 },
    { id: 2, name: "Jeans", price: 2200, quantity: 6 },
    { id: 3, name: "Shoes", price: 3000, quantity: 4 },
];
console.log(calculateCartTotal(cart));
