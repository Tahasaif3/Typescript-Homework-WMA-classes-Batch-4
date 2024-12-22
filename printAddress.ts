const printAddress = (street: number, city: string, country?: string): string => {
  if (country) {
      return `Address: Country: ${country}, City: ${city} Street: ${street}`;
  }
  return `Address: City: ${city}, Street: ${street}`;
}

console.log(printAddress(10,"Hyderabad","Pakistan"));
console.log(printAddress(10,"Hyderabad"));



