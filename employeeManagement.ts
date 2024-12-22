interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
}

const filterEmployeesByDepartment = (employees: Employee[], department: string): Employee[] => {
  return employees.filter(employee => employee.department === department);
}

const updateEmployee = (employee: Employee, updates: Partial<Employee>): Employee => {
  return { ...employee, ...updates };
}

const employees: Employee[] = [
  { id: 1, name: "Taha", department: "Engineering", position: "Web Developer" },
  { id: 2, name: "Saim", department: "Technology", position: "Tech Analyst" },
  { id: 3, name: "Rehman", department: "Engineering", position: "Software Developer" },
];

//Filtered Employees by Department
const engineeringEmployees = filterEmployeesByDepartment(employees, "Engineering");
console.log("Engineering Employees:", engineeringEmployees);

//Updated Employee
const employeeBeforeUpdate: Employee = { id: 1, name: "Alice", department: "Engineering", position: "Developer" };
const updatedEmployee = updateEmployee(employeeBeforeUpdate, { position: "Team Lead" });
console.log("Updated Employee:", updatedEmployee);