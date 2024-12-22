interface Car {
  brand: string;
  model: string;
  year: number;
}

const CarDetails = (car: Car): string => {
  return `Car model: ${car.model} Car brand: ${car.brand} Car year: ${car.year}`;
};

let cardetails1: Car = {
  brand: "Toyota",
  model: "Altis Grande 1.8",
  year: 2021,
};

console.log(CarDetails(cardetails1));