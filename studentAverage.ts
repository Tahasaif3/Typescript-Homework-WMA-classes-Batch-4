interface Student {
  name: string;
  age: number;
  grade: number;
}

const calculateAverageGrade = (students: Student[]): number => {
  let totalGrade = 0;

  for (const student of students) {
    totalGrade += student.grade;
  }

  const averageGrade = totalGrade / students.length;
  return averageGrade;
};

let students: Student[] = [
  { name: "Taha",age:17, grade: 120 },
  { name: "Saif",age:18, grade: 90 },
  { name: "rehman",age:21, grade: 50 },
];

console.log(calculateAverageGrade(students));

