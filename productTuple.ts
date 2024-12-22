type ProductTuple = [number, string, number];

const printProductDetails = ([id, name, price]:ProductTuple): void => {
  console.log(`Product ID: ${id}, Name: ${name}, Price: $${price}`);
}

let product1:ProductTuple = [2 , "Tshirt",2300]
printProductDetails(product1);

