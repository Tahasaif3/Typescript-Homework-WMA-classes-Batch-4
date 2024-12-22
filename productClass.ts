class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(id: number, name: string, price: number, quantity: number) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.quantity = quantity;
  }

  updateQuantity(newQuantity: number): void {
      if (newQuantity < 0) {
          console.error("Quantity cannot be less than zero.");
          return;
      }
      this.quantity = newQuantity;
      console.log(`Quantity updated to ${this.quantity}`);
  }

  calculateTotalPrice(): number {
      return this.price * this.quantity;
  }
}

const product = new Product(1, "Apple", 0.5, 100);
console.log(product)
product.updateQuantity(150);
console.log(product)
const totalPrice = product.calculateTotalPrice();
console.log(`Total price of available stock: $${totalPrice.toFixed(2)}`);
