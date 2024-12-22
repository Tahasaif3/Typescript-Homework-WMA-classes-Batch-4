function printProductDetails(product) {
    var id = product[0], name = product[1], price = product[2];
    console.log("Product ID: ".concat(id, ", Name: ").concat(name, ", Price: $").concat(price));
}
var product1 = [2, "Taha", 2300];
printProductDetails(product1);
