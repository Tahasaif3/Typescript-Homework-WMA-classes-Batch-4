function calculateAverageGrade(students) {
    var totalGrade = 0;
    for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
        var student = students_1[_i];
        totalGrade += student.grade;
    }
    var averageGrade = totalGrade / students.length;
    return averageGrade;
}
;
var students = [
    { name: "Taha", age: 17, grade: 120 },
    { name: "Saif", age: 18, grade: 90 },
    { name: "rehman", age: 21, grade: 50 },
];
console.log(calculateAverageGrade(students));
