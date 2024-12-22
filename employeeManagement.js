var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function filterEmployeesByDepartment(employees, department) {
    return employees.filter(function (employee) { return employee.department === department; });
}
function updateEmployee(employee, updates) {
    return __assign(__assign({}, employee), updates);
}
var employees = [
    { id: 1, name: "Alice", department: "Engineering", position: "Developer" },
    { id: 2, name: "Bob", department: "Marketing", position: "Analyst" },
    { id: 3, name: "Charlie", department: "Engineering", position: "Tester" },
];
//Filtered Employees by Department
var engineeringEmployees = filterEmployeesByDepartment(employees, "Engineering");
console.log("Engineering Employees:", engineeringEmployees);
//Updated Employee
var employeeToUpdate = { id: 1, name: "Alice", department: "Engineering", position: "Developer" };
var updatedEmployee = updateEmployee(employeeToUpdate, { position: "Team Lead" });
console.log("Updated Employee:", updatedEmployee);
