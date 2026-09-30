const grades = 19;
const remarks = grades >= 15 ? "Pass" : "Fail";
console.log(remarks); // pass

const num = 15;
console.log(num % 2 === 0 ? "Even number" : "Odd number");

// Optional Chaining & Nullish Coalescing - condition ? a : b, ?. and ??

const user = { name: "Timothee" }; // no address property

console.log(user.name.address?.city); // undefined -- crash-proof(no crash)

const age = 0;

console.log(age || 21); // 21--wrong, 0 is falsy, so || overrides it
console.log(age ?? 21); // 0 -- right, only replaces null/underfined
