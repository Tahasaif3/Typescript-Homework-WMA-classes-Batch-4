var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
function getColorName(color) {
    return color;
}
var color1 = Color.Red;
console.log(color1);
