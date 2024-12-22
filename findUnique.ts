function findUnique<T>(arr: T[]): T[] {
  return Array.from(new Set(arr));
}


const numbers = [1, 2, 2, 3, 4, 4, 5];
const letters = ["a","b","c","d","e","e"];
console.log(findUnique(numbers)); 
console.log(findUnique(letters));