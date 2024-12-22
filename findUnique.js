function findUnique(arr) {
    return Array.from(new Set(arr));
}
var numbers = [1, 2, 2, 3, 4, 4, 5];
var letters = ["a", "b", "c", "d", "e", "e"];
console.log(findUnique(numbers));
console.log(findUnique(letters));
