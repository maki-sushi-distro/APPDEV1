function division(num1, num2) {
  if (num2 === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}
try {
  console.log(divide(0, 10));
} catch (error) {
  console.log("Something went wrong:", error.message);
}

//JSON.stringify & JSON.parse

const user = { name: "Maki", age: 23, isStudent: true };

const jsonString = JSON.stringify(user);
console.log(jsonString); // '{"name":"Maki","age":23,...}'

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name); // "Maki"
console.log(typeof jsonString, typeof parsedUser); // string object
