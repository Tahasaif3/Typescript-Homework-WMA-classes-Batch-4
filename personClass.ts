class Person {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

 getFullName = (): string => `${this.firstName} ${this.lastName}`;
}

const person = new Person("Taha", "Saif");
console.log(person.getFullName());
