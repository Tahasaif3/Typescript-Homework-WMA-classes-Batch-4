function calculateTotal(price: number, discount: number = 0): number {
  if (discount > 0) {
    return price - (price * discount) / 100;
  } else {
    return price;
  }
}

console.log(calculateTotal(100, 5));
console.log(calculateTotal(100));
