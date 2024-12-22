var Product = /** @class */ (function () {
    function Product(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.updateQuantity = function (newQuantity) {
        if (newQuantity < 0) {
            console.error("Quantity cannot be less than zero.");
            return;
        }
        this.quantity = newQuantity;
        console.log("Quantity updated to ".concat(this.quantity));
    };
    Product.prototype.calculateTotalPrice = function () {
        return this.price * this.quantity;
    };
    return Product;
}());
var product = new Product(1, "Apple", 0.5, 100);
console.log(product);
product.updateQuantity(150);
console.log(product);
var totalPrice = product.calculateTotalPrice();
console.log("Total price of available stock: $".concat(totalPrice.toFixed(2)));
