const sidequest = ["cafe hopping", "museum visits", "sponty getaways"];
sidequest.map((sidequest) => console.log("I like going for", sidequest));

const student = { name: "Maki", age: "23" };
const { name, age } = student;
console.log(name, age);

const numbers = [2, 4, 6];
const newNumbers = [...numbers, 8, 10]; //[2,4,6,8,10]
console.log(newNumbers);
