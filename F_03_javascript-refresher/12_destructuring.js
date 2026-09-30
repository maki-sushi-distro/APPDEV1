const person = { name: "Henry Sy", age: 60 };
const { name, age } = person;
console.log(name, age);

const company = ["SM Store", "BDO", "NGCP"];
const [company1, company2] = company;
console.log(company1, company2);

function sayMyName({ name }) {
  console.log(name);
}

sayMyName(person);
