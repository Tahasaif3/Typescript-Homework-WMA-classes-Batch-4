function calculateTotal(price, discount) {
    if (discount === void 0) { discount = 0; }
    if (discount > 0) {
        return price - (price * discount) / 100;
    }
    else {
        return price;
    }
}
console.log(calculateTotal(100, 5));
console.log(calculateTotal(100));
