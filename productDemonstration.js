var ProductDemonstration = /** @class */ (function () {
    function ProductDemonstration(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    return ProductDemonstration;
}());
var products = [];
function addProduct(id, name, price) {
    products.push(new ProductDemonstration(id, name, price));
}
function listProducts() {
    if (products.length === 0) {
        console.log("No products are available in the inventory.");
    }
    else {
        console.log("Product List:");
        products.forEach(function (p) { return console.log("ID: ".concat(p.id, ", Name: ").concat(p.name, ", Price: $").concat(p.price)); });
    }
}
function updateProduct(id, name, price) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            if (name)
                products[i].name = name;
            if (price)
                products[i].price = price;
            return;
        }
    }
    console.log("Product with ID ".concat(id, " not found in inventory."));
}
function deleteProduct(id) {
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            products.splice(i, 1);
            return;
        }
    }
    console.log("Product with ID ".concat(id, " not found in the inventory."));
}
addProduct(1, "Laptop", 1000);
addProduct(2, "Phone", 500);
addProduct(3, "Tablet", 300);
console.log("\nAll Products available in the inventory:");
listProducts();
console.log("\nUpdated Product with ID 2 in the inventory:");
updateProduct(2, "Smartphone", 700);
listProducts();
console.log("\nDeleted Product with ID 3 in the inventory:");
deleteProduct(3);
listProducts();
