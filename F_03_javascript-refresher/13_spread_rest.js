const user = { name: "Steve", role: "Admin" };
const newUser = { ...user, email: "steveis@admin.com" };
console.log(newUser); // { name: "Steve", role: "Admin", email: "steveis@admin.com" }

const numbers = [10, 20, 30];
const newNumber = [...numbers, 40, 50];
console.log(newNumber); // [10, 20, 30, 40, 50]

function sum(...args) {
  return args.reduce((total, n) => total + n, 0); // args.reduce adds all the numbers down to one value remaining(e.g 5+0 = 5, then 5+10 = 15, and soon until the final value is 50)
}
console.log(sum(5, 10, 15, 20)); // 50
