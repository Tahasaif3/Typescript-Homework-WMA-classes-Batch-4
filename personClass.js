var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        var _this = this;
        this.getFullName = function () { return "".concat(_this.firstName, " ").concat(_this.lastName); };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var person = new Person("Taha", "Saif");
console.log(person.getFullName());
