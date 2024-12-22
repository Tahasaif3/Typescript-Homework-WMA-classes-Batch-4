const cities: string[] = ["New York", "London", "Tokyo", "Paris", "Sydney"];

const printCities = (cities: string[]): void =>  {
  cities.map((city) => {
    console.log(city)
  })
}

printCities(cities);