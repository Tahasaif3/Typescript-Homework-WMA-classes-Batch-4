class ProductDemonstration {
    constructor(public id: number, public name: string, public price: number) {}
  }
  
  const products: ProductDemonstration[] = [];
  
  function addProduct(id: number, name: string, price: number): void {
    products.push(new ProductDemonstration(id, name, price));
  }
  
  function listProducts(): void {
    if (products.length === 0) {
      console.log("No products are available in the inventory.");
    } else {
      console.log("Product List:");
      products.forEach(p => console.log(`ID: ${p.id}, Name: ${p.name}, Price: $${p.price}`));
    }
  }
  
  function updateProduct(id: number, name?: string, price?: number): void {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        if (name) products[i].name = name;
        if (price) products[i].price = price;
        return; 
      }
    }
    console.log(`Product with ID ${id} not found in inventory.`);
  }
  
  function deleteProduct(id: number): void {
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products.splice(i, 1);
        return; 
      }
    }
    console.log(`Product with ID ${id} not found in the inventory.`);
  }
  
  addProduct(1, "Laptop", 1000);
  addProduct(2, "Phone", 500);
  addProduct(3, "Tablet", 300);
  
  console.log("\nAll Products available in the inventory:");
  listProducts();
  
  console.log("\nUpdated Product with ID 2 in the inventory:");
  updateProduct(2, "Smartphone", 700);
  listProducts();
  
  console.log("\nDeleted Product with ID 3 in the inventory:");
  deleteProduct(3);
  listProducts();
  