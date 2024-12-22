var Product = /** @class */ (function () {
    function Product(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    Product.prototype.updateQuantity = function (newQuantity) {
        if (newQuantity < 0) {
            console.error('Quantity cannot be less than zero.');
            return;
        }
        this.quantity = newQuantity;
        console.log("Quantity of product \"".concat(this.name, "\" updated to ").concat(this.quantity, " as new stock has been arrived."));
    };
    Product.prototype.calculateTotalPrice = function () {
        return this.price * this.quantity;
    };
    return Product;
}());
var product1 = new Product(1, 'Iphone 14 pro max', 999.99, 20);
console.log("Product ID: ".concat(product1['id']));
console.log("Product Name: ".concat(product1['name']));
console.log("Product Price: $".concat(product1['price']));
console.log("Product Quantity: ".concat(product1['quantity']));
console.log("Total Price for the available stock: $".concat(product1.calculateTotalPrice().toFixed(2)));
product1.updateQuantity(30);
console.log("Total Price for the available stock after update: $".concat(product1.calculateTotalPrice().toFixed(2)));
