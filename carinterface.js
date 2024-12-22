var CarDetails = function (car) {
    return "Car model: ".concat(car.model, " Car brand: ").concat(car.brand, " Car year: ").concat(car.year);
};
var cardetails1 = {
    brand: "Toyota",
    model: "Grande",
    year: 2021,
};
console.log(CarDetails(cardetails1));
