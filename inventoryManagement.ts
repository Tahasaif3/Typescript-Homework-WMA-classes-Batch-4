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

  public updateQuantity(newQuantity: number): void {
      if (newQuantity < 0) {
          console.error('Quantity cannot be less than zero.');
          return;
      }
      this.quantity = newQuantity;
      console.log(`Quantity of product "${this.name}" updated to ${this.quantity} as new stock has been arrived.`);
  }

  public calculateTotalPrice(): number {
      return this.price * this.quantity;
  }
}

const product1 = new Product(1, 'Iphone 14 pro max', 999.99, 20);

console.log(`Product ID: ${product1['id']}`);
console.log(`Product Name: ${product1['name']}`);
console.log(`Product Price: $${product1['price']}`);
console.log(`Product Quantity: ${product1['quantity']}`);
console.log(`Total Price for the available stock: $${product1.calculateTotalPrice().toFixed(2)}`);

product1.updateQuantity(30);
console.log(`Total Price for the available stock after update: $${product1.calculateTotalPrice().toFixed(2)}`);