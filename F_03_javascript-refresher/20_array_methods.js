const students = [
  { name: "Marco", grade: 76 },
  { name: "Ella", grade: 59 },
  { name: "Diego", grade: 91 },
  { name: "Faith", grade: 60 },
];

const passing = students.filter((s) => s.grade >= 60);
console.log(passing.map((s) => s.name)); // ["Marco", "Diego", "Faith"]

const lookFor = students.find((s) => s.name === "Diego");
console.log(lookFor); // { name: "Diego", grade: 91 }

console.log(students.some((s) => s.grade < 60)); // true
console.log(students.every((s) => s.grade >= 60)); // false

const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map((s) => s.name)); // ["Diego", "Marco", "Faith", "Ella"]
