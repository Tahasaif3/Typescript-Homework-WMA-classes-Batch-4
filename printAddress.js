var printAddress = function (street, city, country) {
    if (country) {
        return "Address: Country: ".concat(country, ", City: ").concat(city, " Street: ").concat(street);
    }
    return "Address: City: ".concat(city, ", Street: ").concat(street);
};
console.log(printAddress(10, "Hyderabad", "Pakistan"));
console.log(printAddress(10, "Hyderabad"));
